// Flatten an array of nested objects to a single object.

function flattenArrayOfObjs(nestedObj) {
  return nestedObj.reduce((acc, curr) => {
    for (const [key, value] of Object.entries(curr)) {
      acc[key] = value;
    }
    return acc;
  }, {});
}

const nestedObjects = [
  { name: "apple", price: 2000 },
  { quantity: 10, category: "fruit" },
  { supplier: "Farm Fresh", inStock: true },
];

console.log(flattenArrayOfObjs(nestedObjects));
