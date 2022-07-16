// "use strict";

// const fs = require("fs");

// process.stdin.resume();
// process.stdin.setEncoding("utf-8");

// let inputString = "";
// let currentLine = 0;

// process.stdin.on("data", function (inputStdin) {
//   inputString += inputStdin;
// });

// process.stdin.on("end", function () {
//   inputString = inputString.split("\n");

//   main();
// });

// function readLine() {
//   return inputString[currentLine++];
// }

/*
 * Complete the 'getTotalX' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY a
 *  2. INTEGER_ARRAY b
 */

function getTotalX(a, b) {
  // Write your code here
  let sizeA = a.length;
  let sizeB = b.length;
  let checkForA = 0;
  let count = 0;
  let searchSpace = [];
  let first = a[sizeA - 1];
  let second = b[0];
  for (let i = 0; i < sizeA; i++) {
    if (a[sizeA - 1] % a[i] != 0) {
      checkForA = 1;
      break;
    }
  }
  while (first <= second) {
    searchSpace.push(first);
    first += a[sizeA - 1];
  }
  for (let i = 0; i < searchSpace.length; i++) {
    let flag = true;
    for (let j = 0; j < sizeB; j++) {
      if (b[j] % searchSpace[i] != 0) {
        flag = false;
        break;
      }
    }
    if (checkForA) {
      for (let k = 0; k < sizeA; k++) {
        if (searchSpace[i] % a[k] != 0) {
          flag = false;
          break;
        }
      }
    }
    if (flag) {
      count++;
    }
  }
  return count;
}

console.log(getTotalX([3, 4], [24, 48]));

// function main() {
//   const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

//   const firstMultipleInput = readLine().replace(/\s+$/g, "").split(" ");

//   const n = parseInt(firstMultipleInput[0], 10);

//   const m = parseInt(firstMultipleInput[1], 10);

//   const arr = readLine()
//     .replace(/\s+$/g, "")
//     .split(" ")
//     .map((arrTemp) => parseInt(arrTemp, 10));

//   const brr = readLine()
//     .replace(/\s+$/g, "")
//     .split(" ")
//     .map((brrTemp) => parseInt(brrTemp, 10));

//   const total = getTotalX(arr, brr);

//   ws.write(total + "\n");

//   ws.end();
// }
