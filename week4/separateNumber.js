function separateNumbers(s) {
  // Write your code here
  let result = "NO";
  for (let i = 1; i <= s.length / 2; i++) {
    let num = s.slice(0, i);
    let temp = num;
    let count = 1;
    while (temp.length <= s.length) {
      temp += String(BigInt(num) + BigInt(count));
      count++;
      if (temp === s) {
        result = "YES " + num;
        break;
      }
    }
  }
  console.log(result);
}

separateNumbers("90071992547409929007199254740993");
