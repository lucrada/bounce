import Graphics from "./Graphics";
import { Vector } from "./Types";

class Debug {
    static drawVector = (position: Vector, vec: Vector, color: string): void => {
        let scalingFactor: number = 1.4;
        Graphics.getInstance().drawLine(position, { x: position.x + vec.x * scalingFactor, y: position.y + vec.y * scalingFactor }, 'green');
    }
};

export default Debug;
