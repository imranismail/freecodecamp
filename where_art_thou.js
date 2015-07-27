/**
 * @param  {Collection}
 * @param  {Object}
 * @return {Collection}
 */
function where(collection, source) {
  "use strict";

  var keys = Object.keys(source);
  return collection.filter(function(obj) {
    return keys.some(function(key) {
      return obj[key] === source[key];
    });
  });
}

where([{
  first: "Romeo",
  last: "Montague"
}, {
  first: "Mercutio",
  last: null
}, {
  first: "Tybalt",
  last: "Capulet"
}], {
  first: "Romeo",
  last: "Capulet"
});
