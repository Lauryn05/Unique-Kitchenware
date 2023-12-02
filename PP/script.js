let cartCount = 0;

const products = [
  { id: 1, name: 'Glass Mugs', price: 450, image: 'glass mugs.jpg' },
  { id: 2, name: 'Colored Lunchbox', price: 1500, image: 'lunch.jpg' },
  { id: 2, name: 'Nordic Humidifier', price: 1500, image: 'nord.jpg' },
  { id: 2, name: 'Product 2', price: 30, image: 'product2.jpg' },
  { id: 2, name: 'Product 2', price: 30, image: 'product2.jpg' },
  { id: 2, name: 'Product 2', price: 30, image: 'product2.jpg' }
  // Add more products as needed
];

function displayProducts() {
  const productsSection = document.getElementById('products');

  products.forEach(product => {
    const productDiv = document.createElement('div');
    productDiv.className = 'product';
    productDiv.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>$${product.price}</p>
      <button onclick="addToCart(${product.id})">Add to Cart</button>
    `;
    productsSection.appendChild(productDiv);
  });
}

function addToCart(productId) {
  const selectedProduct = products.find(product => product.id === productId);
  cartCount++;
  document.getElementById('cart-count').innerText = cartCount;

  const cartItems = document.getElementById('cart-items');
  const listItem = document.createElement('li');
  listItem.textContent = selectedProduct.name;
  cartItems.appendChild(listItem);
}

// Update the hidden form inputs for order submission
//document.getElementById('product-name-input').value = productName;
//document.getElementById('quantity-input').value = quantity;

// Submit the form to insert the order into the database
//document.getElementById('order-form').submit();

function openCart() {
  document.getElementById('cart-modal').style.display = 'block';
}

function closeCart() {
  document.getElementById('cart-modal').style.display = 'none';
}

function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -34.397, lng: 150.644},
    zoom: 8
  });
}

// Display products when the page loads
displayProducts();
