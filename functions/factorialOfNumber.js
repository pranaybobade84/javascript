function findFactorial(num) {
  let factorial = 1;
  for (let i = 1; i <= num; i++) {
    factorial = factorial * i;
  }

  return factorial;
}

const factorial = findFactorial(4);
console.log(factorial);
