# Componentes do Sistema

## Modelos de Dados

### Bet
```typescript
interface Bet {
    fixture: {
        bubbleId: string;
        id: number;
        referee: string;
        timezone: string;
        date: string;
        timestamp: number;
        periods: {
            first: string;
            second: string;
        };
        venue: {
            id: number;
            name: string;
            city: string;
        };
        status: {
            long: string;
            short: string;
            elapsed: number;
        };
    };
    league: {
        id: number;
        name: string;
        country: string;
        logo: string;
        flag: string;
        season: number;
        round: string;
    };
    bubbleId: string;
    userId: string;
    betTeams: {
        home: {
            teamId: number;
            teamName: string;
            goals: number | null;
        };
        away: {
            teamId: number;
            teamName: string;
            goals: number | null;
        };
    };
    goals: {
        home: number;
        away: number;
    };
    pesoPorRodada: number;
    pontosCategoria: {
        placarPerdedor: number;
        acertouResultado: number;
        palpiteEstimulado: number;
        variacaoDoRankingEmRelacaoAPosicaoAnterior: number;
        tempoAcumulado: number;
        palpitesDoUsuario: number;
    };
    totalDePontos: number;
}
```

## Serviços

### BetService (service/bet-service.js)
- `getRodada(round)`: Extrai o número da rodada da string
- `calcularPesoPorRodada(rodada)`: Calcula o peso da rodada para pontuação

### FootballAPI (api/football-api.js)
- `getFixturesByLeagueAndSeason(leagueId, season)`: Obtém jogos da liga e temporada

### DataAccess (data-access/mongodb.js)
- `connectToDatabase(username, password, database)`: Conecta ao MongoDB
- `findBolaoByBubbleId(bubbleId)`: Busca bolão pelo ID

## Data Access

### MongoDB
- Conexão configurada com credenciais do ambiente
- Coleções dinâmicas por bolão (`bets-${bubbleId}`)
- Índices para otimizar consultas por usuário e bolão

## Endpoints

### POST /create-bet
- Método: POST
- Handler: `handler.handler`
- Parâmetros:
  - `leagueId`: ID da liga
  - `season`: Temporada
  - `bubbleId`: ID do bolão
  - `userId`: ID do usuário
- Retorna: Status da criação das apostas

## Fluxos de Processamento

### Criação de Apostas
1. Recebe parâmetros via POST
2. Valida existência do bolão
3. Obtém jogos da liga/temporada
4. Cria modelo de apostas para o bolão
5. Processa cada jogo:
   - Cria aposta com dados do jogo
   - Calcula peso da rodada
   - Inicializa pontuações
6. Salva apostas em paralelo
7. Retorna status da operação

### Tratamento de Erros
- Captura erros individuais por aposta
- Agrupa apostas com falha
- Retorna lista de apostas não criadas
- Mantém transação atômica por aposta 