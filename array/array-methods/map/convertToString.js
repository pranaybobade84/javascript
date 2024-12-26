// Q2 .Convert to Strings
// Write a function that takes an array of numbers and returns a new array with each number converted to a string.
// Example:
// Input: [1, 2, 3]
// Output: ["1", "2", "3"]

function convertToString(arr) {
  return arr.map((num) => num.toString());
}

const input = convertToString([1, 2, 3, 4, 5]);
console.log(input);
