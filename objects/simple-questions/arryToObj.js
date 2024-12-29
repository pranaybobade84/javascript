const keyValuePairs = [
  ["name", "apple"],
  ["price", 2000],
  ["quantity", 10],
];

// function arrayToObject(arr) {
//     return Object.fromEntries(arr);
// }

function arrayToObject(arr) {
  return arr.reduce((acc, [key, value]) => {
    acc[key] = value;
    return acc;
  }, {});
}

console.log(arrayToObject(keyValuePairs));
