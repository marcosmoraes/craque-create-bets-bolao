# System Architecture

## Overview

The Create Bets Bolão service is a serverless application built with AWS Lambda and Serverless Framework. It provides functionality for creating and managing betting pools, processing user bets, and calculating results.

## Architecture Diagram

```mermaid
graph TB
    subgraph "AWS Cloud"
        subgraph "API Gateway"
            APIG[API Gateway]
        end

        subgraph "Lambda Function"
            Handler[Handler Lambda]
            Service[Service Layer]
            Model[Model Layer]
            DataAccess[Data Access Layer]
        end

        subgraph "MongoDB"
            Mongo[(MongoDB)]
            Pools[(Pools Collection)]
            Bets[(Bets Collection)]
            Matches[(Matches Collection)]
        end
    end

    %% External Services
    FootballAPI[Football API]

    %% Connections
    APIG -->|HTTP/REST| Handler
    Handler -->|Internal| Service
    Service -->|Internal| Model
    Model -->|Internal| DataAccess
    DataAccess -->|MongoDB Driver| Mongo
    
    %% External Connections
    FootballAPI -->|HTTP/REST| Service

    %% Styling
    classDef aws fill:#FF9900,stroke:#232F3E,stroke-width:2px;
    classDef lambda fill:#009900,stroke:#232F3E,stroke-width:2px;
    classDef db fill:#13aa52,stroke:#232F3E,stroke-width:2px;
    classDef external fill:#666666,stroke:#232F3E,stroke-width:2px;

    class APIG aws;
    class Handler,Service,Model,DataAccess lambda;
    class Mongo,Pools,Bets,Matches db;
    class FootballAPI external;
```

## System Layers

### 1. API Layer (api/)
- Responsible for external service integration
- Implements communication with the football API
- Manages HTTP requests

### 2. Data Access Layer (data-access/)
- Manages MongoDB connection
- Implements CRUD operations in the database
- Abstracts data access complexity

### 3. Model Layer (model/)
- Defines data structure
- Implements basic business rules and validations
- Creates dynamic models based on pool ID

### 4. Service Layer (service/)
- Implements main business logic
- Calculates scores and weights per round
- Manages pool-specific rules

### 5. Handler Layer (handler.js)
- Lambda function entry point
- Processes HTTP events
- Coordinates flow between different layers

## Data Flow
1. HTTP request received by Lambda
2. Handler processes event and extracts parameters
3. Service layer coordinates business logic
4. Data Access layer persists data
5. Response is returned to client

## Security Considerations
- Credentials stored in environment variables
- Input data validation
- Error and exception handling

## Scalability
- Serverless architecture enables automatic scaling
- MongoDB connections managed efficiently
- Asynchronous bet processing 