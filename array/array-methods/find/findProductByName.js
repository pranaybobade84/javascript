// Q find product by name

let prodName = "Tablet";
const products = [
  { id: 1, name: "Laptop" },
  { id: 2, name: "Smartphone" },
  { id: 3, name: "Tablet" },
];

const foundedProduct = products.find(({ name }) => name === prodName);

if (foundedProduct) {
  console.log(foundedProduct);
} else {
  console.log("Product Not Found");
}
