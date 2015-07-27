/**
 * Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.
 * @param  {Array} arr1
 * @param  {Array} arr2
 * @param  {[Array*]} arr3
 * @return {Array}      unique numbers sorted by their original order.
 */
function unite(arr1, arr2, arr3) {
  "use strict";
  return Array.prototype.slice.call(arguments).reduce(function(currentArray, nextArray) {
    return currentArray.concat( nextArray.filter(function(item) {
        return (currentArray.indexOf(item) === -1);
    }));
  }, []);
}

unite([1, 3, 2], [1, [5]], [2, [4]]);



/**
 * Alternative solution
 * @param  {Array} arr1
 * @param  {Array} arr2
 * @param  {[Array*]} arr3
 * @return {Array}      unique numbers sorted by their original order.
 */
function unite(arr1, arr2, arr3) {
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
