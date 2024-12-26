// Calculate Areas
// Given an array of objects representing rectangles (with width and height), return a new array of their areas.
// Example:
// Input: [{ width: 2, height: 3 }, { width: 4, height: 5 }]
// Output: [6, 20]

function calculateArea(arr) {
  return arr.map(({ width, height }) => width * height);
}

const input = calculateArea([
  { width: 2, height: 3 },
  { width: 4, height: 5 },
]);

console.log(input);
