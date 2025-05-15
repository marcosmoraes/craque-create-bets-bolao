# Arquitetura do Sistema

## Visão Geral da Arquitetura
O sistema segue uma arquitetura serverless, utilizando AWS Lambda como função principal. A arquitetura é dividida em camadas bem definidas para garantir separação de responsabilidades e manutenibilidade.

## Camadas do Sistema

### 1. API Layer (api/)
- Responsável pela integração com serviços externos
- Implementa a comunicação com a API de futebol
- Gerencia autenticação e requisições HTTP

### 2. Data Access Layer (data-access/)
- Gerencia a conexão com o MongoDB
- Implementa operações CRUD no banco de dados
- Abstrai a complexidade do acesso aos dados

### 3. Model Layer (model/)
- Define a estrutura dos dados
- Implementa validações e regras de negócio básicas
- Cria modelos dinâmicos baseados no ID do bolão

### 4. Service Layer (service/)
- Implementa a lógica de negócio principal
- Calcula pontuações e pesos por rodada
- Gerencia regras específicas do bolão

### 5. Handler Layer (handler.js)
- Ponto de entrada da função Lambda
- Processa eventos HTTP
- Coordena o fluxo entre as diferentes camadas

## Fluxo de Dados
1. Requisição HTTP recebida pelo Lambda
2. Handler processa o evento e extrai parâmetros
3. Service layer coordena a lógica de negócio
4. Data Access layer persiste os dados
5. Resposta é retornada ao cliente

## Considerações de Segurança
- Credenciais armazenadas em variáveis de ambiente
- Validação de entrada de dados
- Tratamento de erros e exceções
- Logs para auditoria

## Escalabilidade
- Arquitetura serverless permite escalabilidade automática
- Conexões com MongoDB gerenciadas eficientemente
- Processamento assíncrono de apostas 