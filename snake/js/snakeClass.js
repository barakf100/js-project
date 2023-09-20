import * as canvas from "./canvas.js";
import * as fd from "./food.js";
import * as sc from "./scoring.js";
import { main, t, scoreLVL } from "./snake.js";

// sets dx and dy dx is 10 because snake start to move right on the x axis
export let dx = 10,
    dy = 0,
    moveTO = "right", // initial where to move for new game  button
    score = 0;

export class Snake {
    // snake class and constructor
    x;
    y;
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

export let snake = [
    // create snake array and give locations
    new Snake(50, 50),
    new Snake(40, 50),
    new Snake(30, 50),
    new Snake(20, 50),
    new Snake(10, 50),
    new Snake(0, 50),
];

const drawSnakeByPart = (part) => {
    // draw snake part by part
    canvas.c.fillStyle = canvas.snakeColor;
    canvas.c.strokeStyle = canvas.boardColor;
    canvas.c.fillRect(part.x, part.y, 10, 10);
    canvas.c.strokeRect(part.x, part.y, 10, 10);
};

export const drawSnake = () => {
    // draw all snaked
    snake.forEach(drawSnakeByPart);
};

export const move = () => {
    const head = new Snake(snake[0].x + dx, snake[0].y + dy);
    snake.unshift(head); // puts new head in start of th e array
    if (snake[0].x == fd.food_X && snake[0].y == fd.food_Y) {
        fd.createFood();
        score += scoreLVL;
    } else snake.pop();
};

export const clear = () => {
    canvas.c.fillStyle = canvas.boardColor;
    canvas.c.strokeStyle = canvas.boardColor;
    canvas.c.fillRect(0, 0, canvas.canvas.width, canvas.canvas.height);
    canvas.c.strokeRect(0, 0, canvas.canvas.width, canvas.canvas.height);
};

const hitMyself = () => {
    // check if head hit body  = end game
    for (let index = 1; index < snake.length; index++) {
        if (snake[0].x == snake[index].x && snake[0].y == snake[index].y)
            return true;
    }
    return false;
};

export const endGame = () => {
    // check if snaked out of bounds and put score in local storage
    if (
        snake[0].x < 0 ||
        snake[0].x > canvas.canvas.width ||
        snake[0].y < 0 ||
        snake[0].y > canvas.canvas.height ||
        hitMyself()
    ) {
        document.querySelector(".lose").innerHTML = "lost";
        moveTO = "right";
        sc.setScore();
        sc.handleLocalStorage();
        return false;
    } else {
        return true;
    }
};

export const newGame = () => {
    // new game func
    window.dispatchEvent(new KeyboardEvent("keydown", { key: "ArrowRight" })); // sets keybored right
    clearTimeout(t); // clears the prevoious timeout
    document.querySelector(".lose").innerHTML = "";
    score = 0;
    snake = [
        new Snake(50, 50),
        new Snake(40, 50),
        new Snake(30, 50),
        new Snake(20, 50),
        new Snake(10, 50),
        new Snake(0, 50),
    ];
    clear();
    fd.createFood();
    move();
    drawSnake();
    sc.theScore.innerHTML = score;
    main(); // starts main again
};

window.addEventListener("keydown", (e) => {
    /*
        switch case for keyboard event 
        ex - if arrow up hit checks if the snake not moving down end set dy to -10
        default for the rest of the keyborad 
        maybe somtime a second player with 'asdw'
    */
    switch (e.key) {
        case "ArrowUp":
            if (moveTO != "down") {
                dx = 0;
                dy = -10;
                moveTO = "up";
            }
            break;
        case "ArrowRight":
            if (moveTO != "left") {
                dx = 10;
                dy = 0;
                moveTO = "right";
            }
            break;
        case "ArrowLeft":
            if (moveTO != "right") {
                dx = -10;
                dy = 0;
                moveTO = "left";
            }
            break;
        case "ArrowDown":
            if (moveTO != "up") {
                dx = 0;
                dy = 10;
                moveTO = "down";
            }
            break;
        default:
            break;
    }
});
