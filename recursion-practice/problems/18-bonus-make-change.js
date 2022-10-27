/***********************************************************************
Write a recursive function that will find the best way to make change from a
given set of coin values for a given amount of money. The set of coin values
should default to using pennies (1 cent), nickels (5 cents), dimes (10 cents),
and quarters (25 cents). Return `null` if there are no possible ways to make
change for the given target amount.

Examples:

makeChange(21); // [1, 10, 10]
makeChange(75); // [25, 25, 25]
makeChange(33, [15, 3]); // [3, 15, 15]
makeChange(34, [15, 3]); // null
makeChange(24, [10, 7, 1]) // [7, 7, 10]

Here's a game plan for solving the problem:

First, write a 'greedy' version called `greedyMakeChange`:

Take as many of the biggest coin as possible and add them to your result.
Add to the result by recursively calling your method on the remaining amount,
leaving out the biggest coin, until the remainder is zero.
Once you have a working greedy version, talk with your partner about refactoring
this to `makeBetterChange`. What's wrong with `greedyMakeChange`?

Consider the case of `greedyMakeChange(24, [10,7,1])`. Because it takes as many
10 pieces as possible, `greedyMakeChange` misses the correct answer of
`[10,7,7]` (try it in node).

To `makeBetterChange`, we only take one coin at a time and never rule out
denominations that we've already used. This allows each coin to be available
each time we get a new remainder. By iterating over the denominations and
continuing to search for the best change, we assure that we test for
'non-greedy' uses of each denomination.

Discuss the following game plan and then work together to implement your
new method:

- Iterate over each coin.
- Grab only one of that one coin and recursively call `makeBetterChange` on the
  remainder using coins less than or equal to the current coin.
- Add the single coin to the change returned by the recursive call. This will be
  a possible solution, but maybe not the best one.
- Keep track of the best solution and return it at the end.

N.B. Don't generate every possible permutation of coins and then compare them.
Remember that a permutation is not the same thing as a combination - we will
need to check every combination of coins that add up to our target, we just
don't want to check the same combination in different orders. If you get stuck
you can start by writing a solution that calculates and compares all of the
permutations without storing them in an array. Then go back and refactor your
solution so that it only calculates and compares all of the different
combinations.
***********************************************************************/

/*

Take as many of the biggest coin as possible and add them to your result.
Add to the result by recursively calling your method on the remaining amount,
leaving out the biggest coin, until the remainder is zero.
Once you have a working greedy version, talk with your partner about refactoring
this to `makeBetterChange`. What's wrong with `greedyMakeChange`?

Consider the case of `greedyMakeChange(24, [10,7,1])`. Because it takes as many
10 pieces as possible, `greedyMakeChange` misses the correct answer of
`[10,7,7]` (try it in node).

makeChange(75); // [25, 25, 25]

*/
function greedyMakeChange(target, coins = [25, 10, 5, 1]) {
  // no tests for greedyMakeChange so make sure to test this on your own
  // your code here
  let results = 0
  let coins_used = []
  for (let idx = 0; idx < coins.length; idx++) {
    while (results + coins[idx] <= target) {
      coins_used.push(coins[idx]);
      results += coins[idx]
    }
  }

  return coins_used
}

let g = greedyMakeChange(75); // [25, 25, 25]
console.log(g);

let g2 = greedyMakeChange(24, [10, 7, 1]);
console.log(g2);

function makeBetterChange(target, coins = [25, 10, 5, 1]) {
  // your code here
  let minCoinsDP = [];
  let minCoinListDP = [];
  for (let idx = 0; idx <= target; idx++) {
    minCoinsDP[idx] = target + 1;
    minCoinListDP.push([])
  }

  minCoinsDP[0] = 0;

  for (let idx = 1; idx <= target; idx++) {
    for (let jdx = 0; jdx < coins.length; jdx++) {
      let curr_coin = coins[jdx];
      let remainder = idx - curr_coin;
      let curr_list_of_coins = [curr_coin];
      if (curr_coin <= idx) {
        minCoinsDP[idx] = Math.min(minCoinsDP[remainder] + 1, minCoinsDP[idx]);
        if (minCoinsDP[remainder] + 1 <= minCoinsDP[idx]) {
          curr_list_of_coins = minCoinListDP[remainder].concat(curr_list_of_coins);
          minCoinListDP[idx] = curr_list_of_coins;
        }
      }
    }
  }

  // console.log(minCoinsDP[target]);
  // console.log(minCoinsDP);
  //console.log(minCoinListDP);
  return minCoinListDP[target].length === 0 ? null : minCoinListDP[target];
}

makeBetterChange(21); // [1, 10, 10]
console.log(makeBetterChange(34, [15, 3])); // null
// makeBetterChange(75); // [25, 25, 25]
// makeBetterChange(33, [15, 3]); // [3, 15, 15]
// makeBetterChange(34, [15, 3]); // null
// makeBetterChange(24, [10, 7, 1]) // [7, 7, 10]

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = makeBetterChange
} catch (e) {
  module.exports = null;
}
