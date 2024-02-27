import Entity from "./Entity";
import { Vector } from "./Types";

class Ball extends Entity {
    private _radius: number;
    private _color: string;

    public constructor(position: Vector, radius: number = 10, color: string = 'red') {
        let initVelocity: Vector = { x: 20, y: 0 };
        super(position, initVelocity);
        this._radius = radius;
        this._color = color;
    }


    public radius = (): number => this._radius;
    public color = (): string => this._color;
    public setRadius = (radius: number): void => { this._radius = radius; };
    public setColor = (color: string): void => { this._color = color; };
    public draw = (ctx: CanvasRenderingContext2D | null): void => {
        if (ctx === null) {
            console.error('ctx is null');
            return;
        }
        ctx.beginPath();
        ctx.arc(this._position.x, this._position.y, this._radius, 0, 2 * Math.PI);
        ctx.fillStyle = this._color;
        ctx.fill();
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 1;
        ctx.stroke();
        ctx.closePath();
    }
};

export default Ball;