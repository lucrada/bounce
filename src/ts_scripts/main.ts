import Ball from "./Ball";
import Graphics from "./Graphics";

const main = () => {
    const canvas: HTMLCanvasElement | null = document.getElementById('screen') as HTMLCanvasElement;
    Graphics.getInstance().setCanvas(canvas);
    let ball = new Ball(380, 100, 50, 'red');
    Graphics.getInstance().addObject(ball);
    setInterval(() => { Graphics.getInstance().renderObjects(); }, 100);
};

document.addEventListener('DOMContentLoaded', main);