import GameService from './services/gameService';

export class Manager {
    private game: GameService | null;
    private nickname: string | null;

    constructor() {
        this.game = null;
        this.nickname = null;

        this.initModal();
    }

    private initModal(): void {
        const modal = document.getElementById('playerModal') as HTMLDivElement;
        const startGameButton = document.getElementById('startGameButton') as HTMLButtonElement;
        const nicknameInput = document.getElementById('nicknameInput') as HTMLInputElement;

        if (startGameButton && nicknameInput) {
            startGameButton.onclick = () => {
                this.nickname = nicknameInput.value;
                if (this.nickname && this.nickname.trim() !== '') {
                    modal.style.display = 'none';
                    this.showCanvas();
                    this.gameStart();
                } else {
                    alert('Veuillez entrer un pseudo valide.');
                }
            };
        }

        // Affiche la modal au chargement de la page
        window.onload = () => {
            modal.style.display = 'block';
        };
    }

    private showCanvas(): void {
        const canvas = document.getElementById('gameCanvas') as HTMLCanvasElement;
        if (canvas) {
            canvas.style.display = 'block';
        }
    }

    private hideCanvas(): void {
        const canvas = document.getElementById('gameCanvas') as HTMLCanvasElement;
        if (canvas) {
            canvas.style.display = 'none';
        }
    }

    private gameStart(): void {
        this.game = new GameService(() => this.onGameOver());
    }

    private onGameOver(): void {
        const modal = document.getElementById('playerModal') as HTMLDivElement;
        this.hideCanvas();
        modal.style.display = 'block';
        // Clear the game instance
        this.game = null;
    }
}

const manager = new Manager();