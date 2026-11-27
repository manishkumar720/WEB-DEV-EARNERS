const products = [
  { name: "Laptop", inStock: true },
  { name: "Mouse", inStock: false },
];

const inStockProducts = products.filter((p) => {
  if (p.inStock) {
    return p;
  }
});

console.log(inStockProducts);
