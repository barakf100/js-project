export const pawnMove = (pawn, color) => {
    switch (color) {
        case "black":
            pawn.style.gridRow++;
            break;
        case "white":
            pawn.style.gridRow--;
            break;

        default:
            break;
    }
};
