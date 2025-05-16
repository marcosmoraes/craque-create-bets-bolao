# Project Overview

## Purpose

The Create Bets Bolão service is responsible for creating and managing betting pools (bolões) in the Craque application. It provides functionality for creating, updating, and managing betting pools, as well as processing user bets.

## Main Technologies

- Node.js 18.x
- Serverless Framework
- AWS Lambda
- AWS SQS
- MongoDB
- Express
- Axios
- Dotenv

## Project Structure

```
├── api/              # API endpoints
├── data-access/      # Data access layer
├── model/           # Data models
├── service/         # Business logic
├── docs/            # Documentation
├── scripts/         # Utility scripts
└── serverless.yml   # Serverless configuration
```

## Main Features

1. Create betting pools
2. Manage pool settings
3. Process user bets
4. Calculate results
5. Generate reports

## Development Environment

### Prerequisites
- Node.js 18.x
- Serverless Framework CLI
- AWS account
- MongoDB instance

### Configuration
1. Clone the repository
2. Install dependencies
3. Configure environment variables
4. Set up MongoDB connection

## Local Execution

1. Start the development server:
```bash
npm run dev
```

2. The service will be available at `http://localhost:3000`

## Deployment

1. Configure AWS credentials
2. Deploy using Serverless:
```bash
serverless deploy
```

## Monitoring

- CloudWatch logs
- Execution metrics
- Error tracking
- Performance monitoring 