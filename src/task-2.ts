const product: Product = {
  id: 1,
  title: "Tablet",
  description: "Compact and fast",
};

interface Product {
  readonly id: number;
  title: string;
  description?: string;
}

console.log("Task 2: ");

console.log(`Product: ${JSON.stringify(product)}`);

console.log("");
