export const order = () => {
    let white = document.querySelectorAll(".white"),
        black = document.querySelectorAll(".black"),
        empty = document.querySelector(".none"),
        first = document.querySelector("#BlackRookL");
    for (let i = 0; i < 8; i++) {
        white[i].style.gridRow = "7";
    }
    for (let i = 8; i < 16; i++) {
        white[i].style.gridRow = "8";
    }
    for (let i = 0; i < 8; i++) {
        black[i].style.gridRow = "1";
    }
    for (let i = 8; i < 16; i++) {
        black[i].style.gridRow = "2";
    }
    let cols = 1;
    for (let i = 0; i < 4; i++) {
        for (let i = 1; i < 9; i++) {
            first.style.gridColumn = cols++;
            first = first.nextElementSibling;
        }
        cols = 1;
    }
    cols = 1;
    let row = 3;
    for (let i = 0; i < 4; i++) {
        for (let i = 1; i < 9; i++) {
            empty.style.gridColumn = cols++;
            empty.style.gridRow = row;
            empty = empty.nextElementSibling;
        }
        cols = 1;
        row++;
    }
    console.log(black, "\n", white);
};
