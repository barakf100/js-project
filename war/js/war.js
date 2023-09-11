import * as card from "./cards.js";
import * as player from "./playes.js";
export let p1 = new player.players(),
    p2 = new player.players();
let deck = card.createDeck();
p1.name = "p1";
p2.name = "p2";
card.shuffleArray(deck);
card.splitCards(deck, p1, p2);
document.querySelector("#p2 .card").addEventListener("click", () => {
    let p2card = document.querySelector("#p2Put");
    p2card.style.display = "flex";
    card.giveCss(p2, "p2Put");
    player.pcPlay(p1);
    player.smallWin(p1, p2);
    p1.cardsInHend = 0;
    p1.cardsOnSide = 0;
    player.checkwin(p1, p2);
});
