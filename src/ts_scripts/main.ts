import Ball from "./Ball";
import Debug from "./Debug";
import Graphics from "./Graphics";
import Physics from "./Physics";

const main = (): void => {
    const canvas: HTMLCanvasElement | null = document.getElementById('screen') as HTMLCanvasElement;
    Graphics.getInstance().setCanvas(canvas);
    Physics.getInstance().setWorldDimension({ x: canvas.width, y: canvas.height });

    let ball1 = new Ball({ x: 380, y: 100 }, 50, 'red');
    ball1.setVelocity({ x: -10, y: -10 });
    // let ball2 = new Ball({ x: 480, y: 200 }, 20, 'yellow');
    // ball2.setVelocity({ x: 10, y: -5 });
    // let ball3 = new Ball({ x: 280, y: 300 }, 30, 'blue');
    // ball3.setVelocity({ x: 20, y: -15 });
    // let ball4 = new Ball({ x: 580, y: 250 }, 40, 'green');
    // ball4.setVelocity({ x: -20, y: -15 });

    ball1.setCoeffRestituition(0.9);
    // ball2.setCoeffRestituition(0.8);
    // ball3.setCoeffRestituition(0.7);
    // ball4.setCoeffRestituition(0.5);


    Graphics.getInstance().addObjects([ball1]);
    setInterval(() => {
        Debug.drawVector(ball1.getCurrentPosition(), ball1.getCurrentVelocity(), 'green');
    }, 10);
    Physics.getInstance().addObjects([ball1]);

};

document.addEventListener('DOMContentLoaded', main);