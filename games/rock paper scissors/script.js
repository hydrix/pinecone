debugger;
var you;
var myScore = 0;
var oppenent;
var oppenentScore = 0;

var choices = ["rock", "paper", "scissors"];

window.onload = function() {
    for(let i = 0; i < 3; i++) {
    let choice = document.createElement("img");
    choice.id = choices[i];
    choice.src = choices[i] + ".png";
    choice.addEventListener("click", selectChoice)
    document.getElementById("choices").append(choice)
    }
}
function selectChoice() {
    you = this.id;
    document.getElementById("my-choice").src = you + ".png";

    oppenent = choices[Math.floor(Math.random()*3)];
    document.getElementById("oppenent-choice").src = oppenent + ".png";

    if(you == oppenent) {
        myScore += 1;
        oppenentScore += 1;
    }
    else {
        if (you == "rock") {
            if (oppenent == "scissors"){
                myScore += 1;
            }
            else if (oppenent == "paper"){
                oppenentScore += 1;
            }
        }
                else if (you == "scissors") {
            if (oppenent == "paper"){
                myScore += 1;
            }
            else if (oppenent == "rock"){
                oppenentScore += 1;
            }
        }
               else if (you == "paper") {
            if (oppenent == "rock"){
                myScore += 1;
            }
            else if (oppenent == "scissors"){
                oppenentScore += 1;
            }
        }
    }

    document.getElementById("my-score").innerText = myScore;
    document.getElementById("oppenent-score").innerText = oppenentScore;
}