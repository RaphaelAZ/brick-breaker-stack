import { Express } from "express";
import { playerService } from "./services/playerService";
import Player from "./models/Player";

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

        this.app.post('/newplayer', (req, res) => {
            playerService.insertNewPlayer(req.body as Player).then(() => {
                res.status(200).json({ message: "Données du joueur reçues avec succès" });
            })
        });
    }
}