// reverse the no

let number = -26348;

// If number is negative then convert to positive
if (number < 0) {
  number = Math.abs(number);
}

let reversedNo = 0;
while (number > 0) {
  let lastDigit = number % 10;
  reversedNo = reversedNo * 10 + lastDigit;
  number = Math.floor(number / 10);
}

console.log(reversedNo);
