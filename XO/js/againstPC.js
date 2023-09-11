/*
    *cp lvl 1 
    random moves
    *cp lvl 3
    i need to learn how to win and how to tie with the 
    assumption that player dosent do mistake at all                                          
    *cp lvl 2
    random between lvl 1 and lvl 3
*/
import { getRandomIntInclusive } from "./random.js";
import { scoreBoard, ifEndGame } from "./scoring.js";

const X_or_O = getRandomIntInclusive(1, 2);
const whoplay = () => {
    if (X_or_O == 1) {
        document.querySelector("#whatpcplay").innerHTML += "&emsp;" + "x";
        return "x";
    } else {
        document.querySelector("#whatpcplay").innerHTML += "&emsp;" + "o";
        return "o";
    }
};
const LvlOne = (whatPcPlay) => {
    let pcPlay,
        flag = true,
        counter = 0,
        arrOfCells = document.querySelectorAll("#gamerDiv > div");
    setTimeout(() => {
        while (flag) {
            pcPlay = getRandomIntInclusive(0, 8);
            if (!arrOfCells[pcPlay].innerHTML) {
                arrOfCells[pcPlay].innerHTML = whatPcPlay;
                flag = false;
            }
            if (counter == 8) {
                flag = false;
            }
            counter++;
        }
    }, 1000);
};
export { whoplay, LvlOne };
