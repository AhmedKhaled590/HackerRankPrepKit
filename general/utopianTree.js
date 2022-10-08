function utopianTree(n) {
  // Write your code here
  let height = 2 ** (Math.ceil(n / 2) + 1) - 1;
  if (n % 2 !== 0) return height - 1;
  return height;
}
