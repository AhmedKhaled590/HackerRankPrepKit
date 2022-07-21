"use strict";

/*
 * Complete the 'balancedSums' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function balancedSums(arr) {
  // Write your code here
  if (arr.length === 1) return "YES";
  let sum = [0];
  for (let i = 0; i < arr.length; i++) {
    sum.push(sum[i] + arr[i]);
  }
  for (let i = 1; i < arr.length; i++) {
    if (sum[sum.length - 1] - sum[i] === sum[i - 1]) {
      return "YES";
    }
  }
  return "NO";
}

console.log(balancedSums([5, 6, 8, 11]));
