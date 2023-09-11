let canvas = document.querySelector("canvas"),
    c = canvas.getContext("2d");
canvas.width = window.innerWidth / 2;
canvas.height = window.innerHeight;
export const drawHangBoard = (color) => {
    c.beginPath();
    c.moveTo(600, 700);
    c.lineTo(100, 700);
    c.lineTo(100, 100);
    c.lineTo(400, 100);
    c.lineTo(400, 150);
    c.lineWidth = 5;
    c.strokeStyle = color;
    c.stroke();
};
export const drawHead = (color) => {
    c.beginPath();
    c.arc(400, 190, 40, 0, Math.PI * 2, false);
    c.strokeStyle = color;
    c.stroke();
};
export const drawBody = () => {
    c.beginPath();
    c.moveTo(400, 230);
    c.lineTo(400, 400);
    c.lineWidth = 3;
    c.strokeStyle = "white";
    c.stroke();
};
export const drawLimbs = (side) => {
    c.beginPath();
    c.strokeStyle = "white";
    switch (side) {
        case "rightHand":
            c.moveTo(400, 280);
            c.lineTo(480, 240);
            break;
        case "leftHand":
            c.moveTo(400, 280);
            c.lineTo(320, 240);
            break;
        case "rightLeg":
            c.moveTo(400, 400);
            c.lineTo(480, 480);
            break;
        case "leftLeg":
            c.moveTo(400, 400);
            c.lineTo(320, 480);
            break;
        default:
            break;
    }
    c.stroke();
};
export const dead = () => {
    // drawHead("black");
    drawHangBoard("red");
    c.beginPath();
    c.arc(400, 190, 41, 0, Math.PI * 2, false);
    c.arc(400, 190, 39, 0, Math.PI * 2, false);
    c.strokeStyle = "black";
    c.stroke();
    c.beginPath();
    c.arc(365, 210, 40, 0, Math.PI * 2, false);
    c.moveTo(400, 146);
    c.lineTo(390, 182);
    c.strokeStyle = "white";
    c.stroke();
};
export const clearBoard = () => {
    c.clearRect(0, 0, canvas.width, canvas.height);
};
window.addEventListener("resize", () => {
    canvas.width = window.innerWidth / 2;
    canvas.height = window.innerHeight;
    //TODO: this
});
