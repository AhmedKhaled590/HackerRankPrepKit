"use strict";

const fs = require("fs");

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", function (inputStdin) {
  inputString += inputStdin;
});

process.stdin.on("end", function () {
  inputString = inputString.split("\n");

  main();
});

function readLine() {
  return inputString[currentLine++];
}

/*
 * Complete the 'sockMerchant' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER_ARRAY ar
 */

function sockMerchant(n, ar) {
  /*Sol1:

  let map = new Map();
  let pairs = 0;
  for (let i = 0; i < n; i++) {
    if (map.get(ar[i]) != undefined && map.get(ar[i]) != 0) {
      pairs++;
      map.set(ar[i], 0);
    } else {
      map.set(ar[i], 1);
    }
  }
  return pairs;

  */
  /*Sol2*/
  let stack = [];
  let pairs = 0;
  ar.sort((a, b) => a - b);
  for (let i = 0; i < n; i++) {
    if (stack[stack.length - 1] == ar[i]) {
      stack.pop();
      pairs++;
    } else {
      stack.push(ar[i]);
    }
  }
  return (n - stack.length) / 2;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const n = parseInt(readLine().trim(), 10);

  const ar = readLine()
    .replace(/\s+$/g, "")
    .split(" ")
    .map((arTemp) => parseInt(arTemp, 10));

  const result = sockMerchant(n, ar);

  ws.write(result + "\n");

  ws.end();
}
