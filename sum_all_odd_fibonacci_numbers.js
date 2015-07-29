/**
 * Return the sum of all odd Fibonacci numbers up to and including the passed number if it is a Fibonacci number.
 * @param  {Number} maxNum the maximum number to be summed
 * @return {Number}        the sum
 */
function sumFibs(maxNum) {
  "use strict";
  var
    fibNum = [0, 1],
    fibSum = fibNum[0];

  for (var i = fibNum.length; fibNum[fibNum.length - 1] <= maxNum; i++)
  {
    if (fibNum[fibNum.length - 1] & 1) {
      fibSum += fibNum[fibNum.length - 1];
    }
    fibNum[i] = fibNum[i - 1] + fibNum[i - 2];
  }

  return fibSum;
}

sumFibs(99999999);
