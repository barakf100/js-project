import * as sn from "./snakeClass.js";
export let theScore = document.querySelector(".theScore");
theScore.innerHTML = 0; // set score to zero
let nameLocalStorageKeys = localStorage.length + 1;

export const setScore = () => {
    //set score to local storage
    localStorage.setItem(`snake.${nameLocalStorageKeys++}`, sn.score);
};

document.querySelector("#newGame").addEventListener("click", () => {
    // new game button
    sn.newGame();
});

export const handleLocalStorage = () => {
    let li = document.querySelectorAll("li"),
        keys = [],
        previousScores = new Array(10).fill(0),
        counter;
    // takes score from local storage
    for (let index = 0; index < localStorage.length; index++) {
        if (localStorage.key(index).startsWith("snake"))
            previousScores[index] = +localStorage.getItem(
                localStorage.key(index)
            );
    }
    // sort scores
    previousScores.sort((a, b) => {
        return a - b;
    });
    counter = previousScores.length - 1;
    // set score on screen from end of array to start
    for (const iterator of li) {
        iterator.innerHTML = previousScores[counter--];
    }
};
