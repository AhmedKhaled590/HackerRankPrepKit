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
 * Complete the 'minimumNumber' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. STRING password
 */

function minimumNumber(n, password) {
  // Return the minimum number of characters to make the password strong
  let ans = 0;
  if (!password.match(/[0-9]/)) {
    ans++;
  }
  if (!password.match(/[a-z]/)) {
    ans++;
  }
  if (!password.match(/[A-Z]/)) {
    ans++;
  }
  if (!password.match(/[!@#$%^&*()\-+]/)) {
    ans++;
  }
  return n + ans < 6 ? 6 - n : ans;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const n = parseInt(readLine().trim(), 10);

  const password = readLine();

  const answer = minimumNumber(n, password);

  ws.write(answer + "\n");

  ws.end();
}
