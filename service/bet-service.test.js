const { calcularPesoPorRodada, getRodada } = require('./bet-service');  // Ajuste o caminho conforme necessário

describe('calcularPesoPorRodada function', () => {
    test('deve retornar 10 para a primeira rodada', () => {
        expect(calcularPesoPorRodada(1)).toBe(10);
    });

    test('deve retornar 12 para a segunda rodada', () => {
        expect(calcularPesoPorRodada(2)).toBe(12);
    });

    test('deve retornar 15 para a quinta rodada', () => {
        expect(calcularPesoPorRodada(5)).toBe(15);
    });
});

describe('getRodada function', () => {
    test('deve extrair corretamente o número da rodada do texto', () => {
        expect(getRodada('Regular Season - 3')).toBe(3);
    });

    test('deve retornar NaN para texto mal formatado', () => {
        expect(getRodada('Regular - Three')).toBeNaN();
    });

    test('deve tratar texto sem número', () => {
        expect(getRodada('Regular Season -')).toBeNaN();
    });
});
