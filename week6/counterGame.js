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
 * Complete the 'counterGame' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts LONG_INTEGER n as parameter.
 */

function counterGame(n) {
  // Write your code here
  let power = Math.log2(n);
  let i = 0;
  if (Math.floor(power) - power === 0) {
    return power % 2 === 0 ? "Richard" : "Louise";
  } else {
    while (Math.floor(power) - power !== 0) {
      n = n - Math.pow(2, Math.floor(power));
      power = Math.log2(n);
      i ^= 1;
    }
    return power % 2 === 0
      ? i === 0
        ? "Richard"
        : "Louise"
      : i === 0
      ? "Louise"
      : "Richard";
  }
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const t = parseInt(readLine().trim(), 10);

  for (let tItr = 0; tItr < t; tItr++) {
    const n = parseInt(readLine().trim(), 10);

    const result = counterGame(n);

    ws.write(result + "\n");
  }

  ws.end();
}
