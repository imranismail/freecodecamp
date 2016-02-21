// jshint esversion:6
class Register {
  constructor(cid) {
    this.total = 0;
    this.change = 0;
    this.denoms = [
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

    cid.forEach(cash => {
      this.total += cash[1];
      this[cash[0]] = cash[1];
    });
  }

  getChange(amount) {
    if (this.total === amount) return "Closed";
    if (this.total < amount) return "Insufficient Funds";

    this.change = amount;

    const changes = this.denoms.reduce((acc, denom) => {
      var value = 0;

      while (this[denom.name] > 0 && this.change >= denom.val) {
        this.change      -= denom.val;
        this[denom.name] -= denom.val;
        value            += denom.val;
        this.change       = Math.round(this.change * 100) / 100;
      }

      if (value > 0) acc.push([denom.name, value]);

      return acc;
    }, []);

    return changes.length < 1 || this.change > 0 ? "Insufficient Funds" : changes;
  }
}

function drawer(price, cash, cid) {
  const register = new Register(cid);
  const change   = register.getChange(cash - price);

  return change;
}

drawer(19.50, 20.00, [["PENNY", 0.50], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);
