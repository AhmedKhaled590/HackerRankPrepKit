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
 * Complete the 'gamingArray' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function gamingArray(arr) {
  // Write your code here
  let map = new Map();
  for (let i = 0; i < arr.length; i++) {
    map.set(arr[i], i);
  }
  arr = arr.sort((a, b) => b - a);
  let remain = arr.length;
  let i = 0;
  let j = 0;
  while (remain > 0 && j < arr.length) {
    if (map.get(arr[j]) <= remain) {
      remain = map.get(arr[j]);
      i ^= 1;
    }
    j++;
  }
  return i !== 0 ? "BOB" : "ANDY";
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const g = parseInt(readLine().trim(), 10);

  for (let gItr = 0; gItr < g; gItr++) {
    const arrCount = parseInt(readLine().trim(), 10);

    const arr = readLine()
      .replace(/\s+$/g, "")
      .split(" ")
      .map((arrTemp) => parseInt(arrTemp, 10));

    const result = gamingArray(arr);

    ws.write(result + "\n");
  }

  ws.end();
}
