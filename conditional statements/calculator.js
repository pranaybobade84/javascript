const a = 10;
const b = 20;

const char = "/";

switch (char) {
  case "+":
    console.log(a + b);
    break;
  case "-":
    console.log(a - b);
    break;
  case "*":
    console.log(a * b);
    break;
  case "/":
    console.log(a / b);
    break;
  case "%":
    console.log(a / b);
    break;
  default:
    console.log("WRONG OPERATOR");
}
