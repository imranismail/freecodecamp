/**
 * @param  {Array}
 * @return {Number}
 */
function sumAll(arr) {
  "use strict";

  var maxNum = Math.max(arr[0], arr[1]);
  var minNum = Math.min(arr[0], arr[1]);
  var sum = 0;

  for (var i = minNum; i <= maxNum; i++) {
    sum += i;
  }

  console.log(sum);
  return sum;
}

sumAll([1, 4]);
