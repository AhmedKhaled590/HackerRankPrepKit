"use strict";

function palindromeIndex(s) {
  // Write your code here
  let result = -1;

  for (let i = 0; i < s.length; i++) {
    if (s[i] != s[s.length - i - 1]) {
      if (s[i + 1] != s[s.length - i - 1] && s[i] == s[s.length - i - 2]) {
        result = s.length - i - 1;
        break;
      } else if (
        s[i] != s[s.length - i - 2] &&
        s[i + 1] == s[s.length - i - 1]
      ) {
        result = i;
        break;
      } else if (
        s[i + 1] != s[s.length - i - 1] &&
        s[i] != s[s.length - i - 2]
      ) {
        result = -1;
        break;
      }
    }
  }
 
  return result;
}
console.log(palindromeIndex("abba"));
