function generateNonDecreasingSubArrays(arr) {
  let subArrays = [];
  let subArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i + 1] > arr[i]) {
      subArray.push(arr[i]);
    } else {
      subArray.push(arr[i]);
      if (subArray.length > 1) {
        subArrays.push(subArray);
      }
      subArray = [];
    }
  }
  return subArrays;
}

function permutationGame(arr) {
  // Write your code here
  if (arr.length === 2) return "Alice";
  if (arr.length === 3) {
    let subArrays = generateNonDecreasingSubArrays(arr);
    if (subArrays.some((item) => item.length === 2)) {
      return "Alice";
    } else {
      return "Bob";
    }
  }

  // Get all non-decreasing subarrays
  let subArrays = generateNonDecreasingSubArrays(arr);
  let lengths = subArrays.map((item) => item.length);
  let maxLength = Math.max(...lengths);
  let sumLengths = lengths.reduce((a, b) => a + b);
  let totalLength = arr.length;
  let turn = 0; // 0 for Alice, 1 for Bob
  if (sumLengths === totalLength) {
    while (sumLengths > 0) {
      sumLengths--;
      turn ^= 1;
      if (sumLengths == maxLength) {
        return turn === 0 ? "Alice" : "Bob";
      }
    }
  } else {
    while (sumLengths > 0) {
      turn ^= 1;
      sumLengths--;
      totalLength--;
    }
    turn ^= 1;
    while (totalLength > 1) {
      turn ^= 1;
      console.log("turn totalLength lengths: ", turn === 0 ? "Alice" : "Bob");
      totalLength -= 1;
      if (totalLength === 3) {
        let subArrays = generateNonDecreasingSubArrays(arr);
        if (subArrays.some((item) => item.length === 2)) {
          return "Alice";
        } else {
          return "Bob";
        }
      }
    }

    return turn === 0 ? "Alice" : "Bob";
  }
}
console.log(permutationGame([5, 3, 2, 1, 4]));
