/*
PE
Want to take an array of numbers, return array with running totals
argument: array of numbers, return: array of numbers
empty array returns empty array

D
return array suffices
variable to keep track of running total

A
array parameter called arr
initialize totalSoFar to 0
initialize totalArray to empty
for each element in arr:
  element added to totalSoFar
  totalSoFar pushed to totalArray
return totalArray
*/

function runningTotal(arr) {
  let totalSoFar = 0;
  let totalArray = [];
  arr.forEach(ele => {
    totalSoFar += ele;
    totalArray.push(totalSoFar);
  });
  return totalArray;
}

console.log(runningTotal([2, 5, 13]));             // [2, 7, 20]
console.log(runningTotal([14, 11, 7, 15, 20]));    // [14, 25, 32, 47, 67]
console.log(runningTotal([3]));                    // [3]
console.log(runningTotal([]));                     // []