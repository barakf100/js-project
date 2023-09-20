const cardType = ["♠️", "♦️", "♣️", "♥️"],
    cards = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
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
