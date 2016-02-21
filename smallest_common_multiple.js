//jshint esversion: 6
function smallestCommons(arr) {
  var min, max, multiple;

  if(arr[0] > arr[1]) {
    min = arr[1];
    max = arr[0];
  } else {
    min = arr[0];
    max = arr[1];
  }

  const range = (min, max) => {
    var arr = [];
    for (var i = min; i <= max; i++) {
      arr.push(i);
    }
    return arr;
  };

  const gcd = (a, b) => {
    if (!b) {
      return a;
    }
    return gcd(b, a % b);
  };

  const lcm = (a, b) => (a * b) / gcd(a, b);

  multiple = min;

  range(min, max).forEach((n) => multiple = lcm(n, multiple));

  return multiple;
}

smallestCommons([1, 5]);
