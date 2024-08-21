const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bolaoSchema = new Schema({
  bubbleId: {
    type: String,
    unique: true,
    index: true
  },
  name: String,
  season: Number,
  leagueId: Number,
  createdAt: {
    type: Date,
    default: Date.now
  },
  active: {
    type: Boolean,
    default: true
  }
});

const Bolao = mongoose.model('boloes', bolaoSchema);

module.exports = {
  Bolao
};

