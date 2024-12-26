// Add Index to Elements
// Write a function that takes an array and returns a new array where each element is appended with its index.
// Example:
// Input: ["a", "b", "c"]
// Output: ["a0", "b1", "c2"]

function addIndexes(arr) {
  return arr.map((item, index) => item.concat(index));
}

const input = addIndexes(["a", "b", "c"]);

console.log(input);
