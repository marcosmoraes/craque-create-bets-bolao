# Create Bets Bolão

A serverless service for creating and managing betting pools in the Craque application.

## Description

The Create Bets Bolão service is a serverless application built with AWS Lambda and Serverless Framework. It provides functionality for creating and managing betting pools, processing user bets, and calculating results.

## Technologies

- Node.js 18.x
- Serverless Framework
- AWS Lambda
- AWS API Gateway
- MongoDB
- Express
- Axios
- Dotenv

## Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/create-bets-bolao.git
cd create-bets-bolao
```

2. Install dependencies:
```bash
npm install
```

3. Configure environment variables:
```bash
cp .env.example .env
```

4. Edit the `.env` file with your credentials:
```env
MONGODB_URI=your_mongodb_uri
AWS_REGION=your_aws_region
AWS_ACCESS_KEY_ID=your_access_key
AWS_SECRET_ACCESS_KEY=your_secret_key
```

## Documentation

The project documentation is available in the `docs/` directory:

- [Project Overview](docs/00-project-overview.md)
- [System Architecture](docs/01-architecture.md)
- [System Components](docs/02-components.md)
- [Development Process](docs/03-development-process.md)
- [API Documentation](docs/04-api-documentation.md)
- [Progress Log](docs/05-progress-log.md)

## Development

1. Start the development server:
```bash
npm run dev
```

2. Run tests:
```bash
npm test
```

3. Build the project:
```bash
npm run build
```

4. Deploy to AWS:
```bash
npm run deploy
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## Portuguese Version

[Versão em Português](docs/README.pt-BR.md)
