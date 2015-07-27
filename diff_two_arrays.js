/**
 * @param  {Array}
 * @param  {Array}
 * @return {Array}
 */
function diff(arr1, arr2) {
  "use strict";

  var
    lookupList = {},
    result = [],
    jointArray = arr1.concat(arr2);

  jointArray.forEach(function(element) {
    if (lookupList[element] === undefined) {
      lookupList[element] = {
        unique: true
      };
    } else {
      lookupList[element] = {
        unique: false
      };
    }
  });

  for (var item in lookupList) {
    if (lookupList[item].unique) {
      result.push(item);
    }
  }

  return result;
}

diff([1, 2, 3, 5], [1, 2, 3, 4, 5]);
