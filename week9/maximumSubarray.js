function maxSubarray(arr) {
  let maxSubsequenceSum = 0;
  let maxSubarraySum = -Infinity;
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    maxSubarraySum = Math.max(maxSubarraySum, sum);
    sum = Math.max(sum, 0);
  }
  let allNegative = true;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      allNegative = false;
      break;
    }
  }
  if (allNegative) {
    maxSubsequenceSum = Math.max(...arr);
  } else {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > 0) {
        maxSubsequenceSum += arr[i];
      }
    }
  }
  return [maxSubarraySum, maxSubsequenceSum];
}

console.log(maxSubarray([2, -1, 2, 3, 4, -5]));
