/*
 * Complete the 'waiter' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY number
 *  2. INTEGER q
 */
function isPrimeEnhanced(n) {
  if (n <= 1) return false;
  if (n <= 3) return true;
  if (n % 2 === 0 || n % 3 === 0) return false;
  for (let i = 5; i * i <= n; i += 6) {
    if (n % i === 0 || n % (i + 2) === 0) return false;
  }
  return true;
}

function waiter(number, q) {
  // Write your code here
  let primes = [];
  let answers = [];
  let A = [];
  let B = [];
  // generate primes effectivly
  for (let i = 2; primes.length < Math.max(number.length, q); i++) {
    if (isPrimeEnhanced(i)) {
      primes.push(i);
    }
  }

  for (let i = 0; i < q; i++) {
    A = [];

    while (number.length > 0) {
      let num = number.pop();
      if (num % primes[i] === 0) {
        B.push(num);
      } else {
        A.push(num);
      }
    }
    while (B.length > 0) {
      answers.push(B.pop());
    }
    number = A;
  }

  while (A.length > 0) {
    answers.push(A.pop());
  }

  return answers;
}

console.log(
  waiter(
    [
      80, 37, 86, 79, 8, 39, 43, 41, 15, 33, 30, 15, 45, 55, 61, 74, 49, 49, 20,
      66, 77, 19, 85, 44, 81, 82, 27, 5, 36, 83, 91, 45, 39, 44, 19, 44, 71, 49,
      8, 66, 81, 40, 29, 60, 35, 31, 44,
    ],
    21
  )
);
