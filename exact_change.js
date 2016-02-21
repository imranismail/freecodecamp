// jshint esversion:6
class Drawer {
  constructor(cid) {
    this.total = 0;
    cid.forEach(denom => {
      this[denom[0]] = denom[1];
      this.total += denom[1];
    });
  }

  withdraw(denom) {
    this[denom.name] -= denom.val;
    return denom.val;
  }
}

function drawer(price, cash, cid) {
  var change   = cash - price;
  const drawer = new Drawer(cid);

  if (drawer.total < change) return "Insufficient Funds";
  if (drawer.total === change) return "Closed";

  const denoms = [
    { name: 'ONE HUNDRED', val: 100.00},
    { name: 'TWENTY', val: 20.00},
    { name: 'TEN', val: 10.00},
    { name: 'FIVE', val: 5.00},
    { name: 'ONE', val: 1.00},
    { name: 'QUARTER', val: 0.25},
    { name: 'DIME', val: 0.10},
    { name: 'NICKEL', val: 0.05},
    { name: 'PENNY', val: 0.01}
  ];

  const arrOfChange = denoms.reduce((acc, denom) => {
    var value = 0;

    while (drawer[denom.name] > 0 && change >= denom.val) {
      change -= drawer.withdraw(denom).toFixed(2);
      value  += denom.val;
    }

    if (value > 0) acc.push([denom.name, value]);

    return acc;
  }, []);

  if (arrOfChange.length < 1 || change > 0) {
    return "Insufficient Funds";
  }

  return arrOfChange;
}

drawer(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]);
