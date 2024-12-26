// Q1. Write a function that takes an array of numbers and returns a new array where each number is doubled.
// Example:
// Input: [1, 2, 3]
// Output: [2, 4, 6]

function doubledNumber(arr) {
  return arr.map((num) => num + num);
}

const result = doubledNumber([1, 2, 3]);
console.log(result);
