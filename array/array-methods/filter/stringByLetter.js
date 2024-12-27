// Filter Strings by Length
// Write a function that filters out strings from an array that have a length greater than 5.

// Example Input: ["apple", "banana", "pear", "kiwi"]
// Example Output: ["apple", "pear", "kiwi"]

function filterString(arr) {
  return arr.filter((item) => item.length <= 5);
}

const input = filterString(["apple", "banana", "pear", "kiwi"]);
console.log(input);
