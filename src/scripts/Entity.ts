import { Drawable } from "./Interfaces";
import { Vector } from "./Types";

abstract class Entity implements Drawable {
    protected _x: number;
    protected _y: number;
    protected _velocity: Vector;

    public constructor(x: number, y: number, velocity: Vector) {
        this._x = x;
        this._y = y;
        this._velocity = velocity;
    }

    abstract draw(ctx: CanvasRenderingContext2D | null): void;

    public x = (): number => this._x;
    public y = (): number => this._y;
    public setX = (x: number): void => { this._x = x; };
    public setY = (y: number): void => { this._y = y; };
};

export default Entity;