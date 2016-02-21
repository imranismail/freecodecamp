//jshint esversion: 6
function steamroller(arr) {
  return arr.reduce((flat, toFlatten) =>
    flat.concat(Array.isArray(toFlatten) ? steamroller(toFlatten) : toFlatten),
  []);
}
