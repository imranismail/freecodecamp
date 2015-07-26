function truncate(str, num) {
  if (str.length > num) {
    str = str.slice(0, num - 3) + "...";
  }

  console.log(str);
  return str;
}

truncate('A-tisket a-tasket A green and yellow basket', 11);
