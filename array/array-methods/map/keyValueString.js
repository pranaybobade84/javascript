// Create Key-Value Strings
// Write a function that converts an array of objects into an array of strings in the format "key:value".
// Example:
// Input: [{ id: 1, name: "John" }, { id: 2, name: "Jane" }]
// Output: ["id:1,name:John", "id:2,name:Jane"]

function keyValueString(arr) {
  return arr.map((item) =>
    Object.entries(item)
      .map(([key, value]) => `${key}:${value}`)
      .join(',')
  );
}

const input = keyValueString([
  { id: 1, name: "John" },
  { id: 2, name: "Jane" },
]);

console.log(input);
