import BallService from './ballService';
import PaddleService from './paddleService';
import BrickService from './brickService';

class GameService {
    private canvas: HTMLCanvasElement;
    private ctx: CanvasRenderingContext2D;
    private paddle: PaddleService;
    private ball: BallService;
    private brickRowCount: number;
    private brickColumnCount: number;
    private brickPadding: number;
    private brickOffsetTop: number;
    private brickOffsetLeft: number;
    private bricks: BrickService[][];
    private isGameOver: boolean;
    private onGameOver: () => void;
    public isGameRunning: boolean;

    constructor(onGameOver: () => void) {
        this.canvas = document.getElementById('gameCanvas') as HTMLCanvasElement;
        if (!this.canvas) {
            throw new Error("Cannot find the canvas element");
        }
        this.ctx = this.canvas.getContext('2d')!;
        this.paddle = new PaddleService(this.canvas);
        this.ball = new BallService(this.canvas, this.paddle);
        this.isGameOver = false;
        this.onGameOver = onGameOver;
        this.isGameRunning = true; // Set the initial state to running

        this.brickRowCount = 3;
        this.brickColumnCount = 7;
        this.brickPadding = 10;
        this.brickOffsetTop = 30;
        this.brickOffsetLeft = (this.canvas.width - (this.brickColumnCount * (75 + this.brickPadding) - this.brickPadding)) / 2;

        this.bricks = [];
        for (let c = 0; c < this.brickColumnCount; c++) {
            this.bricks[c] = [];
            for (let r = 0; r < this.brickRowCount; r++) {
                let brickX = c * (75 + this.brickPadding) + this.brickOffsetLeft;
                let brickY = r * (20 + this.brickPadding) + this.brickOffsetTop;
                this.bricks[c][r] = new BrickService(brickX, brickY);
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
                    if (this.ball.x + this.ball.radius > b.x && this.ball.x - this.ball.radius < b.x + b.width && this.ball.y + this.ball.radius > b.y && this.ball.y - this.ball.radius < b.y + b.height) {
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
            this.isGameRunning = false; // Set the game running state to false
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

export default GameService;