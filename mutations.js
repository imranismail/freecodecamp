/**
 * @param  {Array}
 * @return {Number}
 */
function mutation(arr) {
  "use strict";

  var arrA = arr[0].toLowerCase().split("");
  var arrB = arr[1].toLowerCase().split("");
  var counter = 0;

  arrB.forEach(function(val) {
    if (arrA.indexOf(val) !== -1) {
      counter++;
    }
  });

  return arrB.length === counter;
}

mutation(["hello", "hey"]);
