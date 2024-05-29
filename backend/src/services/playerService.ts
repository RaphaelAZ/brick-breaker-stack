import { dbService } from "./db-service";
import Player from "../models/Player";

class PlayerService
{
    constructor() {}

    public async getTopRanking(): Promise<Player[]> {
        const r = await dbService.query("SELECT * FROM players ORDER BY score DESC LIMIT 5");
        return r as Player[];
    }

    public async insertNewPlayer(newPlayer: Player): Promise<string> {
        try {
            const r = await dbService.query("INSERT INTO players (name, score) VALUES (?, ?)", [newPlayer.name, newPlayer.score]);
            return r ? 'Success' : 'Error';
        } catch (error) {
            console.error("Error inserting new player:", error);
            return 'Error';
        }
    }
}

export const playerService = new PlayerService();