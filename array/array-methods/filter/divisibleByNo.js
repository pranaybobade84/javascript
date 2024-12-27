// Filter Numbers Divisible by a Given Number
// Write a function that filters numbers divisible by a specific number (e.g., 3).

// Example Input: [3, 6, 9, 10, 15, 20]
// Example Output (for divisor 3): [3, 6, 9, 15]

function divisibleByNo(arr, n) {
  return arr.filter((num) => num % n === 0);
}

const input = divisibleByNo([3, 6, 9, 10, 15, 20], 2);

console.log(input);
