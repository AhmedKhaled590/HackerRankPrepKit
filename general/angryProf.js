function angryProfessor(k, a) {
  // Write your code here
  let countLessThanZero = a.filter((time) => time <= 0).length;
  if (countLessThanZero >= k) return "NO";
  return "YES";
}
