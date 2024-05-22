class BrickService {
    public x: number;
    public y: number;
    public status: number;
    public width: number;
    public height: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.status = 1;
        this.width = 75;
        this.height = 20;
    }

    draw(ctx: CanvasRenderingContext2D) {
        if (this.status === 1) {
            ctx.beginPath();
            ctx.rect(this.x, this.y, this.width, this.height);
            ctx.fillStyle = "#0095DD";
            ctx.fill();
            ctx.closePath();
        }
    }
}

export default BrickService;
