/**
 * @param  {Array}
 * @param  {Number}
 * @return {Number}
 */
function where(arr, num) {
  "use strict";
  var result;

  arr.sort();
  for (var i = 0; i < arr.length; i++) {
    if (num > arr[i] && num < arr[i + 1]) {
      result = i + 1;
      break;
    }
    if (num === arr[i]) {
      result = i;
      break;
    }
  }

  return result;
}

where([60, 40], 50);
