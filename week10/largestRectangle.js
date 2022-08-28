function largestRectangle(h) {
  // Write your code here
  let maxArea = 0;
  // arr = [11 11 10 10 10]
  // targeted = [10 10 10 10 10]
  for (let i = 0; i < h.length; i++) {
    let left = i;
    let right = i;
    let area = 0;
    while (left >= 0 && h[left] >= h[i]) {
      left--;
    }
    while (right < h.length && h[right] >= h[i]) {
      right++;
    }
    area = (right - left - 1) * h[i];
    maxArea = Math.max(maxArea, area);
  }
  return maxArea;
}

console.log(largestRectangle([1, 2, 3, 4, 5]));
console.log(largestRectangle([11, 11, 10, 10, 10]));
