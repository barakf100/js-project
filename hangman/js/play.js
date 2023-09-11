import { getRandomIntInclusive } from "./random.js";
import { arrofWords, wordToUnderLine } from "./words.js";
import {
    clearBoard,
    dead,
    drawBody,
    drawHangBoard,
    drawHead,
    drawLimbs,
} from "./draw.js";
let category = getRandomIntInclusive(0, 9),
    word = arrofWords[category].chooseWord(),
    countMistake = 0,
    countCorrect = 0,
    CorrectGuessedChar = new Array(word.length),
    newGameFlag = false;

document.querySelector("#startGame").addEventListener("click", () => {
    // choose word from category and start game
    if (newGameFlag) {
        newGameBtn();
    }
    wordToUnderLine(word);
});

// array of functions to draw the hangman
const arrOfDraw = [drawHangBoard, drawHead, drawBody, drawLimbs, dead];

for (const iterator of document.querySelectorAll("#buttons button")) {
    iterator.addEventListener("click", () => {
        iterator.style.textDecoration = "line-through";
        iterator.disabled = true;
        let indexOfChar = letterInWord(iterator.innerHTML, word);
        if (indexOfChar.length) {
            letOnUnderLine(indexOfChar, iterator.innerHTML);
        } else {
            switch (countMistake) {
                case 0:
                    arrOfDraw[0]("white");
                    break;
                case 1:
                    arrOfDraw[1]("white");
                    break;
                case 2:
                    arrOfDraw[2]();
                    break;
                case 3:
                    arrOfDraw[3]("rightHand");
                    break;
                case 4:
                    arrOfDraw[3]("leftHand");
                    break;
                case 5:
                    arrOfDraw[3]("rightLeg");
                    break;
                case 6:
                    arrOfDraw[3]("leftLeg");
                    break;
                case 7:
                    arrOfDraw[4]();
                    break;

                default:
                    break;
            }
            countMistake++;
        }
        if (countCorrect == word.length && endgame()) {
            setTimeout(() => {
                newGameBtn();
                wordToUnderLine(word);
            }, 5000);
        } else if (countMistake == 8) {
            gameOver();
        } //game over
    });
}

const letterInWord = (char, word) => {
    // search index in the word return arr of indexes or -1
    let arrOfIndexes = [];
    for (let i = 0; i < word.length; i++) {
        if (char == word[i]) {
            arrOfIndexes = [...arrOfIndexes, i];
            countCorrect++;
        }
    }
    if (!arrOfIndexes.length) return -1;
    else return arrOfIndexes;
};
const letOnUnderLine = (index, char) => {
    // update the dash word
    let theWord = document.querySelector("#wordAsUnderLine").innerHTML,
        newWord = theWord.split(" ");
    for (let i = 0; i < index.length; i++) {
        newWord[index[i]] = char;
    }
    newWord = newWord.join(" ");
    for (let i = 0; i < index.length; i++) {
        CorrectGuessedChar[index[i]] = char;
    }
    CorrectGuessedChar[index] = char;
    document.querySelector("#wordAsUnderLine").innerHTML = newWord;
};

const endgame = () => {
    let thisWord = document.querySelector("#wordAsUnderLine").innerHTML;
    thisWord.split(" ").slice(0, -1);
    if (equal(thisWord, CorrectGuessedChar)) {
        document.querySelector("#wordAsUnderLine").style.color = "green";
        return true;
    } else return false;
};

const gameOver = () => {
    let gameover = document.querySelector("#wordAsUnderLine");
    gameover.innerHTML = "your man is hanged!<br>" + word;
    gameover.style.color = "red";
    document.querySelector("#startGame").innerHTML = "new game";
    newGameFlag = true;
};

const equal = (a, b) => {
    for (let i = 0; i < a.length; i++) {
        if (a[i] === b[i]) return true;
        else return false;
    }
};
const newGameBtn = () => {
    category = getRandomIntInclusive(0, 9);
    word = arrofWords[category].chooseWord();
    countCorrect = 0;
    countMistake = 0;
    CorrectGuessedChar = new Array(word.length);
    document.querySelector("#wordAsUnderLine").style.color = "white";
    clearBoard();
    for (const iterator of document.querySelectorAll("#buttons button")) {
        iterator.style.textDecoration = "none";
        iterator.disabled = false;
    }
};
//TODO: bug on new games
