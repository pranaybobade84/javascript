// Question:
// You are given an array of numbers. Write a function that filters out all numbers greater than 10 and returns the remaining numbers.

function filterNumbers(arr) {
  return arr.filter((num) => num < 10);
}

const numbers = [4, 12, 9, 18, 3, 7, 14];

const input = filterNumbers(numbers);
console.log(input);
