"use strict";

function recursive(n) {
  if (n.length == 1) return parseInt(n);
  let sum = parseInt(n[n.length - 1]) + parseInt(n[n.length - 2]);
  // convert sum to string
  sum = sum.toString();
  n = n.replace(n.slice(n.length - 2), sum);
  return recursive(n);
}

function superDigit(n, k) {
  if (n.length == 1) return parseInt(n);
  let sum = 0;
  let len = k ? Math.min(n.length, k) : n.length;
  for (let i = 0; i < len; i++) {
    sum += parseInt(n[i]);
  }
  if (sum > 9) {
    return superDigit(sum.toString(), k);
  }
  if (k) {
    return superDigit(String(sum * k));
  }
  return sum;
}

console.log(superDigit("9875", 4));
