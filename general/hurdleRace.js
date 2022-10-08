function hurdleRace(k, height) {
  // Write your code here
  if (Math.max(...height) <= k) return 0;
  return Math.max(...height) - k;
}
