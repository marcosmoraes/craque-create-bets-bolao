# Create Bets Bolão

Serviço responsável por criar e gerenciar apostas dos usuários em um sistema de bolão de futebol.

## 🚀 Tecnologias

- Node.js 18.x
- MongoDB
- Serverless Framework
- AWS Lambda
- API Football

## 📋 Pré-requisitos

- Node.js 18.x
- MongoDB
- Serverless Framework CLI
- Conta AWS (para deploy)

## 🔧 Instalação

1. Clone o repositório
```bash
git clone [url-do-repositorio]
```

2. Instale as dependências
```bash
npm install
```

3. Configure as variáveis de ambiente
```bash
cp .env.example .env
# Edite o arquivo .env com suas credenciais
```

4. Execute localmente
```bash
serverless offline
```

## 📚 Documentação

A documentação completa do projeto está disponível na pasta `docs/`:

- [Visão Geral](docs/00-project-overview.md)
- [Arquitetura](docs/01-architecture.md)
- [Componentes](docs/02-components.md)
- [Processo de Desenvolvimento](docs/03-development-process.md)
- [API](docs/04-api-documentation.md)
- [Log de Progresso](docs/05-progress-log.md)

## 🛠️ Desenvolvimento

### Comandos Úteis

- Desenvolvimento local: `serverless offline`
- Testes: `npm test`
- Linting: `npm run lint`
- Deploy dev: `serverless deploy --stage dev`
- Deploy prod: `serverless deploy --stage prod`

## 📝 Licença

Este projeto está sob a licença [MIT](LICENSE).

## 🤝 Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request
