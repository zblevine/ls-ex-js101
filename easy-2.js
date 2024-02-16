const readline = require('readline-sync');

// ex1 - Welcome Stranger

function greetings(arr, obj) {
  return `Hello, ${arr.join(" ")}! ` +
  `Nice to have a ${obj.title} ${obj.occupation} around.`;
}

console.log(
  greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" })
);
// logs Hello, John Q Doe! Nice to have a Master Plumber around.

// ex2 - Greeting a user

let name = readline.question('What is your name? ');

if (name[name.length - 1] === '!') {
  console.log(`HELLO ${name.slice(0, name.length - 1).toUpperCase()}. WHY ARE WE SCREAMING?`);
} else {
  console.log(`Hello ${name}.`);
}

// ex3 - Multiplying Two Numbers

let multiply = (num1, num2) => num1 * num2;

console.log(multiply(5, 3) === 15); // logs true

// ex4 - Squaring an Argument

let square = (num) => multiply(num, num);

console.log(square(5) === 25); // logs true
console.log(square(-8) === 64); // logs true

// ex5 - Arithmetic Integer

function prompt(str) {
  console.log(`==> ${str}`);
}

let int1 = parseInt(readline.question('==> Enter the first number:\n'), 10);
let int2 = parseInt(readline.question('==> Enter the first number:\n'), 10);

prompt(`${int1} + ${int2} = ${int1 + int2}`);
prompt(`${int1} - ${int2} = ${int1 - int2}`);
prompt(`${int1} * ${int2} = ${int1 * int2}`);
prompt(`${int1} / ${int2} = ${Math.floor(int1 / int2)}`);
prompt(`${int1} % ${int2} = ${int1 % int2}`);
prompt(`${int1} ** ${int2} = ${int1 ** int2}`);

// ex6 - The End Is Near But Not Here

function penultimate(str) {
  let words = str.split(' ');
  return words[words.length - 2];
}

console.log(penultimate("last word") === "last"); // logs true
console.log(penultimate("Launch School is great!") === "is"); // logs true

// ex7 - Exclusive Or

function xor(left, right) {
  return (left || right) && !(left && right);
}

console.log(xor(5, 0) === true);          // true
console.log(xor(false, true) === true);   // true
console.log(xor(1, 1) === false);         // true
console.log(xor(true, true) === false);   // true

// ex8 - Odd Lists

function oddities(arr) {
  return arr.filter((_, idx) => !(idx % 2));
}

console.log(oddities([2, 3, 4, 5, 6])); // logs [2, 4, 6]
console.log(oddities([1, 2, 3, 4, 5, 6])); // logs [1, 3, 5]
console.log(oddities(["abc", "def"])); // logs ['abc']
console.log(oddities([123])); // logs [123]
console.log(oddities([])); // logs []

// ex9 - How Old is Teddy?

let age = Math.floor(Math.random() * 101) + 20;
console.log(`Teddy is ${age} years old!`);

// ex10 - When Will I Retire?

let currAge = readline.question('What is your age? ');
let retireAge = readline.question('At what age would you like to retire? ');
let yearsToGo = parseInt(retireAge, 10) - parseInt(currAge, 10);
let currentYear = new Date().getFullYear();

console.log(`It's ${currentYear}. You will retire in ${currentYear + yearsToGo}.`);
console.log(`You have only ${yearsToGo} years of work to go!`);

// ex11 - Get Middle Character

function centerOf(str) {
  let centerLen = (str.length % 2) ? 1 : 2;
  let startPos = Math.floor((str.length - 1) / 2);
  return str.slice(startPos, startPos + centerLen);
}

console.log(centerOf('I Love JavaScript')); // "a"
console.log(centerOf('Launch School'));     // " "
console.log(centerOf('Launch'));            // "un"
console.log(centerOf('Launchschool'));      // "hs"
console.log(centerOf('x'));                 // "x"

// ex12 - Always Return Negative

// eslint-disable-next-line no-confusing-arrow
let negative = (num) => (num < 0) ? num : (-1 * num);

console.log(negative(5));     // -5
console.log(negative(-3));    // -3
console.log(negative(0));     // -0