import { Vector } from "./Types";

const vectorAdd = (v1: Vector, v2: Vector): Vector => { return { x: v1.x + v2.x, y: v1.y + v2.y } };
const vectorScalarMultiply = (v: Vector, scalar: number): Vector => { return { x: v.x * scalar, y: v.y * scalar } };
const vectorMagnitude = (v: Vector): number => Math.sqrt(v.x * v.x + v.y * v.y);
const getUnitVector = (v: Vector): Vector => vectorScalarMultiply(v, 1 / (vectorMagnitude(v)));

export { vectorAdd, vectorScalarMultiply, vectorMagnitude, getUnitVector };