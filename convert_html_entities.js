/**
 * Escape html to it's equivalent html entities
 * @param  {String} str The html to be escaped
 * @return {String}     The escaped html
 */
function convert(str) {
  "use strict";

  var htmlEntities = {
    "\"": "&quot;",
    "'": "&apos;",
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;"
  };

  return str.replace(new RegExp("([" + Object.keys(htmlEntities).join("") + "])", "gi"), function(match, p1) {
    return htmlEntities[p1];
  });
}

convert("Stuff in \"quotation marks\"");
