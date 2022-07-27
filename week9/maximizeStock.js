"use strict";
/*
 * Complete the 'stockmax' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts INTEGER_ARRAY prices as parameter.
 */

function stockmax(prices) {
  let max = prices[prices.length - 1];
  let maxPrice = 0;
  for (let i = prices.length - 2; i >= 0; i--) {
    if (prices[i] > max) {
      max = prices[i];
    } else if (prices[i] < max) {
      maxPrice += max - prices[i];
    }
  }
  return maxPrice;
}

console.log(stockmax([5, 4, 3, 4, 5]));
