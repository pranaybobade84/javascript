// Format Usernames
// Write a function that takes an array of usernames and adds the @ symbol in front of each.
// Example:
// Input: ["john", "doe", "smith"]
// Output: ["@john", "@doe", "@smith"]

function formatUserName(arr) {
  return arr.map((item) => `@${item}`);
}

const input = formatUserName(["john", "doe", "smith"]);
console.log(input);
