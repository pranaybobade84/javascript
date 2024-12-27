// Filter Words Starting with a Vowel
// Write a function that filters out words starting with a vowel (a, e, i, o, u) from an array of strings.
// Example Input:
// ["apple", "banana", "orange", "kiwi"]
// Example Output:
// Copy code
// ["banana", "kiwi"]

const vowels = ["a", "e", "i", "o", "u"];
function filterByVowel(arr) {
  return arr.filter((item) => {
    return !vowels.includes(item[0].toLowerCase());
  });
}

const input = filterByVowel(["apple", "banana", "orange", "kiwi"]);
console.log(input);
