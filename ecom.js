// Sample data for products
const products = [
    { id: 1, name: 'Product 1', price: 10 },
    { id: 2, name: 'Product 2', price: 20 },
    { id: 3, name: 'Product 3', price: 30 },
  ];
  
  // Function to display products
  function displayProducts() {
    const productsSection = document.getElementById('products');
    productsSection.innerHTML = '';
    products.forEach(product => {
      const productDiv = document.createElement('div');
      productDiv.classList.add('product');
      productDiv.innerHTML = `
        <h3>${product.name}</h3>
        <p>$${product.price}</p>
        <button onclick="addToCart(${product.id})">Add to Cart</button>
      `;
      productsSection.appendChild(productDiv);
    });
  }
  
  // Function to add products to cart
  function addToCart(productId) {
    const selectedProduct = products.find(product => product.id === productId);
    // Code to add the selected product to the cart
  }
  
  // Function to initialize the website
  function init() {
    displayProducts();
  }
  
  // Initialize the website
  init();
  