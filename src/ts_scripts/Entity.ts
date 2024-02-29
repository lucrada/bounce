import { Drawable } from "./Interfaces";
import { Vector } from "./Types";

abstract class Entity implements Drawable {
    protected _mass: number = 1;
    protected _position: Vector;
    protected _velocity: Vector;
    protected _coeffRestituition: number = 1;
    protected _coeffFriction: number = 0.5;
    protected _airDragCoeff: number = 0.01;

    public constructor(position: Vector, velocity: Vector) {
        this._position = position;
        this._velocity = velocity;
    }

    abstract draw(ctx: CanvasRenderingContext2D | null): void;

    public setMass = (mass: number) => { this._mass = mass; };
    public getMass = (): number => this._mass;
    public setPosition = (position: Vector) => { this._position = position; };
    public getCurrentPosition = (): Vector => this._position;
    public setVelocity = (velocity: Vector) => { this._velocity = velocity; };
    public getCurrentVelocity = (): Vector => this._velocity;
    public getCoeffRestituition = (): number => this._coeffRestituition;
    public setCoeffRestituition = (e: number) => this._coeffRestituition = e;
    public getCoeffFriction = (): number => this._coeffFriction;
    public setCoeffFriction = (u: number) => { this._coeffFriction = u; };
    public getAirDragCoeff = (): number => this._airDragCoeff;
    public setAirDragCoeff = (ad: number) => { this._airDragCoeff = ad; };
};

export default Entity;