// Product dataset
const products = [
  {
    id: 1,
    name: "Smartphone",
    category: "electronics",
    description: "Latest model with advanced features.",
    price: "$699",
    icon: "📱"
  },
  {
    id: 2,
    name: "Jeans",
    category: "clothing",
    description: "Comfortable and stylish denim jeans.",
    price: "$49",
    icon: "👖"
  },
  {
    id: 3,
    name: "Bookshelf",
    category: "furniture",
    description: "Modern wooden bookshelf for your study.",
    price: "$120",
    icon: "🪑"
  },
  {
    id: 4,
    name: "Novel",
    category: "books",
    description: "Bestselling fiction novel.",
    price: "$15",
    icon: "📚"
  },
  {
    id: 5,
    name: "Headphones",
    category: "electronics",
    description: "Noise-cancelling over-ear headphones.",
    price: "$199",
    icon: "🎧"
  },
  {
    id: 6,
    name: "T-Shirt",
    category: "clothing",
    description: "Soft cotton t-shirt in various colors.",
    price: "$19",
    icon: "👕"
  }
];

const productList = document.getElementById("productList");
const categoryFilter = document.getElementById("categoryFilter");

function renderProducts(filteredProducts) {
  if (filteredProducts.length === 0) {
    productList.innerHTML = '<div class="message">No products found for this category.</div>';
    return;
  }
  productList.innerHTML = filteredProducts
    .map(product => `
      <div class="product simple">
        <div class="icon">${product.icon}</div>
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        <span>${product.price}</span>
      </div>
    `)
    .join("");
}

function filterProducts() {
  const selectedCategory = categoryFilter.value;
  const filtered = selectedCategory === "all"
    ? products
    : products.filter(product => product.category === selectedCategory);
  renderProducts(filtered);
}

categoryFilter.addEventListener("change", filterProducts);

// Initial render
renderProducts(products);
