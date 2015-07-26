/**
 * @param  {String}
 * @return {Array}
 */
function reverseString(str) {
  var arr = str.split('').reverse().join('');

  console.log(arr);
  return arr;
}

reverseString('hello');
