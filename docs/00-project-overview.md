# Visão Geral do Projeto

## Nome
create-bets-bolao

## Descrição
Este serviço é responsável por criar e gerenciar apostas dos usuários em um sistema de bolão. Ele integra-se com uma API de futebol para obter dados de partidas e permite que os usuários façam apostas em jogos específicos.

## Principais Funcionalidades
- Criação de apostas para jogos de futebol
- Integração com API de futebol para dados de partidas
- Gerenciamento de bolões por usuário
- Cálculo de pontuação baseado em rodadas
- Sistema de pesos por rodada

## Stack Tecnológica
- Node.js 18.x
- MongoDB
- Serverless Framework
- AWS Lambda
- API Football (integração externa)

## Estrutura do Repositório
```
create-bets-bolao/
├── api/           # Integrações com APIs externas
├── data-access/   # Camada de acesso a dados
├── model/         # Modelos de dados
├── service/       # Lógica de negócio
├── handler.js     # Ponto de entrada da função Lambda
└── serverless.yml # Configuração do Serverless Framework
```

## Variáveis de Ambiente
- MONGODB_USERNAME: Credencial de acesso ao MongoDB
- MONGODB_PASSWORD: Senha de acesso ao MongoDB
- DATABASE: Nome do banco de dados
- NODE_ENV: Ambiente de execução (development/production) 