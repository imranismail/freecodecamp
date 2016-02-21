//jshint esversion: 6
function permAlone(str) {
  const regex        = /(.)\1+/g;
  const permutations = [];

  const swap = (arr, a, b) => {
    var temp = arr[a];
    arr[a]   = arr[b];
    arr[b]   = temp;
  };

  const generate = (last, items, process) => {
    if (last === 1) process(items);
    else {
      for (var i = 0; i != last; i++) {
        generate(last - 1, items, process);
        swap(items, last % 2 ? 0 : i, last - 1);
      }
    }
  };

  generate(str.length, [...str], (arr) => permutations.push(arr.join('')));

  return permutations
    .filter(perm => !perm.match(regex))
    .length;
}

permAlone('aab');
