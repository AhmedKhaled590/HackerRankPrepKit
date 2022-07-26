"use strict";

/*
 * Complete the 'sherlockAndAnagrams' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING s as parameter.
 */

function sherlockAndAnagrams(s) {
  // Write your code here
  // construct all permutation of the string
  let permutations = [];
  for (let i = 0; i < s.length; i++) {
    for (let j = i + 1; j <= s.length; j++) {
      permutations.push(s.slice(i, j));
    }
  }

  let count = 0;
  for (let i = 0; i < permutations.length; i++) {
    permutations[i] = permutations[i].split("").sort().join("");
  }
  for (let i = 0; i < permutations.length; i++) {
    for (let j = i + 1; j < permutations.length; j++) {
      if (permutations[i] === permutations[j]) {
        count++;
      }
    }
  }
  return count;
}
console.log(sherlockAndAnagrams("mom"));
