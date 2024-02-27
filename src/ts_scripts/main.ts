import Ball from "./Ball";
import Graphics from "./Graphics";

const main = () => {
    const canvas: HTMLCanvasElement | null = document.getElementById('screen') as HTMLCanvasElement;
    Graphics.getInstance().setCanvas(canvas);
    Graphics.getInstance().addObject(new Ball(380, 100, 50, 'red'));
    Graphics.getInstance().renderObjects();
};

document.addEventListener('DOMContentLoaded', main);