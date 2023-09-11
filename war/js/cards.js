const cardType = ["♠️", "♦️", "♣️", "♥️"],
    cards = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"],
    joker = { value: "joker", type: "win" };

export const createDeck = () => {
    // make card deck , value + type and insert two jokers
    let deck = [];
    for (const type of cardType) {
        for (const value of cards) {
            let cardToDeck = { value: value, type: type };
            deck = [...deck, cardToDeck];
        }
    }
    deck = [...deck, joker, joker];
    return deck;
};
export const shuffleArray = (array) => {
    //suffle function to suffle the deck before split
    //!Fisher–Yates Shuffle - copy from internet
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
};

export const splitCards = (deck, p1, p2) => {
    // split the card deck to the players
    for (let index = 0; index < deck.length; index++) {
        if (index % 2) p1.theCards = [...p1.theCards, deck[index]];
        else p2.theCards = [...p2.theCards, deck[index]];
    }
};

export const giveCss = (player, whpPlay) => {
    // function that gives a card css
    // param player = the player
    // param whoplay = string for queryselector

    // take all the elm i need to create a card
    let { value } = player.theCards[0];
    let { type: cType } = player.theCards[0];
    let valueLeft = document.querySelector(`#${whpPlay} .left`),
        type = document.querySelector(`#${whpPlay} span`),
        valueRight = document.querySelector(`#${whpPlay} .right`),
        leftType = document.querySelector(`#${whpPlay} .leftType`),
        rightType = document.querySelector(`#${whpPlay} .rightType`),
        card = document.querySelector(`#game #${whpPlay}`);
    // put the values and style for each card
    card.style.backgroundImage = "none";
    valueLeft.innerHTML = value;
    valueRight.innerHTML = value;
    leftType.innerHTML = cType;
    rightType.innerHTML = cType;

    //special card in switch case because //!"if else-if" is worst then callback hell !
    //default for regular numbers
    switch (value) {
        case "J":
            type.innerHTML = "<img src='./assets/jack.png'>";
            valueLeft.style.textDecoration = "none";
            valueRight.style.textDecoration = "none";
            break;
        case "Q":
            type.innerHTML = "<img src='./assets/queen.png'>";
            valueLeft.style.textDecoration = "none";
            valueRight.style.textDecoration = "none";
            break;
        case "K":
            type.innerHTML = "<img src='./assets/king.png'>";
            valueLeft.style.textDecoration = "none";
            valueRight.style.textDecoration = "none";
            break;
        case "joker":
            type.innerHTML = "<img src='./assets/joker.png'>";
            valueLeft.style.textDecoration = "none";
            valueRight.style.textDecoration = "none";
            leftType.innerHTML = "";
            rightType.innerHTML = "";
            break;
        default:
            type.innerHTML = cType;
            if (value == "6" || value == "9") {
                valueLeft.style.textDecoration = "underline";
                valueRight.style.textDecoration = "underline";
            } else {
                valueLeft.style.textDecoration = "none";
                valueRight.style.textDecoration = "none";
            }
            break;
    }
};

export const clearMid = () => {
    // clear the bored after small win
    document.querySelector("#game #p1Put").style.display = "none";
    document.querySelector("#game #p2Put").style.display = "none";
};
export const clearWhenTie = () => {
    // clear the bored after a tie
    let imgP1 = document.querySelectorAll("#p1 .tie"),
        imgP2 = document.querySelectorAll("#p2 .tie");
    setTimeout(() => {
        for (const iterator of imgP1) {
            iterator.style.display = "none";
        }
        for (const iterator of imgP2) {
            iterator.style.display = "none";
        }
    }, 1500);
};

export const clearSideCards = (player) => {
    //clear after the cards on hand finished
    let img = document.querySelectorAll(`#wins${player.name} img`);
    for (const iterator of img) {
        iterator.style.display = "none";
    }
    document.querySelector(`#wins${player.name}`).style.backgroundImage =
        "none";
};

export const cardStack = (player) => {
    // after a win the cards move to the side of the player that won
    // with a little rotaition to see it
    // time out to make it look better
    let card = document.querySelector(`#${player.name} #wins${player.name}`),
        img = document.createElement("img");
    img.src = "./assets/card-small.png";
    img.style.borderRadius = "10%";
    img.style.position = "absolute";
    player.cardsOnSide += 2;
    player.cardsInHend--;
    if (player.cardsOnSide) {
        img.style.transform = `rotate(calc(${3.5 * player.cardsOnSide}deg))`;
        setTimeout(() => {
            card.style.backgroundImage = "url('./assets/cardBack.jpg')";
            card.appendChild(img);
            clearMid();
        }, 1500);
    }
    if (document.querySelector("#p2 .tie")) clearWhenTie();
};
