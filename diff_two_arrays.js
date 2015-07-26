/**
 * @param  {Array}
 * @param  {Array}
 * @return {Array}
 */
function diff(arr1, arr2) {
  "use strict";

  var values = {};

  arr1.map(function(value) {
    values[value] = {
      id: value,
      unique: true
    };
  });

  arr2.map(function(value) {
    if (values[value] !== undefined) {
      values[value] = {
        id: value,
        unique: false
      };
    } else {
      values[value] = {
        id: value,
        unique: true
      };
    }
  });

  var result = [];

  for (var key in values) {
    if (values[key].unique) {
      result.push(values[key].id);
    }
  }

  console.log(result);
  return result;
}

diff([1, 2, 3, 5], [1, 2, 3, 4, 5]);
