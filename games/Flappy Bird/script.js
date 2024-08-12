//board
let board; 
let boardWidth = 360;
let boardHeight = 640;
let context;

//bird
let birdWidth = 34;
let birdHeight = 24;
let birdX = boardWidth/8;
let birdY = boardHeight/2;
let birdImg;

let bird = {

    x : birdX,

    y : birdY,

    width : birdWidth,

    height : birdHeight,

}

//pipes
let pipeArray = [];
let pipeWidth = 64;
let pipeHeight = 512;
let pipeX = boardWidth;
let pipeY = 0;

let topPipeImg;
let bottomPipeImg;

//physics
let velocityX = -2; //pipes moving left speed 
let velocityY = 0; // bird jump speed
let gravity = 0.4;

let gameOver = false;
let score = 0;


window.onload = function() {
    board = document.getElementById("board");
    board.height = boardHeight;
    board.width = boardWidth;
    context = board.getContext("2d");

    //load images
    birdImg = new Image();
    birdImg.src = "./flappybird.png";
    birdImg.onload = function() {
    context.drawImage(birdImg, bird.x, bird.y, bird.width, bird.height);
    }

    topPipeImg = new Image();
    topPipeImg.src = "./toppipe.png";

    bottomPipeImg = new Image();
    bottomPipeImg.src = "./bottompipe.png";

    requestAnimationFrame(update);
    setInterval(placePipes, 1500);
    document.addEventListener("keydown", moveBird);

}

function update() {
    requestAnimationFrame(update);
    if(gameOver){
       // velocityX = 
        return;
    }
    context.clearRect(0, 0, board.width, board.height)

    // Increase difficulty when score reaches 4
    if (score >= 4) {
        velocityX = -3; // Increase pipe speed
    }

    //bird
    velocityY += gravity;
    bird.y = Math.max(bird.y + velocityY, 0); //sky limit
    context.drawImage(birdImg, bird.x, bird.y, bird.width, bird.height);

    if(bird.y > board.height) {
        gameOver = true;
    }

    //pipes
    for (let i = 0; i < pipeArray.length; i++) {
        let pipe = pipeArray[i];
        pipe.x += velocityX;
        context.drawImage(pipe.img, pipe.x, pipe.y, pipe.width, pipe.height);

        if(!pipe.passed && bird.x > pipe.x + pipe.width){
            score += 0.5;
            pipe.passed = true;
        }

        if (detectCollision(bird, pipe)) {
            gameOver = true;
        }
    }

    //clear pipes
    while (pipeArray.length > 0 && pipeArray[0].x < -pipeWidth) {
        pipeArray.shift();
    }

    //score
    context.fillStyle = "white";
    context.font = '45px sans-serif'
    context.fillText(score, 5, 45)

    if (gameOver)
        context.fillText("TRY HARDER", 30, 350) 
        
}

function placePipes() {
    if (gameOver) {
        return;
    }

    let randompipeY = pipeY - pipeHeight/4 - Math.random()*(pipeHeight/2);
<<<<<<< HEAD
    let openingSpace = board.height/4;
=======
>>>>>>> 9358b2a3bbe8cc18e257fb3fe0f83dbde15eb30f

    // Decrease pipe gap when score reaches 4
    let openingSpace = score >= 4 ? board.height / 7 : board.height / 4;
    let topPipe = {
        img : topPipeImg,
        x : pipeX,
        y : randompipeY,
        width : pipeWidth,
        height : pipeHeight,
        passed : false
    }
    let bottompipe = {
        img : bottomPipeImg,
        x : pipeX,
        y : randompipeY + pipeHeight + openingSpace,
        width : pipeWidth,
        height : pipeHeight,
        passed : false
    }
    pipeArray.push(bottompipe);
    pipeArray.push(topPipe);
}

function moveBird(e) {
    if (e.code == "Space" || e.code == "ArrowUp") {
        //jump 
        velocityY = -6;

        //reset game 
        if(gameOver) {
            bird.y = birdY;
            pipeArray = [];
            score = 0;
            gameOver = false;
        }
    } 
}


function detectCollision (a, b) {
    return a.x < b.x + b.width && 
    a.x + a.width > b.x &&
    a.y  < b.y + b.height &&
    a.y + a.height > b.y;
}
