// Filter Empty Strings
// Write a function that filters out empty strings from an array of strings.

// Example Input:["apple", "", "banana", "", "cherry"]
// Example Output: ["apple", "banana", "cherry"]

function filterEmptyString(arr) {
  return arr.filter((item) => item.length !== 0);
}
const input = filterEmptyString(["apple", "", "banana", "", "cherry"]);

console.log(input);
