class PaddleService {
    private canvas: HTMLCanvasElement;
    private ctx: CanvasRenderingContext2D;
    public height: number;
    public width: number;
    public x: number;
    private rightPressed: boolean;
    private leftPressed: boolean;

    constructor(canvas: HTMLCanvasElement) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d')!;
        this.height = 10;
        this.width = 75;
        this.x = (canvas.width - this.width) / 2;
        this.rightPressed = false;
        this.leftPressed = false;

        document.addEventListener("keydown", this.keyDownHandler.bind(this), false);
        document.addEventListener("keyup", this.keyUpHandler.bind(this), false);
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
            this.x += 7;
        } else if (this.leftPressed && this.x > 0) {
            this.x -= 7;
        }
    }

    private keyDownHandler(e: KeyboardEvent) {
        if (e.key === "Right" || e.key === "ArrowRight") {
            this.rightPressed = true;
        } else if (e.key === "Left" || e.key === "ArrowLeft") {
            this.leftPressed = true;
        }
    }

    private keyUpHandler(e: KeyboardEvent) {
        if (e.key === "Right" || e.key === "ArrowRight") {
            this.rightPressed = false;
        } else if (e.key === "Left" || e.key === "ArrowLeft") {
            this.leftPressed = false;
        }
    }
}

export default PaddleService;
