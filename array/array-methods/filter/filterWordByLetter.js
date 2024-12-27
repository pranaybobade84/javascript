// Filter Words Starting with a Specific Letter
// Write a function that filters out words from an array that start with the letter "a".

// Example Input: ["apple", "banana", "avocado", "grape"]
// Example Output: ["banana", "grape"]

function filterWord(arr) {
  return arr.filter((item) => !item.startsWith("a"));
}

const input = filterWord(["apple", "banana", "avocado", "grape"]);
console.log(input);
