import BallService from '../components/ball-component';
import PaddleService from '../components/paddle-component';
import BrickService from '../components/brick-component';

class GameService {
    private canvas: HTMLCanvasElement = document.getElementById('gameCanvas') as HTMLCanvasElement;
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
    private onGameOver: (score: number) => void;
    public isGameRunning: boolean;
    private score: number = 0;

    constructor(onGameOver: (score) => void) {
        if (!this.canvas) {
            throw new Error("Une erreur est survenue, veuillez contacter un administrateur.");
        }
        this.ctx = this.canvas.getContext('2d')!;
        this.paddle = new PaddleService(this.canvas);
        this.ball = new BallService(this.canvas, this.paddle, this);
        this.isGameOver = false;
        this.onGameOver = onGameOver;
        this.isGameRunning = true;

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
        if(this.isGameRunning){
            for (let c = 0; c < this.brickColumnCount; c++) {
                for (let r = 0; r < this.brickRowCount; r++) {
                    let b = this.bricks[c][r];
                    if (b.status === 1) {
                        if (this.ball.x + this.ball.radius > b.x && this.ball.x - this.ball.radius < b.x + b.width && this.ball.y + this.ball.radius > b.y && this.ball.y - this.ball.radius < b.y + b.height) {
                            this.ball.dy = -this.ball.dy;
                            b.status = 0;
                            this.score+= 10;
                        }
                    }
                }
            }
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

        if (!this.isGameOver) {
            requestAnimationFrame(this.draw);
        }
    }

    changeGameRunning() {
        this.isGameOver = true;
        this.isGameRunning = false;
        this.onGameOver(this.score);
    }
}

export default GameService;