import Ball from './ballService';
import Paddle from './paddleService';
import Brick from './bricksService';

class Game {
    private canvas: HTMLCanvasElement;
    private ctx: CanvasRenderingContext2D;
    private paddle: Paddle;
    private ball: Ball;
    private brickRowCount: number;
    private brickColumnCount: number;
    private brickPadding: number;
    private brickOffsetTop: number;
    private brickOffsetLeft: number;
    private bricks: Brick[][];
    private isGameOver: boolean;
    private onGameOver: () => void;

    constructor(onGameOver: () => void) {
        this.canvas = document.getElementById('gameCanvas') as HTMLCanvasElement;
        if (!this.canvas) {
            throw new Error("Cannot find the canvas element");
        }
        this.ctx = this.canvas.getContext('2d')!;
        this.paddle = new Paddle(this.canvas);
        this.ball = new Ball(this.canvas, this.paddle);
        this.isGameOver = false;
        this.onGameOver = onGameOver;

        this.brickRowCount = 3;
        this.brickColumnCount = 5;
        this.brickPadding = 10;
        this.brickOffsetTop = 30;
        this.brickOffsetLeft = 30;

        this.bricks = [];
        for (let c = 0; c < this.brickColumnCount; c++) {
            this.bricks[c] = [];
            for (let r = 0; r < this.brickRowCount; r++) {
                let brickX = c * (75 + this.brickPadding) + this.brickOffsetLeft;
                let brickY = r * (20 + this.brickPadding) + this.brickOffsetTop;
                this.bricks[c][r] = new Brick(brickX, brickY);
            }
        }

        this.draw = this.draw.bind(this);
        this.start();
    }

    start() {
        requestAnimationFrame(this.draw);
    }

    drawBricks() {
        for (let c = 0; c < this.brickColumnCount; c++) {
            for (let r = 0; r < this.brickRowCount; r++) {
                this.bricks[c][r].draw(this.ctx);
            }
        }
    }

    collisionDetection() {
        for (let c = 0; c < this.brickColumnCount; c++) {
            for (let r = 0; r < this.brickRowCount; r++) {
                let b = this.bricks[c][r];
                if (b.status === 1) {
                    if (this.ball.x > b.x && this.ball.x < b.x + b.width && this.ball.y > b.y && this.ball.y < b.y + b.height) {
                        this.ball.dy = -this.ball.dy;
                        b.status = 0;
                    }
                }
            }
        }
    }

    checkGameOver() {
        if (this.ball.y + this.ball.dy > this.canvas.height - this.ball.radius) {
            this.isGameOver = true;
            this.onGameOver();
        }
    }

    draw() {
        if (this.isGameOver) return;

        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.drawBricks();
        this.ball.draw();
        this.paddle.draw();
        this.collisionDetection();

        this.ball.move();
        this.paddle.move();

        this.checkGameOver();

        if (!this.isGameOver) {
            requestAnimationFrame(this.draw);
        }
    }
}

export default Game;
