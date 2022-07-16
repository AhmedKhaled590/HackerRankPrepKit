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
 * Complete the 'pickingNumbers' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY a as parameter.
 */

function pickingNumbers(a) {
  /*  a.sort((a, b) => a - b);
  if (a[a.length - 1] - a[0] <= 1) return a.length;
  let count = 0;
  let max = 0;
  for (let i = 0; i < a.length; i++) {
    count = 0;
    let j = i + 1;
    while (j < a.length) {
      if (a[j] - a[i] <= 1) {
        count++;
        j++;
      } else {
        break;
      }
    }
    if (count > max) {
      max = count;
    }
  }
  return max + 1;*/
  let frequency = new Array(100).fill(0);
  a.forEach((element) => {
    frequency[element]++;
  });
  let max = 0;
  for (let i = 0; i < 100; i++) {
    if (frequency[i] + frequency[i + 1] > max) {
      max = frequency[i] + frequency[i + 1];
    }
  }
  return max;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const n = parseInt(readLine().trim(), 10);

  const a = readLine()
    .replace(/\s+$/g, "")
    .split(" ")
    .map((aTemp) => parseInt(aTemp, 10));

  const result = pickingNumbers(a);

  ws.write(result + "\n");

  ws.end();
}
