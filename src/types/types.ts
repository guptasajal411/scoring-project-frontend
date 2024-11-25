export type Player = {
    _id: string;
    name: string;
    batting?: {
        runs: number;
        ballsFaced: number;
    };
    bowling?: {
        wickets: number;
    };
};

export type ScoreDetails = {
    bowler: Player;
    batsman: Player;
    nonStriker: Player;
    runs: number;
    wickets: number;
};

export type Delivery = {
    _id: string;
    ballNumber: number;
    type: string;
    runsExcludingExtras: number;
    extras: string;
    isWicket: boolean;
};

export type Match = {
    _id: string;
    battingTeam: {
        name: string;
        players: Player[];
    };
    fieldingTeam: {
        name: string;
        players: Player[];
    };
    innings: {
        scoreDetails: ScoreDetails;
        runs: number;
        wickets: number;
        overs: number;
        ballsYetPlayed: number;
    };
    deliveries: Delivery[];
};

export type MatchDetails = {
    match: Match;
    deliveries: Delivery[]
};
