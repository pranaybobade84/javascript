// Sum of All Elements
// Write a function that calculates the sum of all numbers in an array.
// Input: [5, 10, 15]
// Output: 30

function sumOfAllNums(arr) {
  return arr.reduce((acc, current) => (acc += current), 0);
}

const input = [5, 10, 15];

console.log(sumOfAllNums(input));
