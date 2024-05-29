import express, { Express } from "express";
import { createServer, Server } from "http";
import cors from "cors";
import helmet from "helmet";
import { dbService } from "./services/db-service";
import Router from "./router";

export class App {

    private app: Express;
    private router: Router

    constructor() {
        dbService.connect()
            .then(() => {
                this.init();
                this.router = new Router(this.app);
                this.start();
            })
            .catch(err => {
                console.error('Erreur lors de la mise en route du service: ', err);
            });
    }

    private init() {
        this.app = express();
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(helmet({
            crossOriginResourcePolicy: false,
        }));
        this.app.use('/public', express.static('public'));
    }

    private start() {
        const server: Server = createServer(this.app);
        server.listen(3333, () => {
            console.log('Serveur démarré sur le port 3333');
        });
    }
}