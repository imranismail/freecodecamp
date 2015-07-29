/**
 * Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
 * @param  {String} str [description]
 * @return {String}     [description]
 */
function spinalCase(str) {
  "use strict";
  return str.replace(/[^\s][A-Z]|[_\s]/g, function(match) {
    return match.length < 2 ? "-" : match[0] + "-" + match[1];
  }).toLowerCase();
}

spinalCase("thisIsSpinalTap");
