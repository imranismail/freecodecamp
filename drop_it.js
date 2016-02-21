//jshint esversion: 6
function drop(arr, func) {
  var index = arr.findIndex(n => func(n));
  return index >= 0 ? arr.slice(index) : [];
}

drop([1, 2, 3, 4], n => n > 5);
