<<<<<<< HEAD
const answer = "";

const hits = [];

//let fails = 0;

const words [""]
=======
const hits = [];

const words = [
  "javascript",
  "hangman",
  "developer",
  "function",
  "variable",
  "programming",
  "interface",
  "computer",
  "application",
  "framework",
  "algorithm",
  "software",
  "hardware",
  "database",
  "compiler",
  "syntax",
  "browser",
  "document",
  "library",
  "execution"
];

let fails = 0;
>>>>>>> 9358b2a3bbe8cc18e257fb3fe0f83dbde15eb30f

const failEl = document.querySelector("#fails");
const wordEl = document.querySelector("#word");
const lettersEl = document.querySelector("#letters");

<<<<<<< HEAD
=======
function GetRandomWord(wordlist) {
  const randomIndex = Math.floor(Math.random()* wordlist.length);
  return wordlist[randomIndex];
}

const answer = GetRandomWord(words);

>>>>>>> 9358b2a3bbe8cc18e257fb3fe0f83dbde15eb30f
const printAnswer = () => {
  let displayText = answer;

  for (let char = 0; char < answer.length; char++) {
    if (answer[char] !== " ") {
      if (!hits.includes(answer[char].toLowerCase())) {
        displayText = displayText.replaceAll(answer[char], "_");
<<<<<<< HEAD
      }
    }
  }

=======
      } 
    }
  }
>>>>>>> 9358b2a3bbe8cc18e257fb3fe0f83dbde15eb30f
  wordEl.innerText = displayText;
};

const keyboard = [
  ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
  ["a", "s", "d", "f", "g", "h", "j", "k", "l"],
  ["z", "x", "c", "v", "b", "n", "m"],
];

const printKeyboard = () => {
  lettersEl.innerHTML = "";
  for (let row = 0; row < keyboard.length; row++) {
    const rowEl = document.createElement("div");
    rowEl.className = "keyboard-row";
    for (let col = 0; col < keyboard[row].length; col++) {
      const letterBtn = document.createElement("button");
      letterBtn.innerText = keyboard[row][col];

      if (hits.includes(keyboard[row][col])) {
        letterBtn.disabled = "disabled";
      } else {
        letterBtn.addEventListener("click", () => {
          hits.push(keyboard[row][col]);
          printAnswer();
          printKeyboard();
        });
      }

      rowEl.appendChild(letterBtn);
    }
    lettersEl.appendChild(rowEl);
  }
};

printAnswer();
<<<<<<< HEAD
printKeyboard();
 
=======
printKeyboard();
>>>>>>> 9358b2a3bbe8cc18e257fb3fe0f83dbde15eb30f
