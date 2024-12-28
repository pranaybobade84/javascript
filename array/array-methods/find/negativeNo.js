// Q. Find the first negative no
// input: [10, 42, 0, 3, -5, 30];
// outPut:-5

function negativeNo(arr) {
  return arr.find((num) => num < 0);
}

console.log(negativeNo([10, 42, 0, 3, -5, 30]));
