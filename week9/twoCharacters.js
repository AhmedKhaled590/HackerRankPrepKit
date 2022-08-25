"use strict";

/*
 * Complete the 'alternate' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING s as parameter.
 */

let willDefinitelyRemoved = [];
let distinctCharacters = [];
let lengths = [0];

function recursiveRemoveAnyConsecutiveDuplicates(s) {
  if (s.length <= 1) {
    return s;
  }
  if (s[0] === s[1]) {
    willDefinitelyRemoved.push(s[0]);
    return recursiveRemoveAnyConsecutiveDuplicates(s.slice(1));
  }
  return s[0] + recursiveRemoveAnyConsecutiveDuplicates(s.slice(1));
}

function checkAlternating(s) {
  let distinctCharacters = Array.from(new Set(s));
  if (distinctCharacters.length != 2) {
    return false;
  }
  for (let i = 0; i < s.length - 1; i++) {
    if (s[i] == s[i + 1]) {
      return false;
    }
  }
  return true;
}

function alternate(s) {
  // Write your code here
  s = recursiveRemoveAnyConsecutiveDuplicates(s);
  willDefinitelyRemoved = Array.from(new Set(willDefinitelyRemoved));
  for (let i = 0; i < willDefinitelyRemoved.length; i++) {
    s = s.replaceAll(willDefinitelyRemoved[i], "");
  }
  let set = Array.from(new Set(s));
  for (let i = 0; i < set.length; i++) {
    for (let j = i + 1; j < s.length; j++) {
      let regex = "[^" + set[i] + set[j] + "]";
      let temp = s.replace(new RegExp(regex, "g"), "");
      if (checkAlternating(temp)) {
        lengths.push(temp.length);
      }
    }
  }
  return Math.max(...lengths);
}
console.log(alternate("asdcbsdcagfsdbgdfanfghbsfdab"));
