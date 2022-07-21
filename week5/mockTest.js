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
 * Complete the 'fibonacciModified' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER t1
 *  2. INTEGER t2
 *  3. INTEGER n
 */

function fibonacciModified(t1, t2, n) {
  // Write your code here
  let fib = [t1, t2];
  for (let i = 2; i < n; i++) {
    fib[i] = BigInt(fib[i - 1]) ** BigInt(2) + BigInt(fib[i - 2]);
  }
  return BigInt(fib[n - 1]);
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const firstMultipleInput = readLine().replace(/\s+$/g, "").split(" ");

  const t1 = parseInt(firstMultipleInput[0], 10);

  const t2 = parseInt(firstMultipleInput[1], 10);

  const n = parseInt(firstMultipleInput[2], 10);

  const result = fibonacciModified(t1, t2, n);

  ws.write(result + "\n");

  ws.end();
}
