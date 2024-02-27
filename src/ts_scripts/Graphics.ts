import Entity from "./Entity";

class Graphics {
    private objects: Entity[] = [];
    private canvas: HTMLCanvasElement | null = null;
    private static instance: Graphics | null = null;
    private constructor() { }

    public static getInstance = (): Graphics => {
        if (Graphics.instance === null) {
            Graphics.instance = new Graphics();
        }
        return Graphics.instance;
    }
    public setCanvas = (canvas: HTMLCanvasElement | null) => { this.canvas = canvas; }
    public addObject = (obj: Entity) => { this.objects.push(obj); }
    public renderObjects = (): void => {
        if (this.canvas === null) {
            console.error('Canvas is not initialized\nUse setCanvas(canvas: HTMLCanvasElement) to initialize canvas');
            return;
        }
        let ctx: CanvasRenderingContext2D | null = this.canvas.getContext('2d');
        this.objects.forEach(object => object.draw(ctx));
    }
};

export default Graphics;