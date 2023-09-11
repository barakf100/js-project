export const canvas = document.querySelector("canvas"),
    c = canvas.getContext("2d"),
    boardColor = "black",
    snakeColor = "white";
canvas.width = (80 / 100) * innerWidth;
canvas.height = innerHeight;
c.fillStyle = boardColor;
c.fillRect(0, 0, canvas.width, canvas.height);
