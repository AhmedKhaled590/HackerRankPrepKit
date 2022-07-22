"use strict";

/*
 * Complete the 'pylons' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER k
 *  2. INTEGER_ARRAY arr
 */

function countOnes(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 1) {
      count++;
    }
  }
  return count;
}

function pylons(k, arr) {
  // Write your code here
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 1) {
      for (let j = i + 1; j < i + k; j++) {
        arr[j] = 0;
      }
    }
    res.push(arr[i]);
  }
  console.log(arr);
  let count = countOnes(arr);

  for (let i = 0; i < arr.length; i++) {
    for (let j = i - k + 1; j < i && j >= 0; j++) {
      if (arr[j] == 1) {
        res[i] = 1;
        break;
      }
    }
    for (let j = i; j < i + k && j < arr.length; j++) {
      if (arr[j] == 1) {
        res[i] = 1;
        break;
      }
    }
  }
  console.log(res);
  return res.includes(0) ? -1 : count;
}
console.log(pylons(2, [0, 1, 1, 1, 1, 0]));
