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
 * Complete the 'anagram' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING s as parameter.
 */

function anagram(s) {
  // Write your code here
  let size = s.length;
  if (size % 2 != 0) return -1;
  let right = s.slice(0, size / 2);
  let left = s.slice(size / 2, size);
  let rightCount = new Array(26).fill(0);
  let leftCount = new Array(26).fill(0);
  for (let i = 0; i < right.length; i++) {
    rightCount[right[i].charCodeAt(0) - 97]++;
    leftCount[left[i].charCodeAt(0) - 97]++;
  }
  let count = 0;
  for (let i = 0; i < 26; i++) {
    if (rightCount[i] != leftCount[i]) {
      count += Math.abs(rightCount[i] - leftCount[i]);
    }
  }
  return count / 2;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const q = parseInt(readLine().trim(), 10);

  for (let qItr = 0; qItr < q; qItr++) {
    const s = readLine();

    const result = anagram(s);

    ws.write(result + "\n");
  }

  ws.end();
}
