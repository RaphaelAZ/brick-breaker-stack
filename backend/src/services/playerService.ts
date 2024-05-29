import { dbService } from "./db-service";
import User from "../models/User";

class PlayerService
{
    constructor() {}

    public async getTopRanking(): Promise<User[]> {
        const r = await dbService.query("SELECT * FROM players ORDER BY score DESC LIMIT 5");
        return r as User[];
    }
}

export const playerService = new PlayerService();