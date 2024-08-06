const board = document.querySelector(".board");

const MAX_WIDTH = 500; 

let ROW_COUNT = 2; 
let COL_COUNT = 2; 
let MARGIN = 100; 

let count = 0;

let score = 0;

const draw = () => {
  board.innerHTML = '';
const red = Math.floor(Math.random() * 256);
const green = Math.floor(Math.random() * 256); 
const blue = Math.floor(Math.random() * 256); 

const oddIndex = Math.floor(Math.random() * ROW_COUNT * COL_COUNT);

 for (let i = 0; i < ROW_COUNT * COL_COUNT; i++) {
    const tileEl = document.createElement("div"); 
    tileEl.className = "tile";
    tileEl.style.width = `${MAX_WIDTH / COL_COUNT}px`;
    tileEl.style.height = `${MAX_WIDTH / ROW_COUNT}px`;

    

  if (i === oddIndex) {
    tileEl.addEventListener('click', handleCorrectClick)
    tileEl.style.backgroundColor =`rgb(${red - MARGIN},${green - MARGIN},${blue - MARGIN})`; 
 } else { 
  tileEl.addEventListener('click', handleClick)
   tileEl.style.backgroundColor =`rgb(${red},${green},${blue})`;
 }

 board.appendChild(tileEl);
} 
}

const handleClick = () => {
  console.log("Clicked wrong!")
  score--;
};

const handleCorrectClick = () => {
  if (score % 3 === 0) {
    ROW_COUNT++;
    COL_COUNT++;
  }
  if (MARGIN !== 20){
    MARGIN -= 10;
  }
  score++;
  draw();
};

draw();