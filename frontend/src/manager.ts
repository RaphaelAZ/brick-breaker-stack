import GameService from './services/gameService';

export class Manager {
    private playButton: HTMLButtonElement | null;
    private game: GameService | null;

    constructor() {
        this.playButton = document.getElementById('playButton') as HTMLButtonElement;
        this.game = null;
        if (this.playButton) {
            this.playButton.addEventListener('click', () => this.gameStart());
        }
    }

    private gameStart(): void {
        if (this.playButton) {
            this.playButton.style.display = 'none';
        }
        this.game = new GameService(() => this.onGameOver());
    }

    private onGameOver(): void {
        if (this.playButton) {
            this.playButton.style.display = 'block';
        }
    }
}
