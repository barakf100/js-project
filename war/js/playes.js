import * as card from "./cards.js";
import * as war from "./war.js";
export class players {
    theCards;
    cardsInHend;
    cardsOnSide;
    theCardsOnSide;
    name;
    constructor() {
        //cobstructor
        this.theCards = []; // card to play with
        this.cardsInHend = 27; // how much card to play
        this.cardsOnSide = 0; // card that already won
        this.theCardsOnSide = []; // card won
    }
    setCardsCounters() {
        //method to set counters for card on side(won already)
        // and card on hand ( to play with)
        this.cardsInHend = this.theCards.length;
        this.cardsOnSide = this.theCardsOnSide.length;
    }
    startNew() {
        this.theCards = []; // card to play with
        this.cardsInHend = 27; // how much card to play
        this.cardsOnSide = 0; // card that already won
        this.theCardsOnSide = []; // card won
    }
    setScore() {
        let score = document.querySelector(`#${this.name} .card`);
        score.innerHTML = `\nhand = ${this.cardsInHend}<br>side = ${this.cardsOnSide}`;
    }
}
let globalCardInTie = [];
const toNum = (str) => {
    // turn the string into number to know who is bigger
    if (!isNaN(+str)) return +str;
    else {
        switch (str) {
            case "J":
                return 11;
                break;
            case "Q":
                return 12;
                break;
            case "K":
                return 13;
                break;
            case "A":
                return 15;
                break;
            case "joker":
                return 100;
                break;
            default:
                break;
        }
    }
};
export const smallWin = (p1, p2) => {
    // checks who won and stack it on the side of the player
    // also remove it from the player who lost
    let p1Card = p1.theCards.shift(),
        p2Card = p2.theCards.shift(),
        p1value = toNum(p1Card.value),
        p2value = toNum(p2Card.value);
    if (p1value > p2value) {
        p1.theCardsOnSide = [...p1.theCardsOnSide, p1Card, p2Card];
        if (globalCardInTie.length) {
            p1.theCardsOnSide = [...p1.theCardsOnSide, ...globalCardInTie];
            globalCardInTie = [];
        }
        card.cardStack(p1);
    } else if (p1value < p2value) {
        p2.theCardsOnSide = [...p2.theCardsOnSide, p1Card, p2Card];
        if (globalCardInTie.length) {
            p2.theCardsOnSide = [...p2.theCardsOnSide, ...globalCardInTie];
            globalCardInTie = [];
        }
        card.cardStack(p2);
    } else {
        globalCardInTie = [...globalCardInTie, p1Card, p2Card];
        let cardInTie = tie(p1, p2);
    }
    p1.setCardsCounters();
    p2.setCardsCounters();
    p1.setScore();
    p2.setScore();
};

export const checkwin = (p1, p2) => {
    // check if the game ended
    if (p1.cardsInHend == 0 && p1.cardsOnSide == 0) {
        winnerAndNewGame("you");
    } else if (p2.cardsInHend == 0 && p2.cardsOnSide == 0) {
        winnerAndNewGame("pc");
    } else if (p1.cardsInHend == 0 && p1.cardsOnSide != 0) {
        suffleBackToHand(p1);
    }
    if (p2.cardsInHend == 0 && p2.cardsOnSide != 0) {
        suffleBackToHand(p2);
    }
};

const winnerAndNewGame = (winner) => {
    // create div elm of the winner gives an option to start a new game
    let winDiv = document.createElement("div"),
        newGame = document.createElement("button");
    winDiv.className = "winDiv";
    winDiv.innerHTML = `the winner is ${winner}`;
    newGame.className = "newGameBtn";
    newGame.innerHTML = "new game";
    document.querySelector("#game").appendChild(winDiv);
    document.querySelector(".winDiv").appendChild(newGame);
    document.querySelector(".newGameBtn").addEventListener("click", () => {
        document.querySelector("#game").removeChild(winDiv);
        card.clearMid();
        card.clearSideCards(war.p1);
        card.clearSideCards(war.p2);
        let deck = card.createDeck();
        card.shuffleArray(deck);
        war.p1.startNew();
        war.p2.startNew();
        card.splitCards(deck, war.p1, war.p2);
    });
};

const suffleBackToHand = (player) => {
    // when card in hand finish take from the board and continue play
    card.shuffleArray(player.theCardsOnSide);
    player.theCards = player.theCardsOnSide;
    player.theCardsOnSide = [];
    card.clearSideCards(player);
};

export const pcPlay = (p1) => {
    // pc play
    let p1Card = document.querySelector("#p1Put");
    p1Card.style.display = "flex";
    card.giveCss(p1, "p1Put");
};

const tie = (p1, p2) => {
    // if tie every player put 3 cards on the side and another card on top the winner
    // take it all
    let img,
        p1Put = document.querySelector("#p1"),
        p2Put = document.querySelector("#p2"),
        cardInTie = [];
    if (p1.cardsInHend < 5) suffleBackToHand(p1);
    if (p2.cardsInHend < 5) suffleBackToHand(p2);
    for (let index = 0; index <= 2; index++) {
        setTimeout(() => {
            img = document.createElement("img");
            img.src = "./assets/card-small.png";
            img.style.borderRadius = "10%";
            img.style.position = "absolute";
            img.style.transform = `rotate(calc(${index * 10 + 40}deg))`;
            img.className = "tie";
            p1Put.appendChild(img);
            p2Put.appendChild(img.cloneNode(false));
            cardInTie = [...cardInTie, p1.theCards.shift(p1, p2)];
            cardInTie = [...cardInTie, p2.theCards.shift(p1, p2)];
        }, 1500);
    }
    setTimeout(() => {
        globalCardInTie = [...globalCardInTie, ...cardInTie];
    }, 1501);
};
