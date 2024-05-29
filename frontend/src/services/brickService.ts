class BrickService {
    public x: number;
    public y: number;
    public width: number;
    public height: number;
    public status: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.width = 75;
        this.height = 20;
        this.status = 1;
    }

    draw(ctx: CanvasRenderingContext2D) {
        if (this.status === 1) {
            ctx.beginPath();
            ctx.rect(this.x, this.y, this.width, this.height);
            ctx.fillStyle = "#9333FF";
            ctx.fill();
            ctx.closePath();
        }
    }
}

export default BrickService;
