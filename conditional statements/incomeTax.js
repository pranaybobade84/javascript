const income = 600000;
let tax;

if (income < 500000) {
  tax = 0;
} else if (income >= 500000 && income < 1000000) {
  tax = income * 0.2;
} else {
  tax = income * 0.3;
}

console.log(`Your tax is ${tax}`);
