function update() {
    requestAnimationFrame(update);
    if(gameOver){
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

    // Decrease pipe gap when score reaches 4
    let openingSpace = score >= 4 ? board.height / 8 : board.height / 6;

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
