"use strict";

/*
 * Complete the 'equalStacks' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY h1
 *  2. INTEGER_ARRAY h2
 *  3. INTEGER_ARRAY h3
 */

function equalStacks(h1, h2, h3) {
  // Write your code here
  let sum1 = h1.reduce((a, b) => a + b, 0);
  let sum2 = h2.reduce((a, b) => a + b, 0);
  let sum3 = h3.reduce((a, b) => a + b, 0);
  h1.reverse();
  h2.reverse();
  h3.reverse();
  let minSum = Math.min(sum1, sum2, sum3);
  while (sum1 > minSum || sum2 > minSum || sum3 > minSum) {
    if (sum1 > minSum) {
      sum1 -= h1.pop();
    }
    if (sum2 > minSum) {
      sum2 -= h2.pop();
    }
    if (sum3 > minSum) {
      sum3 -= h3.pop();
    }
    minSum = Math.min(sum1, sum2, sum3);
  }
  return minSum;
}
console.log(equalStacks([3, 2, 1, 1, 1], [4, 3, 2], [1, 1, 4]));
