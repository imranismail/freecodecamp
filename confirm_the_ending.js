/**
 * @param  {String}
 * @param  {String}
 * @return {Boolean}
 */
function end(str, target) {
  var result = str.substr(str.length - target.length) === target

  console.log(result);
  return result;
}

end('Bastian', 'n');