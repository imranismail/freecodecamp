function truncate(str, num) {
  "use strict";

  if (str.length > num) {
    str = str.slice(0, num - 3) + "...";
  }

  return str;
}

truncate("A-tisket a-tasket A green and yellow basket", 11);
