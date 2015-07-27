/**
 * @param  {String}
 * @return {String}
 */
function titleCase(str) {
  "use strict";
  return str.replace(/\w\S*/g, function(txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}

module.exports.titleCase = titleCase;
