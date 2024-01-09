const rlSync = require('readline-sync')

//ex1 - Isn't It Odd?

const isOdd = (num) => !!(num % 2)

console.log(isOdd(2)); // => false
console.log(isOdd(5)); // => true
console.log(isOdd(-17)); // => true
console.log(isOdd(-8)); // => false
console.log(isOdd(0)); // => false
console.log(isOdd(7)); // => true

//ex2 - Odd Numbers

for (let i = 1; i <= 99; i += 2) {
  //console.log(i);
}

//ex3 - Even Numbers

for (let i = 2; i <= 98; i += 2) {
  //console.log(i);
}

//ex4 - How big is the room?

let roomLength = rlSync.question('Enter the length of the room in meters: ');
let roomWidth = rlSync.question('Enter the width of the room in meters: ')
let areaInMeters = (parseInt(roomLength) * parseInt(roomWidth)).toFixed(2);
let areaInFeet = (areaInMeters * 10.7639).toFixed(2);
console.log(`The area of the room is ${areaInMeters} square meters (${areaInFeet} square feet).`)

//ex5 - Tip Calculator

let bill = parseInt(rlSync.question('What is the bill? '));
let tipPct = parseInt(rlSync.question('What is the tip percentage? '));
let tip = bill * tipPct / 100;

console.log(`The tip is $${tip.toFixed(2)}`)
console.log(`The total is $${(tip + bill).toFixed(2)}`)


//ex6 - Sum or Product of Consecutive Integers

let num = parseInt(rlSync.question('Please enter an integer greater than 0: '));
let method = rlSync.question('Enter "s" to compute the sum, or "p" to compute the product. ');

const sumAll = (n) => (n === 1) ? 1 : n + sumAll(n - 1);
const prodAll = (n) => (n === 1) ? 1 : n * prodAll(n - 1);
if (method === 's') {
  console.log(`The sum of the integers between 1 and ${num} is ${sumAll(num)}.`);
} else {
  console.log(`The product of the integers between 1 and ${num} is ${prodAll(num)}.`);
}


//ex7 - Short Long Short

function shortLongShort(str1, str2) {
  return (str2.length < str1.length) ? `${str2}${str1}${str2}` : `${str1}${str2}${str1}`;
}

console.log(shortLongShort('abc', 'defgh'));
console.log(shortLongShort('abcde', 'fgh'));
console.log(shortLongShort('', 'xyz'));

//ex8 + 9 - Leap Years

function isLeapYear(yr) {
  if (yr > 1752) {
    return (yr % 400 === 0) || ((yr % 4 === 0) && (yr % 100 !== 0));
  } else {
    return yr % 4 === 0;
  }
}

console.log(isLeapYear(2016)); 
console.log(isLeapYear(2015));  
console.log(isLeapYear(2100));  
console.log(isLeapYear(2400)); 
console.log(isLeapYear(240000));
console.log(isLeapYear(240001));
console.log(isLeapYear(2000)); 
console.log(isLeapYear(1900));  
console.log(isLeapYear(1752)); 
console.log(isLeapYear(1700));  
console.log(isLeapYear(1));   
console.log(isLeapYear(100));   
console.log(isLeapYear(400));

//ex10 - Multiples of 3 and 5

function multisum(n) {
  if (n === 1) return 0;
  return ((n % 3 === 0) || (n % 5 === 0)) ? n + multisum(n - 1) : multisum(n - 1);
}

console.log(multisum(3));       // 3
console.log(multisum(5));       // 8
console.log(multisum(10));      // 33
console.log(multisum(1000));    // 234168

//ex11 - UTF-16 String Value

function utf16Value(str) {
  return str.split('')
            .map(char => char.charCodeAt(0))
            .reduce((acc, ele) => acc + ele, 0);
}

console.log(utf16Value('Four score'));         // 984
console.log(utf16Value('Launch School'));      // 1251
console.log(utf16Value('a'));                  // 97
console.log(utf16Value(''));                   // 0

// The next three lines demonstrate that the code
// works with non-ASCII characters from the UTF-16
// character set.
const OMEGA = "\u03A9";             // UTF-16 character 'Ω' (omega)
console.log(utf16Value(OMEGA));                  // 937
console.log(utf16Value(OMEGA + OMEGA + OMEGA));  // 2811