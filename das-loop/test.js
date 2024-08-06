let result = "";
 
debugger;
for (let i = 10; i >= 1; i--) {
  for (let j = 0; j > i; j++) {
    result += "* ";
  }
  result += "\n";
}
console.log(result);
 

