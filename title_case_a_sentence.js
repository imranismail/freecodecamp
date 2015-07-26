/**
 * @param  {String}
 * @return {String}
 */
function titleCase(str) {
  "use strict";

  str = str.replace(/\w\S*/g, function(txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });

  return str;
}

module.exports.titleCase = titleCase;
