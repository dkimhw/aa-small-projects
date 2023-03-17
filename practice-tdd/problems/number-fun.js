function returnsThree() {
  // Your code here
  return 3;
}

function reciprocal(n) {
  // Your code here
  /*
  Your `reciprocal` function will now only intake arguments between `1` and `1000000`.
  If the given argument is less than `1` or greater than `1,000,000` then
    a `RangeError` will be thrown with a descriptive string message.
  */
  if (n < 1 || n > 1000000) {
    throw new RangeError();
  }

  return 1 / n;
}

module.exports = {
  returnsThree,
  reciprocal
};
