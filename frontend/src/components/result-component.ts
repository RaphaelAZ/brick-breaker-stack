import Player from "../interfaces/Player";
import { apiService } from "../services/apiService";

class ResultComponent {
    private apiService = apiService;

    constructor() {}

    public async sendNewPlayerScore(player: Player) {
        const data = await this.apiService.fetch('/newplayer', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(player),
        });
    }
}

export const resultComponent = new ResultComponent();