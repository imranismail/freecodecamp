/**
 * @param  {String}
 * @param  {String}
 * @return {Boolean}
 */
function end(str, target) {
  "use strict";

  return str.substr(str.length - target.length) === target;
}

end("Bastian", "n");
