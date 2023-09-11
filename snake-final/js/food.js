import * as canvas from "./canvas.js";
import * as sn from "./snakeClass.js";
const getRandomIntInclusive = (min, max) => {
    /*
        generate random number between min and max
        the number will be multiple of 10
      */
    min = Math.ceil(min); // round up
    max = Math.floor(max); // round down
    return Math.round((Math.random() * (max - min) + min) / 10) * 10;
};
export let food_X, food_Y;

export const createFood = () => {
    // create random location food
    food_X = getRandomIntInclusive(10, canvas.canvas.width - 10);
    food_Y = getRandomIntInclusive(10, canvas.canvas.height - 10);
    // if snaked eat create again
    sn.snake.forEach((head) => {
        if (head.x == food_X && head.y == food_Y) {
            createFood();
        }
    });
};
export const drawFood = () => {
    // draw the food
    canvas.c.fillStyle = "white";
    canvas.c.strokestyle = "white";
    canvas.c.fillRect(food_X, food_Y, 10, 10);
    canvas.c.strokeRect(food_X, food_Y, 10, 10);
};
