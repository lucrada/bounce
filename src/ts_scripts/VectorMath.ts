import { Vector } from "./Types";

const vectorAdd = (v1: Vector, v2: Vector): Vector => { return { x: v1.x + v2.x, y: v1.y + v2.y } };
const vectorScalarMultiply = (v: Vector, scalar: number): Vector => { return { x: v.x * scalar, y: v.y * scalar } };

export { vectorAdd, vectorScalarMultiply };