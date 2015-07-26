/**
 * @param  {Array}
 * @return {Array}
 */
function destroyer(arr) {
  "use strict";

  var args = Array.prototype.slice.call(arguments, 1);
  var result = arr.filter(function(val) {
    return args.every(function(arg) {
      return val !== arg;
    });
  });

  console.log(result);
  return result;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
