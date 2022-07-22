"use strict";

/*
 * Complete the 'minimumBribes' function below.
 *
 * The function accepts INTEGER_ARRAY q as parameter.
 */

function minimumBribes(q) {
  // Write your code here
  let bribes = 0;
  for (let i = 0; i < q.length; i++) {
    if (q[i] - (i + 1) > 2) {
      console.log("Too chaotic");
      return;
    }
    for (let j = Math.max(0, q[i] - 2); j < i; j++) {
      // console.log(q[j], q[i]);
      if (q[j] > q[i]) {
        bribes++;
      }
    }
    // console.log("-----------");
  }
  console.log(bribes);
}
