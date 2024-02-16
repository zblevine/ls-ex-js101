/*
PE
Want to get object from string with percentage frequencies of
uppercase char, lowercase char, and neither.
argument: string, return: object
Percentages to two decimals, as strings

D
object we're eventually returning
constants for lowercase, uppercase

A
constant all lowercase uppercase letters
initialize object with:
  keys lowercase, uppercase, neither, values all 0
for each character in input string:
  lowercase +1 if lowercase, uppercase +1 if uppercase, neither if neither
convert object values to percentages
*/

function letterPercentages(str) {
  const lowers = 'abcdefghijklmnopqrstuvwxyz';
  const uppers = lowers.toUpperCase();
  const pctObj = {lowercase: 0, uppercase: 0, neither: 0};
  str.split('').forEach(char => {
    if (lowers.includes(char)) {
      pctObj.lowercase++;
    } else if (uppers.includes(char)) {
      pctObj.uppercase++;
    } else {
      pctObj.neither++;
    }
  });

  Object.keys(pctObj).forEach(key => {
    pctObj[key] = (100 * pctObj[key] / str.length).toFixed(2);
  });

  return pctObj;
}

console.log(letterPercentages('abCdef 123'));
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

console.log(letterPercentages('AbCd +Ef'));
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

console.log(letterPercentages('123'));
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }