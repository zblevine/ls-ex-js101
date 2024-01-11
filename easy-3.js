const readline = require('readline-sync');

// ex1 - ddaaiillyy ddoouubbllee

function crunch(str) {
  return Array.from(str)
    .reduce((acc, curr) => {
      if (!acc) return curr;
      return (curr === acc[acc.length - 1]) ? acc : `${acc}${curr}`;
    }, '');
}

console.log(crunch('ddaaiillyy ddoouubbllee'));    // "daily double"
console.log(crunch('4444abcabccba'));              // "4abcabcba"
console.log(crunch('ggggggggggggggg'));            // "g"
console.log(crunch('a'));                          // "a"
console.log(crunch(''));                           // ""

// ex2 - Bannerizer

function logInBox(str) {
  let numSpaces = str.length + 2;
  let borderRow = `+${'-'.repeat(numSpaces)}+`;
  let secondRow = `|${' '.repeat(numSpaces)}|`;
  let middleRow = `| ${str} |`;
  console.log(`${borderRow}\n${secondRow}\n${middleRow}\n${secondRow}\n${borderRow}`);
}

logInBox('To boldly go where no one has gone before.');
logInBox('');

// ex3 - Stringy Strings

function stringy(len) {
  if (len === 1) return "1";
  let soFar = stringy(len - 1);
  return soFar + String(1 - Number(soFar[len - 2]));
}

console.log(stringy(6));    // "101010"
console.log(stringy(9));    // "101010101"
console.log(stringy(4));    // "1010"
console.log(stringy(7));    // "1010101"

// ex4 - Fibonacci Number Location By Length

function findFibonacciIndexByLength(size) {
  let fibo = Array(5n * size);
  fibo[0n] = 1n;
  fibo[1n] = 1n;
  let idx = 2n;
  while (true) {
    let curr = fibo[idx - 1n] + fibo[idx - 2n];
    if (BigInt(String(curr).length) === size) return idx+1n;
    fibo[idx] = curr;
    idx = idx + 1n;
  }
}

console.log(findFibonacciIndexByLength(2n) === 7n);    
console.log(findFibonacciIndexByLength(3n) === 12n);
console.log(findFibonacciIndexByLength(10n) === 45n);
console.log(findFibonacciIndexByLength(16n) === 74n);
console.log(findFibonacciIndexByLength(100n) === 476n);
console.log(findFibonacciIndexByLength(1000n) === 4782n);
console.log(findFibonacciIndexByLength(10000n) === 47847n);

// ex5 - Right Triangles

function triangle(size) {
  return Array(size).fill('').map((_, idx) => {
    return ' '.repeat(size - (idx + 1)) + '*'.repeat(idx + 1);
  }).join('\n');
}

console.log(triangle(5));
console.log(triangle(9));


// ex6 - Madlibs

let noun = readline.question('Enter a noun: ');
let verb = readline.question('Enter a verb: ');
let adjective = readline.question('Enter an adjective: ');
let adverb = readline.question('Enter an adverb: ');

console.log(`Do you ${verb} your ${adjective} ${noun} ${adverb}? That's hilarious!`);

// ex7 - Double Doubles

function isDouble(num) {
  let stringNum = String(num);
  if (stringNum.length % 2) return false;
  let halfLength = stringNum.length / 2;
  return stringNum.slice(0, halfLength) === stringNum.slice(halfLength);
}

function twice(num) {
  return isDouble(num) ? num : 2 * num;
}

console.log(twice(37));          // 74
console.log(twice(44));          // 44
console.log(twice(334433));      // 668866
console.log(twice(444));         // 888
console.log(twice(107));         // 214
console.log(twice(103103));      // 103103
console.log(twice(3333));        // 3333
console.log(twice(7676));        // 7676

// ex8 - Grade Book

let avg = arr => arr.reduce((acc, curr) => acc + curr, 0) / arr.length;

function getGrade(...scores) {
  let minScores = [0, 60, 70, 80, 90];
  let grades = ['F', 'D', 'C', 'B', 'A']
  let avgScore = avg(scores);
  let idx = 0;
  while ((idx < grades.length - 1) && (avgScore >= minScores[idx + 1])) {
    idx++; 
  }
  return grades[idx];
}

console.log(getGrade(95, 90, 93));    // "A"
console.log(getGrade(50, 50, 95));    // "D"

// ex9 - Clean up the words

let cleanUp = str => str.replaceAll(/[^a-z]+/gi, ' ');

console.log(cleanUp("---what's my +*& line?"));    // " what s my line "
console.log(cleanUp("wHeRe ThE??!$ wILD Th##ings arE"));

// ex10 - What Century is That?

function suffix(num) {
  if ([11, 12, 13].includes(num % 100)) return 'th'; //edge case
  switch (num % 10) {
    case 1:
      return 'st';
    case 2:
      return 'nd';
    case 3:
      return 'rd';
    default:
      return 'th';
  }
}

function century(year) {
  let prefix = Math.ceil(year / 100);
  return prefix + suffix(prefix);
}

console.log(century(2000));        // "20th"
console.log(century(2001));        // "21st"
console.log(century(1965));        // "20th"
console.log(century(256));         // "3rd"
console.log(century(5));           // "1st"
console.log(century(10103));       // "102nd"
console.log(century(1052));        // "11th"
console.log(century(1127));        // "12th"
console.log(century(11201));       // "113th"