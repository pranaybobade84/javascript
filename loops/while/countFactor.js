const number = 10;
if (number < 10) number = Math.abs(number);
let count = 1;

while (count <= number) {
  if (number % count == 0) {
    console.log(count);
  }
  count++;
}
