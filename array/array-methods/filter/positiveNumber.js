// Filter Positive Numbers
// Write a function that filters out all the positive numbers from an array.

// Example Input: [-1, 2, -3, 4, -5]
// Example Output: [-1, -3, -5]

function filterPositiveNumbers(arr) {
  return arr.filter((num) => num <= 0);
}

const numbers = [-1, 2, -3, 4, -5];
const result = filterPositiveNumbers(numbers);
console.log(result);
