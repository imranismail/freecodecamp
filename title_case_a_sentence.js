/**
 * @param  {String}
 * @return {String}
 */
function titleCase(str) {
  "use strict";

  str = str.replace(/\w\S*/g, function(txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });

  console.log(str);
  return str;
}

titleCase("I'm a little tea pot");
