// Find the Intersection of Two Arrays
// Write a function that returns the common elements between two arrays.
// Input: [1, 2, 3], [2, 3, 4]
// Output: [2, 3]

function commonElement(arr1, arr2) {
  return arr1.filter((item) => arr2.includes(item));
}

console.log(commonElement([1, 2, 3], [2, 3, 4]));
