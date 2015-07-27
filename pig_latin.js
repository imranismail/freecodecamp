/**
 * Translate the provided string to pig latin.
 * @param  {String} str use only letters
 * @return {String}     takes the first consonant or vowel of an English word, moves it to the end of the word and suffixes an "ay" or "way".
 */
function translate(str) {
  "use strict";
  var
    vRegex = /^([aeiouy])/im,
    cRegex = /^([^aeiouy]+)/im,
    vSuffix = "way",
    cSuffix = "ay",
    match,
    result;

  if (cRegex.test(str)) {
    match = str.match(cRegex);
    str = str.substring(match[0].length, str.length);
    result = str + match[0] + cSuffix;
  } else if (vRegex.test(str)) {
    result = str + vSuffix;
  }

  console.log(result);
  return result;
}

translate("glove");
