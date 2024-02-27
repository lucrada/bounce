import { Drawable } from "./Interfaces";
import { Vector } from "./Types";

abstract class Entity implements Drawable {
    protected _position: Vector;
    protected _velocity: Vector;
    protected _coeffRestituition: number = 1;

    public constructor(position: Vector, velocity: Vector) {
        this._position = position;
        this._velocity = velocity;
    }

    abstract draw(ctx: CanvasRenderingContext2D | null): void;

    public setPosition = (position: Vector) => { this._position = position; };
    public getCurrentPosition = (): Vector => this._position;
    public setVelocity = (velocity: Vector) => { this._velocity = velocity; };
    public getCurrentVelocity = (): Vector => this._velocity;
    public getCoeffRestituition = (): number => this._coeffRestituition;
    public setCoeffRestituition = (e: number) => this._coeffRestituition = e;
};

export default Entity;