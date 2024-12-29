// Convert an object into an array of key-value pairs.

const obj = {
  name: "pranay",
  age: 20,
  contact: 9284117890,
};

function convertToArray(obj) {
  if (!obj) {
    return "Please pass obj";
  }
  return Object.entries(obj);
}

console.log(convertToArray(obj));
