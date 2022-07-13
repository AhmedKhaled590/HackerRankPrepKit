function processData(data) {
  let inputs = data.split("\r\n");
  inputs.forEach((input) => {
    let operation = input[0];
    let type = input[2];
    let lastIndex = type === "M" ? input.length - 2 : input.length;

    if (operation === "S") {
      let capitalPositions = [0];
      let ans = [];
      input = input.slice(4, lastIndex);
      for (let i = 0; i < input.length; i++) {
        element = input[i];
        if (element >= "A" && element < "Z") {
          capitalPositions.push(i);
        }
      }

      capitalPositions.push(input.length);

      for (let j = 0; j < capitalPositions.length - 1; j++) {
        ans.push(
          input
            .slice(capitalPositions[j], capitalPositions[j + 1])
            .toLowerCase()
        );
      }
      console.log(ans.join(" ").trimStart());
      return;
    } else if (operation === "C") {
      let ans = "";

      input = input.slice(4, input.length);
      let words = input.split(" ");
      ans =
        type === "C"
          ? words[0].charAt(0).toUpperCase() + words[0].slice(1)
          : words[0];
      for (let j = 1; j < words.length; j++) {
        ans += words[j].charAt(0).toUpperCase() + words[j].slice(1);
      }
      ans = type === "M" ? (ans += "()") : ans;
      console.log(ans);
    }
  });
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
  _input += input;
});

process.stdin.on("end", function () {
  processData(_input);
});
