/**
 * @param  {String}
 * @return {Number}
 */
function findLongestWord(str) {
  "use strict";
  return str.split(" ").reduce(function(longestSoFar, currentWord) {
    return currentWord.length > longestSoFar.length ? currentWord : longestSoFar;
  }, "").length;
}

findLongestWord("The quick brown fox jumped over the lazy dog");
