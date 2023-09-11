import { scoreBoard, ifEndGame } from "./scoring.js";
import { whoplay, LvlOne } from "./againstPC.js";

let whoPlayNow,
    whatPcPlay = whoplay();
const handleClickXO = (myE) => {
    /*
    1) check if empty
    2) set innerHTML
    3) next turn
    4) end game
  */
    if (myE.target.innerHTML != "") {
        //the div has x or o
        return; // stop here
    }
    //the div is empty and I can put in this div x or o
    myE.target.innerHTML = whoPlayNow;
    whoPlayNow == "x" ? (whoPlayNow = "o") : (whoPlayNow = "x");
    if (whatPcPlay == whoPlayNow) {
        LvlOne(whatPcPlay);
        whoPlayNow == "x" ? (whoPlayNow = "o") : (whoPlayNow = "x");
    }
    ifEndGame();
};

const initPageLoad = () => {
    //set click on every cell
    let cells = document.querySelectorAll("#gamerDiv > div"); // get all cells
    for (let myDiv of cells) {
        myDiv.addEventListener("click", handleClickXO);
    }
};

const newGame = () => {
    whoPlayNow = "x"; // x start first
    document.querySelector("#whoWon").style.display = "none";
    let cells = document.querySelectorAll("#gamerDiv > div"); // get all cells
    for (let cell of cells) {
        cell.innerHTML = ""; //clear all cells
    }
};

window.addEventListener("load", () => {
    newGame();
    if (whatPcPlay == whoPlayNow) {
        LvlOne(whatPcPlay);
        whoPlayNow == "x" ? (whoPlayNow = "o") : (whoPlayNow = "x");
    }
    initPageLoad();
    document.getElementById("playAgainBtn").addEventListener("click", () => {
        newGame();
        if (whatPcPlay == whoPlayNow) {
            LvlOne(whatPcPlay);
            whoPlayNow == "x" ? (whoPlayNow = "o") : (whoPlayNow = "x");
        }
    });
});
