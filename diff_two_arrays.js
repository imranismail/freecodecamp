/**
 * Compare two arrays and return a new array with any items not found in both of the original arrays.
 * @param  {Array} a array A
 * @param  {Array} b array A
 * @return {Array}   unique elements between the two arrays
 */
function diff(a, b) {
  "use strict";
  return a.filter(function(e) {
    return b.indexOf(e) === -1;
  }).concat(b.filter(function(e) {
    return a.indexOf(e) === -1;
  }));
}

diff([1, 2, 3, 5], [1, 2, 3, 4, 5]);
