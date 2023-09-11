let counterX = 0,
    counterO = 0;
const scoreBoard = (whoWon) => {
    /* 
        if win counter of wins +1 and put in innerHTML
    */
    let scoreX = document.querySelector(".scoreX");
    let scoreO = document.querySelector(".scoreO");
    if (whoWon == "x") scoreX.innerHTML = ++counterX;
    else scoreO.innerHTML = ++counterO;
};
const whoWonDiv = (whoWonTheGame) => {
    let wonDiv = document.querySelector("#whoWon");
    wonDiv.style.display = "block";
    wonDiv.innerHTML = `${whoWonTheGame} won the game!`;
};
const ifEndGame = () => {
    /*
        1) check vertical
        2) check horizontal
        3) check diagonal
        4) if one of them if true
        4.1) someone won the game
        5) else if the board is full
        5.1) then tie
    */
    let whoWonTheGame;
    /*
        if x won the game whoWonTheGame = x
        if o won the game whoWonTheGame = o
        else no one won the game whoWonTheGame = tie
    */
    let cells = document.querySelectorAll("#gamerDiv > div"); // get all cells
    //*check vertical
    for (let i = 0; i <= 2; i++) {
        if (
            cells[i].innerHTML == cells[i + 3].innerHTML &&
            cells[i + 3].innerHTML == cells[i + 6].innerHTML &&
            cells[i].innerHTML != ""
        ) {
            //the first column is equal
            whoWonTheGame = cells[i].innerHTML;
        }
    }
    //*check horizontal
    for (let i = 0; i < 9; i += 3) {
        if (
            cells[i].innerHTML == cells[i + 1].innerHTML &&
            cells[i + 1].innerHTML == cells[i + 2].innerHTML &&
            cells[i].innerHTML != ""
        ) {
            //the first column is equal
            whoWonTheGame = cells[i].innerHTML;
        }
    }
    //*check diagonal
    let i = 0;
    if (
        cells[i].innerHTML == cells[i + 4].innerHTML &&
        cells[i + 4].innerHTML == cells[i + 8].innerHTML &&
        cells[i].innerHTML != ""
    ) {
        //the first column is equal
        whoWonTheGame = cells[i].innerHTML;
    }
    i = 2;
    if (
        cells[i].innerHTML == cells[i + 2].innerHTML &&
        cells[i + 2].innerHTML == cells[i + 4].innerHTML &&
        cells[i].innerHTML != ""
    ) {
        //the first column is equal
        whoWonTheGame = cells[i].innerHTML;
    }
    //*check if game end and someone won or tekko
    if (whoWonTheGame != undefined) {
        whoWonDiv(whoWonTheGame);
        scoreBoard(whoWonTheGame);
    } else {
        for (let cell of cells) {
            if (cell.innerHTML == "") {
                return; //stop here and continue the game
            }
        }
        whoWonDiv(whoWonTheGame);
    }
};
export { scoreBoard, ifEndGame };
