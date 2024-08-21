const createBetModelForLeague = require('./model/create-bet-model');
const dataAccess = require('./data-access/mongodb');
const api = require('./api/football-api');
const service = require('./service/bet-service');


exports.handler = async (event) => {
    if (process.env.NODE_ENV !== 'production') {
        require('dotenv').config();
    }

    await dataAccess.connectToDatabase(process.env.MONGODB_USERNAME, process.env.MONGODB_PASSWORD, process.env.DATABASE);

    const body = JSON.parse(event.body);
    const { leagueId, season, bubbleId, userId } = body;

    const bolao = await dataAccess.findBolaoByBubbleId(bubbleId);

    if (!bolao) {
        return {
            statusCode: 400,
            body: JSON.stringify({ message: 'Bolão não encontrado' })
        };
    }

    const response = await api.getFixturesByLeagueAndSeason(leagueId, season);

    const BetModel = createBetModelForLeague(`bets-${bubbleId}`);

    const betsPromises = response.map(item => {
        const rodada = service.getRodada(item.league.round);
        const bet = new BetModel({
            fixture: {
                bubbleId: bolao.bubbleId,
                id: item.fixture.id,
                referee: item.fixture.referee,
                timezone: item.fixture.timezone,
                date: item.fixture.date,
                timestamp: item.fixture.timestamp,
                periods: {
                    first: item.fixture.periods.first,
                    second: item.fixture.periods.second
                },
                venue: {
                    id: item.fixture.venue.id,
                    name: item.fixture.venue.name,
                    city: item.fixture.venue.city
                },
                status: {
                    long: item.fixture.status.long,
                    short: item.fixture.status.short,
                    elapsed: item.fixture.status.elapsed
                }
            },
            league: {
                id: item.league.id,
                name: item.league.name,
                country: item.league.country,
                logo: item.league.logo,
                flag: item.league.flag,
                season: item.league.season,
                round: item.league.round
            },
            bubbleId: bubbleId,
            userId: userId,
            betTeams: {
                home: {
                    teamId: item.teams.home.id,
                    teamName: item.teams.home.name,
                    goals: null
                },
                away: {
                    teamId: item.teams.away.id,
                    teamName: item.teams.away.name,
                    goals: null
                }
            },
            goals: {
                home: item.goals.home,
                away: item.goals.away
            },
            pesoPorRodada: service.calcularPesoPorRodada(rodada),
            pontosCategoria: {
                placarPerdedor: 0,
                acertouResultado: 0,
                palpiteEstimulado: 0,
                variacaoDoRankingEmRelacaoAPosicaoAnterior: 0,
                tempoAcumulado: 0,
                palpitesDoUsuario: 0
            },
            totalDePontos: 0
        });
        // Envolva cada operação de salvamento em uma função que captura o erro
        // e retorna um objeto identificando a aposta falhada.
        return bet.save().then(() => ({ status: 'fulfilled', bet }))
            .catch(error => ({ status: 'rejected', error, item }));
    });

    const results = await Promise.allSettled(betsPromises);

    // Filtra as apostas falhadas baseado nos resultados.
    const failedBets = results.filter(r => r.status === 'rejected').map(r => r.item);

    if (failedBets.length > 0) {
        return {
            statusCode: 500,
            body: JSON.stringify({
                message: 'Algumas apostas não puderam ser criadas.',
                failedBets: failedBets
            })
        };
    }

    return {
        statusCode: 200,
        body: JSON.stringify({ message: 'Todas as apostas criadas com sucesso' })
    };
};
