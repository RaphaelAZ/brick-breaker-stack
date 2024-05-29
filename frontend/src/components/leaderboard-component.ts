import User from "../interfaces/User";
import { apiService } from "../services/apiService";

export default class LeaderboardComponent {
    private leaderboardElement: HTMLUListElement;
    private apiService = apiService;

    constructor() {
        this.leaderboardElement = document.getElementById("leaderboard") as HTMLUListElement;
        this.leaderboardElement.innerHTML = "";
        this.loadLeaderboard();
    }

    private loadLeaderboard() {
        this.apiService.fetch("/leaderboard").then(data => {
            for (const player of data) {
                this.displayTopPlayerScore(player);
            }
        });
    }

    private displayTopPlayerScore(player: User) {
        const topPlayer = document.createElement('li');
        topPlayer.innerText = `${player.name} - ${player.score}`;
        this.leaderboardElement.appendChild(topPlayer);
    }
}