/**
 * @param  {Array}
 * @return {Array}
 */
function destroyer(arr) {
  "use strict";

  var args = Array.prototype.slice.call(arguments, 1);
  return arr.filter(function(val) {
    return args.every(function(arg) {
      return val !== arg;
    });
  });
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
