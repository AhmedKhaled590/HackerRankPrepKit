let weights = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  e: 5,
  f: 6,
  g: 7,
  h: 8,
  i: 9,
  j: 10,
  k: 11,
  l: 12,
  m: 13,
  n: 14,
  o: 15,
  p: 16,
  q: 17,
  r: 18,
  s: 19,
  t: 20,
  u: 21,
  v: 22,
  w: 23,
  x: 24,
  y: 25,
  z: 26,
};
function weightedUniformStrings(s, queries) {
  // Write your code here
  let arr = [];
  for (let i = 0; i < s.length; i++) {
    let count = 1;
    let j = i + 1;
    while (s[i] === s[j]) {
      count++;
      j++;
    }
    let obj = {
      char: s[i],
      count: count,
    };
    arr.push(obj);
    i = j - 1;
  }
  console.log(arr);
  let result = [];
  for (let i = 0; i < queries.length; i++) {
    if (
      arr.some(
        (item) =>
          queries[i] / weights[item.char] ===
            Math.floor(queries[i] / weights[item.char]) &&
          queries[i] / weights[item.char] <= item.count
      )
    ) {
      result.push("Yes");
    } else {
      result.push("No");
    }
  }
  return result;
}

console.log(weightedUniformStrings("abccddde", [1, 3, 12, 5, 9, 10]));
