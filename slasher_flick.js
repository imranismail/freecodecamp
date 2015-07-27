/**
 * @param  {Array}
 * @param  {Number}
 * @return {Array}
 */
function slasher(arr, howMany) {
  "use strict";

  arr.splice(0, howMany);
  return arr;
}
slasher([1, 2, 3], 2);
