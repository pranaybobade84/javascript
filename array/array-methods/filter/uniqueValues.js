// Filter Unique Values
// Write a function that filters out duplicate numbers from an array, leaving only unique numbers.

// Example Input: [1, 2, 2, 3, 4, 4, 5]
// Example Output: [1, 2, 3, 4, 5]

// function filterUniqueValues(arr) {
//   let filteredarr = [];
//   return arr.filter((num) => {
//     if (!filteredarr.includes(num)) {
//       return filteredarr.push(num);
//     }
//   });
// }

function filterUniqueValues(array) {
  return array.filter((num, index, arr) => arr.indexOf(num) === index);
}
const input = filterUniqueValues([1, 2, 2, 3, 4, 4, 5]);
console.log(input);
