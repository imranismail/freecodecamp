/**
 * @param  {String}
 * @param  {Number}
 * @return {String}
 */
function repeat(str, num) {
  var result = "";
  if (num < 0) {
    return result;
  } else {
    for (i = 0; i < num; i++) {
      result += str;
    }
  }

  console.log(result);
  return result;
}

repeat('abc', 3);
