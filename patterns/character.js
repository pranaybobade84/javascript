let n = 4;
let currentCharCode = 97;
for (let line = 1; line <= n; line++) {
  let char = "";
  for (let chars = 1; chars <= line; chars++) {
    char += String.fromCharCode(currentCharCode);
    currentCharCode++;
  }
  console.log(char);
}
