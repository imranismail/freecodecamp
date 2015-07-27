var $ = require("./title_case_a_sentence");

/**
 * Perform a search and replace on the sentence using the arguments provided and return the new sentence.
 * @param  {String} str    Sentence to perform the search and replace on.
 * @param  {String} before Word that you will be replacing
 * @param  {String} after  What you will be replacing the second argument
 * @return {String}        The new sentence
 */
function replace(str, before, after) {
  "use strict";
  var searchTerm = new RegExp(before, "g");
  return str.replace(searchTerm, function(match) {
    var replacement = after;
    if (match[0] === match[0].toUpperCase()) {
      replacement = $.titleCase(after);
    }
    return replacement;
  });
}

replace("A quick brown fox Jumped over the lazy dog", "Jumped", "leaped");
