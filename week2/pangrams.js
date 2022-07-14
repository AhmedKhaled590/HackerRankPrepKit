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
 * Complete the 'pangrams' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function pangrams(s) {
  // Write your code here
  let count = new Array(26);
  count.fill(0, 0, 26);
  s = s.toLowerCase().replace(/ /g, "");
  for (let i = 0; i < s.length; i++) {
    count[s.charCodeAt(i) - 97 >= 0 ? s.charCodeAt(i) - 97 : 26]++;
  }
  return count.includes(0) === false ? "pangram" : "not pangram";
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const s = readLine();

  const result = pangrams(s);

  ws.write(result + "\n");

  ws.end();
}
