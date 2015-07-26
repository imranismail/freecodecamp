/**
 * @param  {Array}
 * @param  {Number}
 * @return {Array}
 */
function chunk(arr, size) {
  var arrB = [];
  while (arr.length > 0) {
    arrB.push(arr.splice(0, size));
  }

  console.log(arrB);
  return arrB;
}

chunk(['a', 'b', 'c', 'd'], 2);
