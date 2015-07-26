/**
 * @param  {Number}
 * @return {Number}
 */
function factorialize(num) {
  if (num === 0) {
    return 1;
  }

  if (num < 0) {
    return undefined;
  }

  for (var i = num; --i;) {
    num *= i;
  }

  console.log(num);
  return num;
}

factorialize(5);
