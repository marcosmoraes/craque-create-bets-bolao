const axios = require('axios');

const getFixturesByLeagueAndSeason = async (leagueId, season) => {
    const apiKey = process.env.API_KEY;
    try {
        const response = await axios.get(`https://v3.football.api-sports.io/fixtures?league=${leagueId}&season=${season}`, {
            headers: {
                'x-rapidapi-key': apiKey
            }
        });
        return response.data.response;
    } catch (error) {
        console.error('Erro ao obter estatísticas do fixture:', error);
        throw error;
    }
};

module.exports = {
    getFixturesByLeagueAndSeason
};
