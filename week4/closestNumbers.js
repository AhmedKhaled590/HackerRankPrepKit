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
 * Complete the 'closestNumbers' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function closestNumbers(arr) {
  arr.sort((a, b) => a - b);
  let res = [];
  let diff = Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i + 1] - arr[i] < diff) {
      res = [arr[i], arr[i + 1]];
      diff = arr[i + 1] - arr[i];
    } else if (arr[i + 1] - arr[i] == diff) {
      res.push(arr[i]);
      res.push(arr[i + 1]);
    }
  }
  return res;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const n = parseInt(readLine().trim(), 10);

  const arr = readLine()
    .replace(/\s+$/g, "")
    .split(" ")
    .map((arrTemp) => parseInt(arrTemp, 10));

  const result = closestNumbers(arr);

  ws.write(result.join(" ") + "\n");

  ws.end();
}
