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
 * Complete the 'countSort' function below.
 *
 * The function accepts 2D_STRING_ARRAY arr as parameter.
 */

function countSort(arr) {
  // Write your code here
  let result = new Array(arr.length).fill(0).map(() => new Array());
  for (let i = 0; i < arr.length; i++) {
    let [key, val] = arr[i];
    i < Math.floor(result.length / 2)
      ? result[key].push("-")
      : result[key].push(val);
  }
  for (let i = 0; i < result.length; i++) {
    result[i] = result[i].join(" ").trimStart();
  }
  console.log(result.join(" ").trimStart());
}

function main() {
  const n = parseInt(readLine().trim(), 10);

  let arr = Array(n);

  for (let i = 0; i < n; i++) {
    arr[i] = readLine().replace(/\s+$/g, "").split(" ");
  }

  countSort(arr);
}
