/**
 * Find the missing letter in the passed letter range and return it.
 * @param  {String} str The string range to be tested
 * @return {String}     The missing letter to be returned
 */
function fearNotLetter(str) {
  "use strict";
  var
    result,
    prevCharcode,
    expectedPrevCharcode;

  for (var i = 1; i < str.length; i++) {
    prevCharcode = str.charCodeAt(i) - 1;
    expectedPrevCharcode = str.charCodeAt(i - 1);

    if (prevCharcode !== expectedPrevCharcode) {
      result = String.fromCharCode(str.charCodeAt(i) - 1);
    }
  }

  console.log(result);
  return result;
}

fearNotLetter("abce");
