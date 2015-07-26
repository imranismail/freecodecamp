/**
 * @param  {Array}
 * @param  {Array}
 * @return {Array}
 */
function diff(a, b) {
  var result = a.filter(function(e) {
    return b.indexOf(e) === -1;
  }).concat(b.filter(function(e) {
    return a.indexOf(e) === -1;
  }));

  console.log(result);
  return result;
}

diff([1, 2, 3, 5], [1, 2, 3, 4, 5]);
