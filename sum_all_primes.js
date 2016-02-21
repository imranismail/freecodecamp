function sumPrimes(num) {
  var sieve = [];
  var sum = 0;

  for (var i = 2; i <= num; ++i) {
    if (!sieve[i]) {
      sum += i;
      for (var j = Math.pow(i, 2); j <= num; j += i) {
        sieve[j] = true;
      }
    }
  }

  return sum;
}

sumPrimes(10);
