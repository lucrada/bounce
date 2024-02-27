import { Vector } from "./Interfaces";

class Ball {
    private _x: number;
    private _y: number;
    private _velocity: Vector;
    private _radius: number;
    private _color: string;

    public constructor(x: number, y: number, radius: number = 10, color: string = 'red') {
        this._x = x;
        this._y = y;
        this._radius = radius;
        this._color = color;
        this._velocity = { x: 0, y: 0 };
    }
    public x = (): number => this._x;
    public y = (): number => this._y;
    public radius = (): number => this._radius;
    public color = (): string => this._color;
};

export default Ball;