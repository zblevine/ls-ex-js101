const readline = require('readline-sync');
// ex1 - Searching 101

let num1 = readline.question('Enter the 1st number: ');
let num2 = readline.question('Enter the 2nd number: ');
let num3 = readline.question('Enter the 3rd number: ');
let num4 = readline.question('Enter the 4th number: ');
let num5 = readline.question('Enter the 5th number: ');
let numArr = [num1, num2, num3, num4, num5];
let lastNum = readline.question('Enter the last number: ');
let str = numArr.includes(lastNum) ? 'appears' : 'does not appear';

console.log(`The number ${lastNum} ${str} in ${numArr.join(',')}.`);