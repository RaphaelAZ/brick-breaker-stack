import PaddleService from './paddleService';

class BallService {
    private canvas: HTMLCanvasElement;
    private ctx: CanvasRenderingContext2D;
    private paddle: PaddleService;
    public x: number;
    public y: number;
    public dx: number;
    public dy: number;
    public radius: number;

    constructor(canvas: HTMLCanvasElement, paddle: PaddleService) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d')!;
        this.paddle = paddle;
        this.radius = 10;
        this.reset();
    }

    reset() {
        this.x = this.canvas.width / 2;
        this.y = this.canvas.height - 30;
        this.dx = 0; // Vitesse de base horizontale
        this.dy = -4; // Vitesse de base verticale
    }

    draw() {
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        this.ctx.fillStyle = "#0095DD";
        this.ctx.fill();
        this.ctx.closePath();
    }

    move() {
        this.x += this.dx;
        this.y += this.dy;

        // Rebond sur l'un des murs
        if (this.x + this.dx > this.canvas.width - this.radius || this.x + this.dx < this.radius) {
            this.dx = -this.dx;
        }

        // Rebond sur le plafond
        if (this.y + this.dy < this.radius) {
            this.dy = -this.dy;
        }

        // Rebond sur le paddle si :
        //
        // La position + la direction est supérieure la taille du canvas + le radius + la taille du paddle
        //
        if (this.y + this.dy > this.canvas.height - this.radius - this.paddle.height) {
            if (this.x > this.paddle.x && this.x < this.paddle.x + this.paddle.width) {
                
                //Calcul de l'angle de rebond sur le paddle
                let paddleCenter = this.paddle.x + this.paddle.width / 2;
                let hitPoint = this.x - paddleCenter;
                let maxBounceAngle = Math.PI / 3; // 60 degrees (à corriger)
                let angle = hitPoint / (this.paddle.width / 2) * maxBounceAngle;

                this.dx = 4 * Math.sin(angle);
                this.dy = -4 * Math.cos(angle);
            } else if (this.y + this.dy > this.canvas.height - this.radius) {
                
                //La balle touche le sol et le jeu s'arrête
                this.dy = 0;
                this.dx = 0;
                this.onGameOver();
            }
        }
    }

    private onGameOver() {
        console.log("Game Over");
        // TODO: Game Over
    }
}

export default BallService;
