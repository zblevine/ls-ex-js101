/*
PE
Want to replace all written-out number digits with their actual digit forms
Argument: string, return: string
No other necessary transformations
Determining word digit is case insensitive

D
Object to convert digit word keys to digit values

A
Map each word in string to:
  itself if it's not a number word
  corresponding digit if it is a number word

return mapped string
*/

function wordToDigit(str) {
  let digitObj = {
    zero: 0, one: 1, two: 2, three: 3, four: 4,
    five: 5, six: 6, seven: 7, eight: 8, nine: 9
  };

  let mapCallback = function(word) {
    let lastChar = word[word.length - 1];
    if ('!.?'.includes(lastChar)) {
      return String(mapCallback(word.slice(0, -1))).concat(lastChar);
    }

    if (digitObj.hasOwnProperty(word.toLowerCase())) {
      return digitObj[word.toLowerCase()];
    }

    return word;
  };

  return str.split(' ').map(mapCallback).join(' ');
}


console.log(wordToDigit('Please call me at five five five one two three four. Thanks.'));
// "Please call me at 5 5 5 1 2 3 4. Thanks."
console.log(wordToDigit('One more time, with feeling, five six seven eight!'));