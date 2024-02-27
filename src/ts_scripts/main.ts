import Ball from "./Ball";
import Graphics from "./Graphics";
import Physics from "./Physics";

const main = () => {
    const canvas: HTMLCanvasElement | null = document.getElementById('screen') as HTMLCanvasElement;
    Graphics.getInstance().setCanvas(canvas);
    Physics.getInstance().setWorldDimension({ x: canvas.width, y: canvas.height });

    let ball1 = new Ball({ x: 380, y: 100 }, 50, 'red');
    let ball2 = new Ball({ x: 480, y: 200 }, 20, 'yellow');
    let ball3 = new Ball({ x: 280, y: 300 }, 30, 'blue');
    let ball4 = new Ball({ x: 580, y: 250 }, 40, 'orange');

    ball1.setCoeffRestituition(0.9);
    ball2.setCoeffRestituition(0.8);
    ball3.setCoeffRestituition(0.7);
    ball4.setCoeffRestituition(0.5);

    Graphics.getInstance().addObjects([ball1, ball2, ball3, ball4]);
    Physics.getInstance().addObjects([ball1, ball2, ball3, ball4]);
};

document.addEventListener('DOMContentLoaded', main);