/**
 * @param  {Collection}
 * @param  {Object}
 * @return {Collection}
 */
function where(collection, source) {
  var keys = Object.keys(source);
  var result = collection.filter(function(obj) {
    return keys.some(function(key) {
      return obj[key] === source[key];
    });
  });

  console.log(result);
  return result;
}

where([{
  first: 'Romeo',
  last: 'Montague'
}, {
  first: 'Mercutio',
  last: null
}, {
  first: 'Tybalt',
  last: 'Capulet'
}], {
  first: 'Romeo',
  last: 'Capulet'
});
