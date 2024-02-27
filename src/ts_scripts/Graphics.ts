import Entity from "./Entity";

class Graphics {
    private objects: Entity[] = [];
    private canvas: HTMLCanvasElement | null = null;
    private static instance: Graphics | null = null;
    private constructor() {
        this.update();
    }

    private update = (): void => {
        setInterval(this.renderObjects, 10);
    }

    public static getInstance = (): Graphics => {
        if (Graphics.instance === null) {
            Graphics.instance = new Graphics();
        }
        return Graphics.instance;
    }
    public setCanvas = (canvas: HTMLCanvasElement | null) => { this.canvas = canvas; }
    public addObjects = (obj: Entity | Entity[]) => {
        if (Array.isArray(obj)) {
            this.objects = [...this.objects, ...obj];
            return;
        }
        this.objects.push(obj);
    }
    public renderObjects = (): void => {
        if (this.canvas === null) {
            return;
        }
        let ctx: CanvasRenderingContext2D | null = this.canvas.getContext('2d');
        if (ctx) {
            ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        }
        this.objects.forEach(object => object.draw(ctx));
    }
};

export default Graphics;