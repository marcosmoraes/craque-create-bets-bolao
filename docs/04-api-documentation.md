# Documentação da API

## Endpoint: Criar Apostas

### POST /create-bet

Cria novas apostas para um bolão específico.

#### Request

```json
{
    "leagueId": "number",
    "season": "number",
    "bubbleId": "string",
    "userId": "string"
}
```

#### Parâmetros

| Parâmetro | Tipo   | Descrição                    |
|-----------|--------|------------------------------|
| leagueId  | number | ID da liga de futebol        |
| season    | number | Ano da temporada             |
| bubbleId  | string | ID do bolão                  |
| userId    | string | ID do usuário criando a aposta|

#### Respostas

##### Sucesso (200)
```json
{
    "message": "Todas as apostas criadas com sucesso"
}
```

##### Erro (400)
```json
{
    "message": "Bolão não encontrado"
}
```

##### Erro (500)
```json
{
    "message": "Algumas apostas não puderam ser criadas",
    "failedBets": [
        {
            "fixture": {
                "id": "number",
                "date": "string"
            },
            "league": {
                "id": "number",
                "name": "string"
            }
        }
    ]
}
```

## Modelo de Dados

### Aposta
```json
{
    "fixture": {
        "bubbleId": "string",
        "id": "number",
        "referee": "string",
        "timezone": "string",
        "date": "string",
        "timestamp": "number",
        "periods": {
            "first": "number",
            "second": "number"
        },
        "venue": {
            "id": "number",
            "name": "string",
            "city": "string"
        },
        "status": {
            "long": "string",
            "short": "string",
            "elapsed": "number"
        }
    },
    "league": {
        "id": "number",
        "name": "string",
        "country": "string",
        "logo": "string",
        "flag": "string",
        "season": "number",
        "round": "string"
    },
    "bubbleId": "string",
    "userId": "string",
    "betTeams": {
        "home": {
            "teamId": "number",
            "teamName": "string",
            "goals": "number"
        },
        "away": {
            "teamId": "number",
            "teamName": "string",
            "goals": "number"
        }
    },
    "goals": {
        "home": "number",
        "away": "number"
    },
    "pesoPorRodada": "number",
    "pontosCategoria": {
        "placarPerdedor": "number",
        "acertouResultado": "number",
        "palpiteEstimulado": "number",
        "variacaoDoRankingEmRelacaoAPosicaoAnterior": "number",
        "tempoAcumulado": "number",
        "palpitesDoUsuario": "number"
    },
    "totalDePontos": "number"
}
```

## Códigos de Erro

| Código | Descrição                    |
|--------|------------------------------|
| 200    | Sucesso                      |
| 400    | Requisição inválida          |
| 500    | Erro interno do servidor     |

## Limitações

- Timeout da função: 60 segundos
- Tamanho máximo do payload: 6MB
- Número máximo de apostas por requisição: limitado pela API de futebol 