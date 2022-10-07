function bigSorting(unsorted) {
  // Write your code here
  let result = unsorted.sort((a, b) => {
    if (a.length === b.length) {
      return Number(BigInt(a) - BigInt(b));
    } else {
      return a.length - b.length;
    }
  });
  return result;
}

console.log(
  bigSorting([
    "6",
    "31415926535897932384626433832795",
    "1",
    "3",
    "10",
    "3",
    "5",
  ])
);
