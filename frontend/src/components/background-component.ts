export default class BackgroundComponent {
    private starCount: number;
    private stars: HTMLDivElement[];

    constructor(starCount: number = 100) {
        this.starCount = starCount;
        this.stars = [];
        this.init();
    }

    private init(): void {
        this.createStars();

        // Réajuste la disposition des étoiles quand la taille de fenêtre est modifiée
        window.addEventListener('resize', this.onResize.bind(this));
    }

    /* 
        Création des étoiles sur le body dans des div
    */
    private createStars(): void {
        for (let i = 0; i < this.starCount; i++) {
            const star = document.createElement('div');
            star.classList.add('star');
            this.setPositionAndSize(star);
            document.body.appendChild(star);
            this.stars.push(star);
        }
    }

    /* 
        Création des positions/tailles étoiles
    */
    private setPositionAndSize(star: HTMLDivElement): void {
        const size = Math.random() * 2 + 1;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.left = `${Math.random() * window.innerWidth}px`;
        star.style.top = `${Math.random() * window.innerHeight}px`;
    }

    /* 
        Redéfinit la position des étoiles via l'event listener
    */
    private onResize(): void {
        this.stars.forEach(star => this.setPositionAndSize(star));
    }
}
