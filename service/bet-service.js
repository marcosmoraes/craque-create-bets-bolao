function calcularPesoPorRodada(rodada) {
    const firstRound = 10;
    if (rodada === 1) {
        return firstRound;
    }
    return firstRound + rodada;
}

function getRodada(round) {
    return parseInt(round.split(' ')[3]);
}

module.exports = { calcularPesoPorRodada, getRodada}

//"round": "2nd Round"
//"round": "Regular Season - 1"