/**
 * @param  {String}
 * @return {Number}
 */
function findLongestWord(str) {
  var words = str.split(" ");
  var long_word = "";

  words.forEach(function(word) {
    if (word.length > long_word.length) {
      long_word = word;
    }
  });

  return long_word.length;
}

findLongestWord('The quick brown fox jumped over the lazy dog');
