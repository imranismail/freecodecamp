/**
 * @param  {Array}
 * @return {Array}
 */
function bouncer(arr) {
  "use strict";

  var result = arr.filter(function(val) {
    if (val) {
      return val;
    }
  });

  console.log(result);
  return result;
}

bouncer([7, "ate", "", false, 9]);
