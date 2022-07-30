"use strict";

/*
 * Complete the 'getWays' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. LONG_INTEGER_ARRAY c
 */

// solve with dynamic programming (top-down) recursion with memoization
function getWaysHelper(n, size, c, cache) {
  if (n === 0) return (cache[size][n] = 1);
  if (size === 0) return 0;

  if (cache[size][n] !== -1) {
    return cache[size][n];
  }
  if (c[size - 1] <= n) {
    return (cache[size][n] =
      getWaysHelper(n - c[size - 1], size, c, cache) +
      getWaysHelper(n, size - 1, c, cache));
  } else {
    return (cache[size][n] = getWaysHelper(n, size - 1, c, cache));
  }
}
function getWays(n, c) {
  // memoization array
  let cache = new Array(c.length + 1)
    .fill()
    .map(() => new Array(n + 1).fill(-1));
  return getWaysHelper(n, c.length, c, cache);
}

// function getWays(n, c) {
//   if (c.length === 0) return 0;
//   if (n < 0) return 0;
//   if (n === 0) return 1;
//   return getWays(n, c.slice(1)) + getWays(n - c[0], c);
// }

function getWaysBottomUp(n, c) {
  let cache = new Array(n + 1).fill(0);
  cache[0] = 1;
  for (let i = 0; i < c.length; i++) {
    for (let j = c[i]; j <= n; j++) {
      cache[j] += cache[j - c[i]];
    }
  }
  return cache[n];
}
let ans1 = getWaysBottomUp(5, [1, 2, 5]);
let ans2 = getWays(5, [1, 2, 5]);
// assert ans1 === ans2;
console.log(ans1, ans2, ans1 === ans2);
