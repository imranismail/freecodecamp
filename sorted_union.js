/**
 * Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.
 * @param  {Array} arr1
 * @param  {Array} arr2
 * @param  {[Array*]} arr3
 * @return {Array}      unique numbers sorted by their original order.
 */
function unite(arr1, arr2, arr3) {
  "use strict";
  var
    result = [],
    lookupTable = {},
    args = [].concat.apply([], Array.prototype.slice.call(arguments));

  for (var i = 0, id = 0; i < args.length; i++) {
    if (lookupTable[args[i]] === undefined) {
      lookupTable[id++] = {
        value: args[i]
      };
    }
  }

  for (var key in lookupTable) {
    result.push(lookupTable[key].value);
  }

  return result;
}

unite([1, 3, 2], [1, [5]], [2, [4]]);
