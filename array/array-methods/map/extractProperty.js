// Extract Property Values
// Given an array of objects, extract the values of a specific property into a new array.
// Example:
// Input: [{ name: "Alice" }, { name: "Bob" }, { name: "Charlie" }]
// Output: ["Alice", "Bob", "Charlie"]

function extractProperty(arr) {
  return arr.map(({ name }) => name);
}

const values = [{ name: "Alice" }, { name: "Bob" }, { name: "Charlie" }];
const input = extractProperty(values);
console.log(input);
