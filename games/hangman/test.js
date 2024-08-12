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

const answer = words;

function GetRandomWord(wordlist) {
  const randomIndex = Math.floor(Math.random()* wordlist.length);
  return wordlist[randomIndex];
}
console.log(GetRandomWord(answer))