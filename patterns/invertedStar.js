for (let line = 1; line <= 4; line++) {
  let row = "";
  for (let star = 1; star <= 4 - line + 1; star++) {
    row += "*";
  }
  console.log(row);
}
