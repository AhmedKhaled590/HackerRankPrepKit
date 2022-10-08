function beautifulDays(i, j, k) {
  // Write your code here
  let days = [];
  for (let day = i; day <= j; day++) {
    days.push(day.toString());
  }
  let reversedDays = days.map((day) => day.split("").reverse().join(""));
  let beautifulDays = 0;

  for (let day = 0; day < days.length; day++) {
    if (Math.abs(parseInt(days[day]) - parseInt(reversedDays[day])) % k === 0)
      beautifulDays++;
  }
  return beautifulDays;
}

console.log(beautifulDays(20, 23, 6));
