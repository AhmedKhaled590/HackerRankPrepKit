"use strict";

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
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr) {
  let positive = 0;
  let negative = 0;
  let zeros = 0;
  let totalSize = arr.length;

  arr.forEach((element) => {
    positive = element > 0 ? positive + 1 : positive;
    negative = element < 0 ? negative + 1 : negative;
    zeros = element == 0 ? zeros + 1 : zeros;
  });
  console.log((positive / totalSize).toPrecision(6));
  console.log((negative / totalSize).toPrecision(6));
  console.log((zeros / totalSize).toPrecision(6));
}

function main() {
  const n = parseInt(readLine().trim(), 10);

  const arr = readLine()
    .replace(/\s+$/g, "")
    .split(" ")
    .map((arrTemp) => parseInt(arrTemp, 10));

  plusMinus(arr);
}
