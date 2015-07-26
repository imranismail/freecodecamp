/**
 * @param  {String}
 * @return {Boolean}
 */
function palindrome(str) {
  "use strict";
  str = str.replace(/[^\w]/g, "").toLowerCase();
  var revStr = str.split("").reverse().join("");

  console.log(revStr);
  return revStr === str;
}

palindrome("eye");
