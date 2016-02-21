//jshint esversion: 6
function inventory(curInv, newInv) {
  var inv = new Map();

  [...curInv, ...newInv].forEach(item => {
     if(inv.has(item[1]))
       inv.set(item[1], inv.get(item[1]) + item[0]);
     else
       inv.set(item[1], item[0]);
  });

  return [...inv]
    .map(item => [item[1], item[0]])
    .sort((a, b) => a[1] > b[1] ? 1 : -1);
}
