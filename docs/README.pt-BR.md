# Create Bets Bolão

Um serviço serverless para criar e gerenciar bolões de apostas no aplicativo Craque.

## Descrição

O serviço Create Bets Bolão é uma aplicação serverless construída com AWS Lambda e Serverless Framework. Ele fornece funcionalidades para criar e gerenciar bolões de apostas, processar apostas dos usuários e calcular resultados.

## Tecnologias

- Node.js 18.x
- Serverless Framework
- AWS Lambda
- AWS API Gateway
- MongoDB
- Express
- Axios
- Dotenv

## Instalação

1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/create-bets-bolao.git
cd create-bets-bolao
```

2. Instale as dependências:
```bash
npm install
```

3. Configure as variáveis de ambiente:
```bash
cp .env.example .env
```

4. Edite o arquivo `.env` com suas credenciais:
```env
MONGODB_URI=sua_uri_mongodb
AWS_REGION=sua_regiao_aws
AWS_ACCESS_KEY_ID=sua_access_key
AWS_SECRET_ACCESS_KEY=sua_secret_key
```

## Documentação

A documentação do projeto está disponível no diretório `docs/`:

- [Visão Geral do Projeto](00-project-overview.md)
- [Arquitetura do Sistema](01-architecture.md)
- [Componentes do Sistema](02-components.md)
- [Processo de Desenvolvimento](03-development-process.md)
- [Documentação da API](04-api-documentation.md)
- [Log de Progresso](05-progress-log.md)

## Desenvolvimento

1. Inicie o servidor de desenvolvimento:
```bash
npm run dev
```

2. Execute os testes:
```bash
npm test
```

3. Faça o build do projeto:
```bash
npm run build
```

4. Faça deploy para AWS:
```bash
npm run deploy
```

## Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE](../LICENSE) para detalhes.

## Contribuição

1. Faça o fork do repositório
2. Crie sua branch de feature (`git checkout -b feature/feature-incrivel`)
3. Commit suas mudanças (`git commit -m 'Adiciona uma feature incrível'`)
4. Push para a branch (`git push origin feature/feature-incrivel`)
5. Abra um Pull Request

---

## English Version

[English Version](../README.md) 