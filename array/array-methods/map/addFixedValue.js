// Add a Fixed Value
// Write a function that adds 5 to each element in an array of numbers.
// Example:
// Input: [10, 20, 30]
// Output: [15, 25, 35]

function addFixedValue(arr) {
  return arr.map((num) => num + 5);
}

const input = addFixedValue([10, 20, 30]);
console.log(input);
