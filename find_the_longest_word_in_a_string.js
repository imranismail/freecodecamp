/**
 * @param  {String}
 * @return {Number}
 */
function findLongestWord(str) {
  "use strict";

  var words = str.split(" ");
  var longWord = "";

  words.forEach(function(word) {
    if (word.length > longWord.length) {
      longWord = word;
    }
  });

  console.log(longWord);
  return longWord.length;
}

findLongestWord("The quick brown fox jumped over the lazy dog");
