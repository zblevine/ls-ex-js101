/*
PE
Want to tell if an input string is the same forwards and backwards
argument: string, returns: true/false

algo
compare string to reverse of string
return whether or not they're equal

reverse helper method
*/

function isPalindrome(str) {
  return str === reverse(str);
}

function reverse(str) {
  return str.split('').reverse().join('');
}

console.log(isPalindrome('madam'));               // true
console.log(isPalindrome('Madam'));               // false (case matters)
console.log(isPalindrome("madam i'm adam"));      // false (all characters matter)
console.log(isPalindrome('356653'));              // true