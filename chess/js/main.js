import { pawnMove } from "./movement.js";
import { order } from "./order.js";

order();

// location
let //
    { gridRow: BlackRookLRow } = document.querySelector("#BlackRookL").style,
    { gridColumn: BlackRookLCol } = document.querySelector("#BlackRookL").style;
console.log(BlackRookLRow, BlackRookLCol);

for (const iterator of document.querySelectorAll("span")) {
    iterator.addEventListener("click", () => {
        pawnMove(iterator, "black");
        console.log(iterator);
    });
}
// let grid = document.querySelector(".game");
// grid.addEventListener("click", (e) => {
//     console.log(e.target.childNodes);
// });
