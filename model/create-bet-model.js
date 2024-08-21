const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { v4: uuidv4 } = require('uuid');

const betTeamSchema = new Schema({
  teamId: Number,
  teamName: String,
  goals: Number,
});

const pontosCategoriaSchema = new Schema({
  pontosGanhos: Number,
  placarCheio: Number,
  placarVencedor: Number,
  diferencaDeGols: Number,
  placarPerdedor: Number,
  acertouResultado: Number,
  palpiteEstimulado: Number,
  variacaoDoRankingEmRelacaoAPosicaoAnterior: Number,
  tempoAcumulado: Number,
  palpitesDoUsuario: Number,
});

const betSchema = new Schema({
  bubbleId: {
    type: String,
    index: true
  },
  fixture: {
    id: {
      type: Number,
      index: true // Define o campo fixture.id como índice
    },
    referee: String,
    timezone: String,
    date: String,
    timestamp: Number,
    periods: {
      first: Number,
      second: Number
    },
    venue: {
      id: Number,
      name: String,
      city: String
    },
    status: {
      long: String,
      short: String,
      elapsed: Number
    }
  },
  league: {
    id: Number,
    name: String,
    country: String,
    logo: String,
    flag: String,
    season: Number,
    round: String
  },
  userId: String,
  betId: {
    type: String,
    default: function () {
      return uuidv4(); // Gera um UUID automaticamente
    },
    unique: true, // Garante que o betId seja único
  },
  betDate: {
    type: Date,
    default: Date.now
  },
  betTeams: {
    home: betTeamSchema,
    away: betTeamSchema,
  },
  goals: {
    home: Number,
    away: Number
  },
  pesoPorRodada: Number,
  pontosCategoria: pontosCategoriaSchema,
  totalDePontos: Number,
  pontosCalculados: {
    type: Boolean,
    default: false
  }
});

function createBetModelForLeague(leagueName) {
  const collectionName = `${leagueName.toLowerCase().replace(/\s+/g, '-')}`; // substitua espaços por hífens e torne tudo minúsculo
  return mongoose.model('Bet', betSchema, collectionName);
}

module.exports = createBetModelForLeague;
