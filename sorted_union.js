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
