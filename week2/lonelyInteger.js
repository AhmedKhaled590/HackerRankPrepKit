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
 * Complete the 'lonelyinteger' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY a as parameter.
 */

function lonelyinteger(a) {
  //   let count = new Map();
  //   a.forEach((element) => {
  //     count.get(element)
  //       ? count.set(element, count.get(element) + 1)
  //       : count.set(element, 1);
  //   });
  //   let res = 0;
  //   count.forEach((element, key) => {
  //     if (element == 1) {
  //       res = key;
  //       return;
  //     }
  //   });
  //   return res;

  /**
   * More Optimized Solution (same complexity but seems simpler)
   */
  let res = 0;
  a.forEach((element) => {
    res ^= element;
  });
  return res;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const n = parseInt(readLine().trim(), 10);

  const a = readLine()
    .replace(/\s+$/g, "")
    .split(" ")
    .map((aTemp) => parseInt(aTemp, 10));

  const result = lonelyinteger(a);

  ws.write(result + "\n");

  ws.end();
}
