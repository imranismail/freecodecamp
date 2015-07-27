/**
 * Find the missing letter in the passed letter range and return it.
 * @param  {String} str The string range to be tested
 * @return {String}     The missing letter to be returned
 */
function fearNotLetter(str) {
  "use strict";
  var result;
  for (var i = 1; i < str.length; i++) {
    if (str.charCodeAt(i) - 1 !== str.charCodeAt(i - 1)) {
      result = String.fromCharCode(str.charCodeAt(i) - 1);
    }
  }

  console.log(result);
  return result;
}

fearNotLetter("abce");
