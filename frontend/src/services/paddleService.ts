class PaddleService {
    private canvas: HTMLCanvasElement;
    private ctx: CanvasRenderingContext2D;
    public x: number;
    public width: number;
    public height: number;
    private paddleSpeed: number;
    private rightPressed: boolean;
    private leftPressed: boolean;

    constructor(canvas: HTMLCanvasElement) {
        this.canvas = canvas;
        this.ctx = this.canvas.getContext('2d')!;
        this.width = 75;
        this.height = 10;
        this.x = (this.canvas.width - this.width) / 2;
        this.paddleSpeed = 7;
        this.rightPressed = false;
        this.leftPressed = false;

        document.addEventListener('keydown', (e) => this.keyDownHandler(e), false);
        document.addEventListener('keyup', (e) => this.keyUpHandler(e), false);
    }

    draw() {
        this.ctx.beginPath();
        this.ctx.rect(this.x, this.canvas.height - this.height, this.width, this.height);
        this.ctx.fillStyle = "#0095DD";
        this.ctx.fill();
        this.ctx.closePath();
    }

    move() {
        if (this.rightPressed && this.x < this.canvas.width - this.width) {
            this.x += this.paddleSpeed;
        }
        if (this.leftPressed && this.x > 0) {
            this.x -= this.paddleSpeed;
        }
    }

    private keyDownHandler(e: KeyboardEvent) {
        if (e.key === 'Right' || e.key === 'ArrowRight') {
            this.rightPressed = true;
        } else if (e.key === 'Left' || e.key === 'ArrowLeft') {
            this.leftPressed = true;
        }
    }

    private keyUpHandler(e: KeyboardEvent) {
        if (e.key === 'Right' || e.key === 'ArrowRight') {
            this.rightPressed = false;
        } else if (e.key === 'Left' || e.key === 'ArrowLeft') {
            this.leftPressed = false;
        }
    }
}

export default PaddleService;
