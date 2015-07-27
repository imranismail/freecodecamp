/**
 * Compare two arrays and return a new array with any items not found in both of the original arrays.
 * @param  {Array} a array A
 * @param  {Array} b array A
 * @return {Array}   unique elements between the two arrays
 */
function diff(a, b) {
  "use strict";
  return a.filter(function(e) {
    return b.indexOf(e) === -1;
  }).concat(b.filter(function(e) {
    return a.indexOf(e) === -1;
  }));
}

diff([1, 2, 3, 5], [1, 2, 3, 4, 5]);


/**
 * Alternative solution
 * @param  {Array} a array A
 * @param  {Array} b array A
 * @return {Array}   unique elements between the two arrays
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
        value: element,
        unique: true
      };
    } else {
      lookupList[element] = {
        value: element,
        unique: false
      };
    }
  });

  for (var item in lookupList) {
    if (lookupList[item].unique) {
      result.push(lookupList[item].value);
    }
  }

  console.log(result);
  return result;
}

diff([1, 2, 3, 5], [1, 2, 3, 4, 5]);
