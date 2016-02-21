//jshint esversion: 6
function sym() {
  const diff = (A, B) => new Set([...A].filter(n => !B.has(n)));
  const result = [...arguments]
    .map(arr => new Set(arr))
    .reduce((acc, set) => new Set([...diff(acc, set), ...diff(set, acc)]));

  return [...result];
}

sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]);
