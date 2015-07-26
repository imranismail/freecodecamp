/**
 * @param  {Array}
 * @param  {Number}
 * @return {Array}
 */
function slasher(arr, howMany) {
  arr.splice(0, howMany);

  console.log(arr);
  return arr;
}
slasher([1, 2, 3], 2);
