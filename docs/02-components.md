# System Components

## Data Models

### BettingPool
```typescript
interface BettingPool {
    id: string;
    name: string;
    description: string;
    owner: {
        id: string;
        name: string;
        email: string;
    };
    participants: Participant[];
    matches: Match[];
    settings: {
        maxParticipants: number;
        entryFee: number;
        prizeDistribution: PrizeDistribution[];
        rules: string[];
    };
    status: 'active' | 'closed' | 'finished';
    createdAt: Date;
    updatedAt: Date;
}

interface Participant {
    id: string;
    name: string;
    email: string;
    bets: Bet[];
    points: number;
    rank: number;
}

interface Match {
    id: string;
    homeTeam: string;
    awayTeam: string;
    date: Date;
    status: 'scheduled' | 'in_progress' | 'finished';
    result?: {
        homeScore: number;
        awayScore: number;
    };
}

interface Bet {
    id: string;
    matchId: string;
    participantId: string;
    prediction: {
        homeScore: number;
        awayScore: number;
    };
    points: number;
    status: 'pending' | 'correct' | 'incorrect';
}

interface PrizeDistribution {
    position: number;
    percentage: number;
}
```

## Services

### BettingPoolService (service/betting-pool-service.js)
- `createPool(poolData)`: Creates a new betting pool
- `updatePool(poolId, poolData)`: Updates pool data
- `getPoolById(poolId)`: Retrieves pool by ID
- `addParticipant(poolId, participantData)`: Adds a participant
- `removeParticipant(poolId, participantId)`: Removes a participant

### BetService (service/bet-service.js)
- `createBet(betData)`: Creates a new bet
- `updateBet(betId, betData)`: Updates bet data
- `calculatePoints(betId)`: Calculates points for a bet
- `processResults(matchId)`: Processes match results

### MatchService (service/match-service.js)
- `getMatches(filters)`: Gets matches with filters
- `updateMatch(matchId, matchData)`: Updates match data
- `processResults(matchId)`: Processes match results

## Data Access

### MongoDB
- Connection configured with environment credentials
- Collections:
  - `betting_pools`: Pool data
  - `participants`: Participant information
  - `matches`: Match data
  - `bets`: Bet information
- Indexes:
  - `betting_pools.id`: Unique index
  - `participants.id`: Fast lookup index
  - `matches.id`: Unique index
  - `bets.id`: Unique index

## Processing Flows

### Pool Creation
1. Validate pool data
2. Create pool structure
3. Initialize settings
4. Save to database
5. Return pool details

### Bet Processing
1. Validate bet data
2. Check match status
3. Process bet
4. Update statistics
5. Confirm bet

### Results Processing
1. Receive match results
2. Update match data
3. Process all bets
4. Calculate points
5. Update rankings 