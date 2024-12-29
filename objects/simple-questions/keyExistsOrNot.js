// Write a function to check if a given key exists in an object.

function checkKey(obj, key) {
  return key in obj ? `${key} is Present` : `${key} is not Present`;
}

const obj = { name: "apple", price: 2000, key: "10" };
console.log(checkKey(obj, "key"));
