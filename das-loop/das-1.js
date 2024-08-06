let result = "";
 
debugger;
for (let i = 1; i <= 10; i++) {
  for (let j = 1; j <= i; j++) {
    result += "* ";
  }
  result += "\n";
}
console.log(result);