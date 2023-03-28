class ProductManager {
  constructor() {
    this.products = [];
    this.productIdCounter = 1;
  }

  addProduct = (title, description, price, thumbnail, code, stock) => {
    const existingProduct = this.products.find(
      (product) => product.code === code
    );
    existingProduct
      ? console.log("Product with this code already exists")
      : !title || !description || !price || !thumbnail || !code || !stock
      ? console.log("All product fields are required")
      : this.products.push({
          id: this.productIdCounter++,
          title,
          description,
          price,
          thumbnail,
          code,
          stock,
        });
  };

  getProducts = () => this.products;

  getProductById = (id) => {
    const product = this.products.find((product) => product.id === id);
    console.log(product ? product : "Not found");
  };
}

// Test
const productManager = new ProductManager();

productManager.addProduct(
  "Product 1",
  "Description of Product 1",
  10,
  "img1.jpg",
  "P001",
  100
);
productManager.addProduct(
  "Product 2",
  "Description of Product 2",
  20,
  "img2.jpg",
  "P002",
  50
);
productManager.addProduct(
  "Product 3",
  "Description of Product 3",
  30,
  "img3.jpg",
  "P003",
  25
);

console.log(productManager.getProducts());

productManager.getProductById(2);

productManager.getProductById(4); // Not found
