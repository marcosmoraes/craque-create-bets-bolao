# Componentes do Sistema

## Modelos de Dados

### BetModel
```javascript
{
    fixture: {
        bubbleId: String,
        id: Number,
        referee: String,
        timezone: String,
        date: Date,
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
    bubbleId: String,
    userId: String,
    betTeams: {
        home: {
            teamId: Number,
            teamName: String,
            goals: Number
        },
        away: {
            teamId: Number,
            teamName: String,
            goals: Number
        }
    },
    goals: {
        home: Number,
        away: Number
    },
    pesoPorRodada: Number,
    pontosCategoria: {
        placarPerdedor: Number,
        acertouResultado: Number,
        palpiteEstimulado: Number,
        variacaoDoRankingEmRelacaoAPosicaoAnterior: Number,
        tempoAcumulado: Number,
        palpitesDoUsuario: Number
    },
    totalDePontos: Number
}
```

## Serviços

### BetService
- Responsável pela lógica de negócio das apostas
- Calcula pesos por rodada
- Gerencia pontuações e categorias

### FootballAPI
- Integração com API externa de futebol
- Obtém dados de partidas e ligas
- Gerencia autenticação e requisições

## Data Access

### MongoDB
- Conexão com banco de dados
- Operações CRUD
- Gerenciamento de coleções dinâmicas

## Endpoints

### POST /create-bet
- Cria novas apostas para um bolão
- Parâmetros:
  - leagueId: ID da liga
  - season: Temporada
  - bubbleId: ID do bolão
  - userId: ID do usuário

## Fluxos de Processamento

### Criação de Apostas
1. Validação de entrada
2. Busca de dados da partida
3. Criação do modelo de aposta
4. Cálculo de pesos
5. Persistência no banco

### Cálculo de Pontuação
1. Identificação da rodada
2. Aplicação de pesos
3. Cálculo de categorias
4. Atualização de pontuação total 