import Game from './services/gameService';

export class Manager {
    private playButton: HTMLButtonElement | null;
    private game: Game | null;

    constructor() {
        document.addEventListener('DOMContentLoaded', () => {
            this.playButton = document.getElementById('playButton') as HTMLButtonElement;
            this.game = null;
            if (this.playButton) {
                this.playButton.addEventListener('click', () => this.gameStart());
            }
        });
    }

    private gameStart() {
        if (this.playButton) {
            this.playButton.classList.add('hidden');
        }
        this.game = new Game(() => this.onGameOver());
    }

    private onGameOver() {
        if (this.playButton) {
            this.playButton.classList.remove('hidden');
        }
    }
}


