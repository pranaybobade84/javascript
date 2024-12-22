function shortestPath(str) {
  let x = 0;
  let y = 0;

  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) === "S") {
      y--;
    } else if (str.charAt(i) === "N") {
      y++;
    } else if (str.charAt(i) === "W") {
      x--;
    } else {
      x++;
    }
  }

  let x2 = x * x;
  let y2 = y * y;

  return Math.sqrt(x2 + y2);
}

console.log(shortestPath("NS"));
