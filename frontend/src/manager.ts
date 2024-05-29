import GameService from './services/gameService';
import BackgroundComponent from './components/background-component';
import LeaderboardComponent from './components/leaderboard-component';
import { resultComponent } from './components/result-component';
import Player from './interfaces/Player';

export class Manager {
    private game: GameService | null;
    private nickname: string | null;
    private modal = document.getElementById('playerModal') as HTMLDivElement;
    private canvas = document.getElementById('gameCanvas') as HTMLCanvasElement;
    private gameOvertitle = document.getElementById('gameOvertitle') as HTMLDivElement;
    private resultComponent = resultComponent;

    constructor() {
        this.game = null;
        this.nickname = null;
        
        this.initModal();
        new BackgroundComponent();
        new LeaderboardComponent();
    }

    private initModal(): void {
        const startGameButton = document.getElementById('startGameButton') as HTMLButtonElement;
        const nicknameInput = document.getElementById('nicknameInput') as HTMLInputElement;

        if (startGameButton && nicknameInput) {
            startGameButton.onclick = () => {
                this.nickname = nicknameInput.value;
                if (this.nickname && this.nickname.trim() !== '') {
                    this.toggleModal(false);
                    this.toggleCanvas(true);
                    this.gameStart();
                } else {
                    alert('Veuillez entrer un pseudo valide.');
                }
            };
        }

        window.onload = () => {
            this.modal.style.display = 'block';
        };
    }

    private toggleCanvas(show: boolean): void {
        if (this.canvas) {
            this.canvas.style.display = show ? 'block' : 'none';
        }
    }

    private toggleModal(show: boolean): void {
        if (this.modal) {
            this.modal.style.display = show ? 'block' : 'none';
        }
    }

    private gameStart(): void {
        this.game = new GameService(score => this.onGameOver(score));
    }

    private onGameOver(score: number): void {
        // On réaffiche la modal + game over
        this.modal.style.display = 'block';
        this.gameOvertitle.style.display = 'block';

        const scoreElement = document.getElementById('gameOverScorePoints') as HTMLSpanElement;
        scoreElement.innerHTML = score.toString();

        // On désactive le canvas et on reset le jeu
        this.toggleCanvas(false);
        this.game = null;

        // On envoie le résultat au back
        this.resultComponent.sendNewPlayerScore({
            id: null,
            name: this.nickname,
            score: score
        } as Player)

        new LeaderboardComponent();
    }
}