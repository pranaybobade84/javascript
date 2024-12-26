// Uppercase Strings
// Write a function that converts an array of strings to uppercase.
// Example:
// Input: ["apple", "banana", "cherry"]
// Output: ["APPLE", "BANANA", "CHERRY"]

function convertToUppercase(arr) {
  return arr.map((item) => item.toUpperCase());
}

const input = convertToUppercase(["apple", "banana", "cherry"]);
console.log(input);
