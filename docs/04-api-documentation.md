# API Documentation

## Overview

The Create Bets Bolão service provides REST API endpoints for managing betting pools and processing bets. The API is built using AWS Lambda and API Gateway.

## Endpoints

### Betting Pool Management

#### POST /pools
Creates a new betting pool.

**Request Body**:
```json
{
    "name": "string",
    "description": "string",
    "settings": {
        "maxParticipants": "number",
        "entryFee": "number",
        "prizeDistribution": [
            {
                "position": "number",
                "percentage": "number"
            }
        ],
        "rules": ["string"]
    }
}
```

**Response**:
```json
{
    "success": "boolean",
    "message": "string",
    "data": {
        "poolId": "string",
        "name": "string",
        "createdAt": "string"
    }
}
```

#### GET /pools/{poolId}
Retrieves betting pool details.

**Response**:
```json
{
    "success": "boolean",
    "data": {
        "id": "string",
        "name": "string",
        "description": "string",
        "owner": {
            "id": "string",
            "name": "string"
        },
        "participants": [
            {
                "id": "string",
                "name": "string",
                "points": "number",
                "rank": "number"
            }
        ],
        "matches": [
            {
                "id": "string",
                "homeTeam": "string",
                "awayTeam": "string",
                "date": "string",
                "status": "string"
            }
        ],
        "settings": {
            "maxParticipants": "number",
            "entryFee": "number",
            "prizeDistribution": [
                {
                    "position": "number",
                    "percentage": "number"
                }
            ]
        }
    }
}
```

### Bet Management

#### POST /pools/{poolId}/bets
Creates a new bet.

**Request Body**:
```json
{
    "matchId": "string",
    "prediction": {
        "homeScore": "number",
        "awayScore": "number"
    }
}
```

**Response**:
```json
{
    "success": "boolean",
    "message": "string",
    "data": {
        "betId": "string",
        "matchId": "string",
        "createdAt": "string"
    }
}
```

#### GET /pools/{poolId}/bets
Retrieves all bets for a pool.

**Response**:
```json
{
    "success": "boolean",
    "data": [
        {
            "id": "string",
            "matchId": "string",
            "participantId": "string",
            "prediction": {
                "homeScore": "number",
                "awayScore": "number"
            },
            "points": "number",
            "status": "string"
        }
    ]
}
```

## Status Codes

- 200: Success
- 201: Created
- 400: Bad Request
- 401: Unauthorized
- 403: Forbidden
- 404: Not Found
- 500: Internal Server Error

## Error Responses

```json
{
    "success": false,
    "error": {
        "code": "string",
        "message": "string",
        "details": "object"
    }
}
```

## Authentication

All endpoints require authentication using JWT tokens. Include the token in the Authorization header:

```
Authorization: Bearer <token>
```

## Rate Limiting

- 100 requests per minute per IP
- 1000 requests per hour per user

## Monitoring

### Metrics
1. Request count
2. Response time
3. Error rate
4. Active users
5. Pool creation rate

### Logs
1. Request logs
2. Error logs
3. Access logs
4. Performance logs
5. Security logs 