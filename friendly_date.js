//jshint esversion: 6
function friendly(range) {
  function FriendlyDate(date) {
    this.ymd = date.split("-").map(cur => parseInt(cur));
    this.year = this.ymd[0];
    this.month = this.ymd[1];
    this.day = this.ymd[2];

    const monthLookup = {
      1: "January",
      2: "February",
      3: "March",
      4: "April",
      5: "May",
      6: "June",
      7: "July",
      8: "August",
      9: "September",
      10: "October",
      11: "November",
      12: "December"
    };

    this.humanizedDay = () => {
      const regex1st = /^(\d+)?1$/;
      const regex2nd = /^(\d+)?2$/;
      const regex3rd = /^([^\D1]+)?3$/;

      if(regex1st.test(this.day))
        return `${this.day}st`;
      else if(regex2nd.test(this.day))
        return `${this.day}nd`;
      else if(regex3rd.test(this.day))
        return `${this.day}rd`;
      else
        return `${this.day}th`;
    };

    this.humanizedMonth = () => monthLookup[this.month];
  }

  const from  = new FriendlyDate(range[0]);
  const to    = new FriendlyDate(range[1]);
  const now   = new Date();

  if(from.year != to.year || from.year == to.year - 1 && from.month != to.month && from.day != to.day)
    range = [`${from.humanizedMonth()} ${from.humanizedDay()}, ${from.year}`, `${to.humanizedMonth()} ${to.humanizedDay()}, ${to.year}`];

  if(from.year == to.year || from.year == to.year - 1 && from.month == to.month && from.day != to.day)
    range = [`${from.humanizedMonth()} ${from.humanizedDay()}, ${from.year}`, `${to.humanizedMonth()} ${to.humanizedDay()}`];

  if(from.year == to.year && from.month == to.month && from.day == to.day)
    range = [`${from.humanizedMonth()} ${from.humanizedDay()}, ${from.year}`];

  if(from.year != to.year && from.year == to.year - 1 && from.month != to.month && from.day != to.day)
    range = [`${from.humanizedMonth()} ${from.humanizedDay()}`, `${to.humanizedMonth()} ${to.humanizedDay()}`];

  if(from.year == now.getUTCFullYear() && from.year == to.year && from.month == to.month && from.day != to.day)
    range = [`${from.humanizedMonth()} ${from.humanizedDay()}`, `${to.humanizedDay()}`];

  return range;
}

friendly(["2018-01-13", "2018-01-13"]);
