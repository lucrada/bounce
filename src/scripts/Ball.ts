import Entity from "./Entity";
import { Vector } from "./Types";

class Ball extends Entity {
    private _radius: number;
    private _color: string;

    public constructor(x: number, y: number, radius: number = 10, color: string = 'red') {
        let initVelocity: Vector = { x: 0, y: 0 };
        super(x, y, initVelocity);
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
        ctx.fillStyle = this._color;
        ctx.beginPath();
        ctx.arc(this._x, this._y, this._radius, 0, 2 * Math.PI, false);
        ctx.fill();
    }
};

export default Ball;