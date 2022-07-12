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
 * Complete the 'breakingRecords' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY scores as parameter.
 */

function breakingRecords(scores) {
  /* let result = [0, 0];
  let min = scores[0];
  let max = scores[0];
  const [countMax, countMin] = scores.reduce(
    (prev, curr) => {
      result =
        curr < min
          ? [result[0], result[1] + 1]
          : curr > max
          ? [result[0] + 1, result[1]]
          : [result[0], result[1]];
      min = Math.min(min, curr);
      max = Math.max(max, curr);
      return result;
    },
    [0, 0]
  );
  return [countMax, countMin];*/

  let result = [0, 0];
  let min = scores[0];
  let max = scores[0];

  scores.forEach((element) => {
    let currMin = Math.min(min, element);
    let currMax = Math.max(max, element);
    if (currMin != min) {
      min = currMin;
      result[1]++;
    }
    if (currMax != max) {
      max = currMax;
      result[0]++;
    }
  });
  return result;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const n = parseInt(readLine().trim(), 10);

  const scores = readLine()
    .replace(/\s+$/g, "")
    .split(" ")
    .map((scoresTemp) => parseInt(scoresTemp, 10));

  const result = breakingRecords(scores);

  ws.write(result.join(" ") + "\n");

  ws.end();
}
