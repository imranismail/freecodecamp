/**
 * @param  {String}
 * @param  {Number}
 * @return {String}
 */
function repeat(str, num) {
  "use strict";

  var result = "";

  if (num < 0) {
    return result;
  } else {
    for (var i = 0; i < num; i++) {
      result += str;
    }
  }

  return result;
}

repeat("abc", 3);
