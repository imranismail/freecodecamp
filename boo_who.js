/**
 * Check if a value is classified as a boolean primitive. Return true or false.
 * @param  {Boolean} bool The boolean to check against
 * @return {Boolean}      True is primitive, false if not
 */
function boo(bool) {
  "use strict";
  var result = false;

  if (bool === true || bool === false) {
    result = true;
  }

  console.log(result);
  return result;
}

boo(null);
