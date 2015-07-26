/**
 * @param  {Array}
 * @return {Number}
 */
function mutation(arr) {
  var arrA = arr[0].toLowerCase().split('');
  var arrB = arr[1].toLowerCase().split('');
  var counter = 0;

  arrB.forEach(function(val) {
    if (arrA.indexOf(val) != -1) {
      counter++;
    }
  });

  var result = arrB.length === counter;

  console.log(result);
  return result;
}

mutation(['hello', 'hey']);
