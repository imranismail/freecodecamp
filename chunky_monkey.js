/**
 * @param  {Array}
 * @param  {Number}
 * @return {Array}
 */
function chunk(arr, size) {
  "use strict";

  var result = [];

  while (arr.length > 0) {
    result.push(arr.splice(0, size));
  }

  console.log(result);
  return result;
}

chunk(['a', 'b', 'c', 'd'], 2);
