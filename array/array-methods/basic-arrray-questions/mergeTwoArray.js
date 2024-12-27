// Merge Two Arrays
// Write a function to merge two arrays and remove duplicates.
// Input: [1, 2, 3], [3, 4, 5]
// Output: [1, 2, 3, 4, 5]

// function mergeTwoArray(arr1, arr2) {
//   let mergedArr = [...arr1, ...arr2];
//   return mergedArr.filter((item, index) => mergedArr.indexOf(item) === index);
// }

function mergeTwoArray(arr1, arr2) {
  return [...new Set([...arr1, ...arr2])];
}
console.log(mergeTwoArray([1, 2, 3], [3, 4, 5]));
