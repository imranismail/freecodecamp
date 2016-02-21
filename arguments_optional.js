//jshint esversion: 6
function add() {
  var args = [...arguments];
  return args.some(n => typeof n !== 'number') ?
    undefined:
    args.length > 1 ?
      args.reduce((acc, n) => acc += n, 0):
      (n) => typeof n === "number" ?
        n + args[0]:
        undefined;
}

add(2,3);
