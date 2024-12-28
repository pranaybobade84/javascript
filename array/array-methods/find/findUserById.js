// Q.find user by id in obj

const userId = 2;
function findUser(arr) {
  return arr.find(({ id }) => {
    return id === userId;
  });
}

const input = [
  { id: 1, name: "Alice" },
  { id: 2, name: "john" },
  { id: 3, name: "doe" },
];

console.log(findUser(input));
