/**
 * @param  {String}
 * @return {Boolean}
 */
function palindrome(str) {
  str = str.replace(/[^\w]/g, '').toLowerCase();
  var rev_str = str.split('').reverse().join('');

  return rev_str === str;
}

palindrome("eye");
