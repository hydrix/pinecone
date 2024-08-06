let row = '';
 
debugger;
for (let i = 1; i <= 10; i++) {
  for (let j = 1; j < i; j++) {
    row += '  ';
  }
  for(let k = i; k <= 10; k++)
  row +='* ';
  row +="\n";
}
console.log(row);