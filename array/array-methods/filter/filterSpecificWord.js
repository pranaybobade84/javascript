// Filter Words Containing a Specific Substring
// Write a function that filters out words from an array that contain the substring "cat".

// Example Input: ["caterpillar", "dog", "catfish", "rabbit"]
// Example Output: ["dog", "rabbit"]

function filterWord(arr) {
  return arr.filter((item) => !item.includes("cat"));
}

const input = filterWord(["caterpillar", "dog", "catfish", "rabbit"]);
console.log(input);
