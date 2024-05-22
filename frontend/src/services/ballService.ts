import PaddleService from './paddleService';

class BallService {
    private canvas: HTMLCanvasElement;
    private ctx: CanvasRenderingContext2D;
    private paddle: PaddleService;
    public radius: number;
    public x: number;
    public y: number;
    public dx: number;
    public dy: number;

    constructor(canvas: HTMLCanvasElement, paddle: PaddleService) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d')!;
        this.paddle = paddle;
        this.radius = 10;
        this.x = canvas.width / 2;
        this.y = canvas.height - 30;
        this.dx = 2;
        this.dy = -2;
    }

    draw() {
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        this.ctx.fillStyle = "#0095DD";
        this.ctx.fill();
        this.ctx.closePath();
    }

    move() {
        if (this.x + this.dx > this.canvas.width - this.radius || this.x + this.dx < this.radius) {
            this.dx = -this.dx;
        }
        if (this.y + this.dy < this.radius) {
            this.dy = -this.dy;
        } else if (this.y + this.dy > this.canvas.height - this.radius) {
            if (this.x > this.paddle.x && this.x < this.paddle.x + this.paddle.width) {
                this.dy = -this.dy;
            } else {
                document.location.reload();
            }
        }

        this.x += this.dx;
        this.y += this.dy;
    }
}

export default BallService;
