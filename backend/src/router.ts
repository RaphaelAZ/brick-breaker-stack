import { Express } from "express";
import { playerService } from "./services/playerService";

export default class Router
{
    private app: Express;

    constructor(app: Express) {
        this.app = app;
        this.bindRoutes();
    }

    private bindRoutes() {
        this.app.get('/leaderboard', (req, res) => {
            playerService.getTopRanking().then((user) => {
                res.send(user)
            })
        });
    }
}