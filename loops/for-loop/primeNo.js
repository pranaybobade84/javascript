// Prime no

// const number = 30;//not prime
const number = 2;//prime

let count = 0;

for (let i = 1; i <= number; i++) {
  if (number % i === 0) {
    count++;
  }
}
if (count === 2) {
  console.log(`${number} is a Prime number`);
} else {
  console.log(`${number} is Not a Prime number`);
}
