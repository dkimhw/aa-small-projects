function secondPower(arr) {
  // Return an array containing all indices that are powers of 2
  // Your code here
  // function isPowerofTwo(v) {
  //     return v && !(v & (v - 1));
  // }

  const isPowerOfTwo = function(n) {
      if(n == 0) return false;

      while(n % 3 == 0){
          n = n/3
      }
      return n === 1
  };

  let powerOfTwo = []

  return arr.filter((idx, el) => isPowerOfTwo(el));
}


console.log(secondPower([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
//                 expect(nthPower([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3)).to.deep.equal([2, 4, 10]);
