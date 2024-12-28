// Q. find the first string longer than 5 characters
// input:['apple','banana','cherry']
// output : banana

function stringLongerThan(arr) {
  if (arr.length <= 0) {
    return "Please Give some values";
  }
  return arr.find((item) => item.length > 5);
}

console.log(stringLongerThan(["apple", "banana", "cherry"]));
