import { getRandomIntInclusive } from "./random.js";
class WordList {
    category;
    words;
    constructor(category, words) {
        this.category = category;
        this.words = words;
    }
    chooseWord() {
        document.querySelector("#category").innerHTML = this.category;
        return this.words[getRandomIntInclusive(0, this.words.length - 1)];
    }
}
export const wordToUnderLine = (word) => {
    let underLineStr = "";
    for (let i = 0; i < word.length; i++) {
        if (word.charAt(i) === "-") underLineStr += "- ";
        else underLineStr += "_ ";
    }
    document.querySelector("#wordAsUnderLine").innerHTML = underLineStr;
};

export const arrofWords = [
    new WordList("Animals", [
        "elephant",
        "tiger",
        "giraffe",
        "penguin",
        "dolphin",
        "kangaroo",
        "cheetah",
        "koala",
        "chimpanzee",
        "rhinoceros",
    ]),
    new WordList("Fruits", [
        "apple",
        "banana",
        "orange",
        "strawberry",
        "pineapple",
        "watermelon",
        "grapefruit",
        "kiwi",
        "blueberry",
        "mango",
    ]),
    new WordList("Countries", [
        "canada",
        "japan",
        "brazil",
        "australia",
        "germany",
        "india",
        "france",
        "mexico",
        "egypt",
        "south-africa",
    ]),
    new WordList("Sports", [
        "soccer",
        "tennis",
        "basketball",
        "swimming",
        "baseball",
        "volleyball",
        "gymnastics",
        "hockey",
        "golf",
        "cycling",
    ]),
    new WordList("Movies", [
        "titanic",
        "jurassic-park",
        "avatar",
        "the-godfather",
        "star-wars",
        "forrest-gump",
        "the-matrix",
        "inception",
        "gladiator",
        "braveheart",
    ]),
    new WordList("Food-Drink", [
        "pizza",
        "hamburger",
        "sushi",
        "chocolate",
        "coffee",
        "ice-cream",
        "pancakes",
        "spaghetti",
        "sandwich",
        "smoothie",
    ]),
    new WordList("Science", [
        "chemistry",
        "astronomy",
        "biology",
        "physics",
        "geology",
        "genetics",
        "ecology",
        "microscope",
        "meteorology",
        "paleontology",
    ]),
    new WordList("Historical-Figures", [
        "abraham-lincoln",
        "cleopatra",
        "albert-einstein",
        "marie-curie",
        "nelson-mandela",
        "leonardo-da-vinci",
        "martin-luther-king-jr",
        "winston-churchill",
        "joan-of-arc",
        "galileo-galilei",
    ]),
    new WordList("Musical-Instruments", [
        "guitar",
        "piano",
        "violin",
        "trumpet",
        "flute",
        "drum",
        "saxophone",
        "harp",
        "clarinet",
        "trombone",
    ]),
    new WordList("TV", [
        "friends",
        "breaking-bad",
        "game-of-thrones",
        "the-simpsons",
        "the-office",
        "stranger-things",
        "the-mandalorian",
        "black-mirror",
        "westworld",
        "vikings",
    ]),
];
