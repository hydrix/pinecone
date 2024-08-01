const board = document.querySelector(".board");

const ROW_COUNT = 10;
const COL_COUNT = 10;

const MAX_WIDTH = 500;
const MAX_HEIGHT = 500;
const MARGIN = 5;

board.style.width = `${MAX_WIDTH}px`;
board.style.height = `${MAX_HEIGHT}px`;

for (let i = 0; i < ROW_COUNT * COL_COUNT; i++) {
    const tile = document.createElement("div");
    tile.classList.add("tile");
    tile.style.width = `${(MAX_WIDTH / ROW_COUNT) - MARGIN}px`;
    tile.style.height = `${(MAX_HEIGHT / COL_COUNT) - MARGIN}px`;
    tile.style.margin = `${MARGIN}px`;

    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    tile.style.backgroundColor = `rgb(${red},${green},${blue})`;

    board.appendChild(tile);
}
