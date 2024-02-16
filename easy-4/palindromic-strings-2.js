/*
PE
Want to determine whether a string is a palindrome, discounting
capitalization and all non-alphanumeric chars
argument: string, returns: true/false
note: punctuation/whitespace don't matter

DA
Want sanitized string that's all lowercase and only alphanumeric

algo:
compare sanitized string to reverse of sanitized string

helper method 1: reverse string (easy)

helper method 2: sanitize
argument: string, returns: string
algo:
constant string of all letters and numbers called alphanum
convert argument to lower case
filter string characters: only if alphanum contains each char
*/

function isRealPalindrome(str) {
  let sanitizedStr = sanitize(str);
  return sanitizedStr === reverse(sanitizedStr);
}

function sanitize(str) {
  const alphanum = 'abcdefghijklmnopqrstuvwxyz0123456789';
  let lowerStr = str.toLowerCase();
  return lowerStr.split('')
    .filter(char => alphanum.includes(char))
    .join('');
}

function reverse(str) {
  return str.split('').reverse().join('');
}

console.log(isRealPalindrome('Madam'));               // true (case does not matter)
console.log(isRealPalindrome('madam'));               // true
console.log(isRealPalindrome("Madam, I'm Adam"));     // true (only alphanumerics matter)
console.log(isRealPalindrome('356653'));              // true
console.log(isRealPalindrome('356a653'));             // true
console.log(isRealPalindrome('123ab321'));            // false