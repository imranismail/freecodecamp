/**
 * @param  {Array}
 * @return {Array}
 */
function bouncer(arr) {
  "use strict";
  return arr.filter(function(val) {
    return val;
  });
}

bouncer([7, "ate", "", false, 9]);
