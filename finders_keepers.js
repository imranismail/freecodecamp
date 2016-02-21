function find(arr, func) {
  var result;

  for (var i = 0; i < arr.length; i++) {
    if (func(arr[i])) {
      result = arr[i];
      break;
    }
  }

  return result;
}

find([1, 2, 3, 4], function(num){ return num % 2 === 0; });
