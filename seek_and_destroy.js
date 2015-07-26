/**
 * @param  {Array}
 * @return {Array}
 */
function destroyer(arr) {
  var args = Array.prototype.slice.call(arguments, 1);
  var result = arr.filter(function(val) {
    return args.every(function(arg) {
      if (val !== arg) return true;
    });
  });

  console.log(result);
  return result;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
