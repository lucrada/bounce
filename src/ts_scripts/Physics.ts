import Ball from "./Ball";
import Entity from "./Entity";
import { PhysicsObjectType, Vector } from "./Types";
import { getUnitVector, vectorAdd, vectorMagnitude, vectorScalarMultiply } from "./VectorMath";

class Physics {
    private readonly GRAVITY: Vector = { x: 0, y: 5 };
    private readonly TIME_DELTA: number = 0.2;
    private worldDimension: Vector | null = null;
    private static instance: Physics | null = null;
    private objects: Entity[] = [];

    private constructor() {
        this.update();
    }
    public static getInstance = (): Physics => {
        if (Physics.instance === null) {
            Physics.instance = new Physics();
        }
        return Physics.instance;
    }
    private update = (): void => {
        setInterval(this.applyPhysics, 10);
    }

    public setWorldDimension = (canvasDimension: Vector) => { this.worldDimension = canvasDimension; }
    public addObjects = (obj: Entity | Entity[]) => {
        if (Array.isArray(obj)) {
            this.objects = [...this.objects, ...obj];
            return;
        }
        this.objects.push(obj);
    }
    public calculateLinearWithTimeDelta = (v1: Vector, v2: Vector): Vector => vectorAdd(v1, vectorScalarMultiply(v2, this.TIME_DELTA));
    public linearlyTranslate = (obj: Entity, velocity: Vector): void => {
        let newPosition: Vector = this.calculateLinearWithTimeDelta(obj.getCurrentPosition(), velocity);
        obj.setPosition(newPosition);
    }
    public linearlyAccelerate = (obj: Entity, acceleration: Vector): void => {
        let newVelocity: Vector = this.calculateLinearWithTimeDelta(obj.getCurrentVelocity(), acceleration);
        obj.setVelocity(newVelocity);
    }
    public applyGravity = (obj: Entity): void => {
        this.linearlyAccelerate(obj, this.GRAVITY);
    }
    public applyAirDrag = (obj: Entity): void => {
        let airDragMagnitude: number = obj.getAirDragCoeff() * vectorMagnitude(obj.getCurrentVelocity());
        let airDragVector = vectorScalarMultiply(getUnitVector(obj.getCurrentVelocity()), airDragMagnitude);
        this.applyForce(obj, airDragVector);
    }
    public applyForce = (obj: Entity, force: Vector) => {
        this.linearlyAccelerate(obj, vectorScalarMultiply(force, obj.getMass()));
    }
    public handleWallCollision = (obj: Ball | unknown): void => {
        let objectCrossedBottom: boolean = false;
        let objectCrossedRight: boolean = false;
        let objectCrossedTop: boolean = false;
        let objectCrossedLeft: boolean = false;

        if (obj instanceof Ball) {
            objectCrossedBottom = obj.getCurrentPosition().y + obj.radius() > this.worldDimension!.y;
            objectCrossedTop = obj.getCurrentPosition().y - obj.radius() < 0;
            objectCrossedRight = obj.getCurrentPosition().x + obj.radius() > this.worldDimension!.x;
            objectCrossedLeft = obj.getCurrentPosition().x - obj.radius() < 0;

            if (objectCrossedBottom || objectCrossedTop) {
                let nudgedYPosition: number = objectCrossedBottom ? this.worldDimension!.y - obj.radius() : obj.radius();
                obj.setPosition({ x: obj.getCurrentPosition().x, y: nudgedYPosition })
                obj.setVelocity({ x: obj.getCurrentVelocity().x, y: -1 * obj.getCoeffRestituition() * obj.getCurrentVelocity().y });
            }
            if (objectCrossedLeft || objectCrossedRight) {
                let nudgedXPosition: number = objectCrossedRight ? this.worldDimension!.x - obj.radius() : obj.radius();
                obj.setPosition({ x: nudgedXPosition, y: obj.getCurrentPosition().y })
                obj.setVelocity({ x: -1 * obj.getCoeffRestituition() * obj.getCurrentVelocity().x, y: obj.getCurrentVelocity().y });
            }
        }
    }
    public applyPhysics = (): void => {
        if (this.worldDimension === null) {
            return;
        }
        this.objects.forEach(object => {
            this.applyGravity(object);
            this.applyAirDrag(object);
            this.linearlyTranslate(object, object.getCurrentVelocity());
            this.handleWallCollision(object);
        });
    }
};

export default Physics;