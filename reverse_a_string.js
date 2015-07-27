/**
 * @param  {String}
 * @return {Array}
 */
function reverseString(str) {
  "use strict";
  return str.split("").reverse().join("");
}

reverseString("hello");
