"use strict";

/*
 * Complete the 'climbingLeaderboard' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY ranked
 *  2. INTEGER_ARRAY player
 */

function climbingLeaderboard(ranked, player) {
  // Write your code here
  let res = [];
  ranked = Array.from(new Set(ranked));
  let j = ranked.length - 1;
  for (let i = 0; i < player.length; i++) {
    while (ranked[j] <= player[i]) {
      j--;
    }
    res.push(j + 2);
  }
  return res;
}

console.log(
  climbingLeaderboard([100, 90, 90, 80, 75, 60], [50, 65, 77, 90, 102])
);
