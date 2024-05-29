import GameService from './services/gameService';
import BackgroundService from './services/backgroundService';
import { LeaderboardComponent } from './components/leaderboard-component';

export class Manager {
    private game: GameService | null;
    private nickname: string | null;
    private modal = document.getElementById('playerModal') as HTMLDivElement;
    private canvas = document.getElementById('gameCanvas') as HTMLCanvasElement;
    private gameOvertitle = document.getElementById('gameOvertitle') as HTMLDivElement;
    private background: BackgroundService;

    constructor() {
        this.background = new BackgroundService();
        this.game = null;
        this.nickname = null;
        
        this.initModal();
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
            new LeaderboardComponent();
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
    }
}

const manager = new Manager();