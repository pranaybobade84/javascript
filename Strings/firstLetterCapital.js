function transformUpperCase(str) {
  if (typeof str !== "string" || str.length === 0) {
    return "";
  }
  return str.charAt(0).toUpperCase() + str.slice(1);
}

const res = transformUpperCase("hello");
console.log(res); // Output: hello

const empty = transformUpperCase("");
console.log(empty);
