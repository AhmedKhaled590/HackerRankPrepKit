function processData(input) {
  //Enter your code here
  input = input.split("\n");
  let res = "";
  let q = input[0];
  let operationResult = [];
  for (let i = 1; i <= q; i++) {
    let op = input[i].split(" ");
    if (op.length == 2) {
      let opCode = op[0];
      let s = op[1];
      if (opCode == "1") {
        operationResult.push(res);
        res += s;
      } else if (opCode == "2") {
        operationResult.push(res);
        res = res.slice(0, res.length - s);
      } else if (opCode == "3") {
        console.log(res[s - 1]);
      }
    } else if (op.length == 1) {
      let opCode = op[0];
      if (opCode == "4") {
        res = operationResult.pop();
      }
    }
  }
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
