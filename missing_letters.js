/**
 * Find the missing letter in the passed letter range and return it.
 * @param  {String} str The string range to be tested
 * @return {String}     The missing letter to be returned
 */
function fearNotLetter(str) {
  "use strict";
  var
    result,
    prevCharCode,
    expectedPrevCharCode;

  for (var i = 1; i < str.length; i++) {
    prevCharCode = str.charCodeAt(i) - 1;
    expectedPrevCharCode = str.charCodeAt(i - 1);

    if (prevCharCode !== expectedPrevCharCode) {
      result = String.fromCharCode(str.charCodeAt(i) - 1);
    }
  }

  console.log(result);
  return result;
}

fearNotLetter("abce");
