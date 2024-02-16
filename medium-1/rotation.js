/*
Part 1
PE
Want to create a new array with the first element rotated to the end.
argument: array, return: new array
If arg not an array, return undefined
empty array returns empty array

algo
if arg is array:
  return rest of array with first element at end
*/

// eslint-disable-next-line consistent-return
function rotateArray(arr) {
  if (Array.isArray(arr)) {
    if (!arr.length) return arr;
    return arr.slice(1).concat(arr[0]);
  }
}

/*
Part 2
PE
Want to take the input number and count argument, rotate a substring of the
last [count] digits so that the first character goes to end and the remaining
digits are shifted to the left.

D
will want to convert these numbers into array

A (using prior rotateArray as helper)
get array of digits from input number
get rightmost [count] digits as subarray
call rotateArray helper on subarray
combine back into main array
convert main array back into a number and return
*/

function rotateRightmostDigits(num, count) {
  let digitArr = String(num).split('');
  let rightmostDigits = digitArr.slice(digitArr.length - count);
  let newRightDigits = rotateArray(rightmostDigits);
  let leftDigits = digitArr.slice(0, digitArr.length - count);
  return Number(leftDigits.concat(newRightDigits).join(''));
}

/*
PE
First, rotate all digits one to left. Then, keep leftmost digit fixed and
rotate the rest one to left. Then, fix second digit... continue this way until
all possible rotations have been made
Argument: number, returns: number
Can assume all inputs are positive integers

algo
Get number of digits of number
Create idx variable counting down from number of digits to 1, call
rotateRightmostDigits on number input and idx
*/

function maxRotation(num) {
  let numDigits = String(num).length;
  for (let idx = numDigits; idx > 1; idx--) {
    num = rotateRightmostDigits(num, idx);
  }
  return num;
}

console.log(maxRotation(735291));          // 321579
console.log(maxRotation(3));               // 3
console.log(maxRotation(35));              // 53
console.log(maxRotation(105));             // 15 -- the leading zero gets dropped
console.log(maxRotation(8703529146));      // 7321609845

/*
old console log tests (pt 2)
console.log(rotateRightmostDigits(735291, 1));      // 735291
console.log(rotateRightmostDigits(735291, 2));      // 735219
console.log(rotateRightmostDigits(735291, 3));      // 735912
console.log(rotateRightmostDigits(735291, 4));      // 732915
console.log(rotateRightmostDigits(735291, 5));      // 752913
console.log(rotateRightmostDigits(735291, 6));      // 352917
*/

/*
old console log tests
console.log(rotateArray([7, 3, 5, 2, 9, 1]));       // [3, 5, 2, 9, 1, 7]
console.log(rotateArray(['a', 'b', 'c']));          // ["b", "c", "a"]
console.log(rotateArray(['a']));                    // ["a"]
console.log(rotateArray([1, 'a', 3, 'c']));         // ["a", 3, "c", 1]
console.log(rotateArray([{ a: 2 }, [1, 2], 3]));    // [[1, 2], 3, { a: 2 }]
console.log(rotateArray([]));                       // []

// return `undefined` if the argument is not an array
console.log(rotateArray());                         // undefined
console.log(rotateArray(1));                        // undefined


// the input array is not mutated
let array = [1, 2, 3, 4];
console.log(rotateArray(array));                    // [2, 3, 4, 1]
console.log(array);                                 // [1, 2, 3, 4]
*/