function pylons(k, arr) {
  let count = 0;
  let i = 0;
  while (i < arr.length) {
    let j = i + k - 1;
    while (j >= i - k + 1) {
      if (arr[j] === 1) {
        count++;
        i = j + k - 1;
        break;
      }
      j--;
    }
    if (j < i - k + 1) {
      return -1;
    } else {
      i++;
    }
  }
  return count;
}

console.log(pylons(2, [0, 1, 0, 0, 0, 1, 0]));
