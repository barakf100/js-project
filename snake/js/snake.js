import * as sn from "./snakeClass.js";
import * as fd from "./food.js";
import * as canvas from "./canvas.js";
import * as sc from "./scoring.js";
export let t,
    scoreLVL = 10;
let lvl = 50;
export const main = () => {
    // main func stop if game end else set time out
    if (!sn.endGame()) return;
    t = setTimeout(() => {
        sn.clear();
        fd.drawFood();
        sn.move();
        sn.drawSnake();
        sc.theScore.innerHTML = sn.score;
        main();
    }, lvl);
};
window.addEventListener("resize", () => {
    // on resize start new game also handle resonsiveness
    canvas.canvas.width = (80 / 100) * innerWidth;
    canvas.canvas.height = innerHeight;
    sc.handleLocalStorage();
    sn.newGame();
});
window.addEventListener("load", () => {
    // starts snake game on load
    sc.handleLocalStorage();
    fd.createFood();
    main();
});
document.querySelector("#lvl").addEventListener("click", (e) => {
    // let lvl = document.querySelectorAll("#lvl button");
    console.log(e.target);
    clearTimeout(t);
    switch (e.target.innerHTML) {
        case "1":
            lvl = 50;
            scoreLVL = 10;
            sn.newGame();
            break;
        case "2":
            lvl = 40;
            scoreLVL = 20;
            sn.newGame();
            break;
        case "3":
            lvl = 30;
            scoreLVL = 30;
            sn.newGame();
            break;
        case "4":
            lvl = 20;
            scoreLVL = 40;
            sn.newGame();
            break;
        case "5":
            lvl = 10;
            scoreLVL = 50;
            sn.newGame();
            break;

        default:
            break;
    }
});
