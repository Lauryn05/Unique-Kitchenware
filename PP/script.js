let cartCount = 0;

const products = [
  { id: 1, name: 'Glass Mugs', price: 450, image: 'glass mugs.jpg' },
  { id: 2, name: 'Colored Lunchbox', price: 1500, image: 'lunch.jpg' },
  { id: 3, name: 'Nordic Humidifier', price: 1500, image: 'nord.jpg' },
  { id: 4, name: '32 pcs Classique Dinner sets', price: 7500, image: '32pc.png' },
  { id: 5, name: '38 pcs Classique Dinner sets', price: 6000, image: '38pc.png' },
  { id: 6, name: '7pcs Aluminium Sufurias', price: 5800, image: 'Alumini set.png' },
  { id: 7, name: '4 tier Multipurpose metallic rack', price: 5500, image: 'black stand wheels.png' },
  { id: 8, name: 'Ceramic butter container with knife', price: 1800, image: 'butter.png' },
  { id: 9, name: '2 sided bamboo chopping board', price: 950, image: 'cb.png' },
  { id: 10, name: 'Ceramic sugar dishe set with stand', price: 950, image: 'ceramic dishes.png' },
  { id: 11, name: 'Cheffing dishes', price: 6800, image: 'cheffing dish.png' },
  { id: 12, name: 'Copper pan', price: 3500, image: 'copper pan.png' },
  { id: 13, name: '3 layer triangular corner shelf', price: 3500, image: 'cornershelf.jpg' },
  { id: 14, name: '12 pcs signature Die cast cookware set', price: 12500, image: 'Die cast set.png' },
  { id: 15, name: '2L nonbreakable flasks', price: 1800, image: 'flasks.png' },
  { id: 16, name: '2L hot water bottle with faux fur', price: 1300, image: 'fluffybot.png' },
  { id: 17, name: '36cm double grill pan', price: 2800, image: 'grillpan.png' },
  { id: 18, name: 'Nima mini electric grinder (dry foods)', price: 2000, image: 'grinder.png' },
  { id: 19, name: 'Unique humidifier', price: 1800, image: 'humidifiers.png' },
  { id: 20, name: '400ml Rechargable portable blender', price: 1500, image: 'juicecup.png' },
  { id: 21, name: 'Quality knife set', price: 3500, image: 'knife set.png' },
  { id: 22, name: 'Home and office twin sim card landline', price: 3900, image: 'landline.png' },
  { id: 23, name: 'Matress protector 6*6', price: 2800, image: 'matressprotec.png' },
  { id: 24, name: 'Heavy lemon squeezer', price: 1000, image: 'metal strainer.png' },
  { id: 25, name: 'Unique reusable metal straws set', price: 1000, image: 'metalstraws.png' },
  { id: 26, name: 'Mini hot water bottle 350 ml', price: 650, image: 'minibot.png' },
  { id: 27, name: 'Granite non stick partitioned pan', price: 1800, image: 'part pan.png' },
  { id: 28, name: 'Portable fan (pink, purple, white blue)', price: 750, image: 'portfan.png' },
  { id: 29, name: 'Eurochef 6L air fryer', price: 8500, image: 'airfry.png' },
  { id: 30, name: '6 layer shoe rack', price: 2500, image: 'rack.png' },
  { id: 31, name: 'REDBERRY stainless steel bar spoon', price: 400, image: 'REDBERRY bar spoon.jpg' },
  { id: 32, name: 'REDBERRY stainless steel bar strainer', price: 500, image: 'REDBERRY bar strainer.jpg' },
  { id: 33, name: 'REDBERRY stainless steel ice tong', price: 300, image: 'REDBERRY ice tong.jpg' },
  { id: 34, name: 'REDBERRY stainless steel peg measure Twins [30 & 60 ml]', price: 250, image: 'REDBERRY peg measure.jpg' },
  { id: 35, name: 'REDBERRY 5L pressure cooker', price: 3500, image: 'REDBERRY pressure cooker.jpg' },
  { id: 36, name: 'REGAL 3L glass flask', price: 2500, image: 'REGAL 3l glass flasks.jpg' },
  { id: 37, name: 'Silicone cooking spoons ans knife set', price: 4500, image: 'set.png' },
  { id: 38, name: 'Shakers', price: 550, image: 'shakers.png' },
  { id: 39, name: 'Unique wine glasses 6pcs set', price: 2800, image: 'stain glass.png' },
  { id: 40, name: 'Microwave stand', price: 1800, image: 'stand.png' },
  { id: 41, name: 'Adjustable washing machine trolley stand 56*56cm', price: 2500, image: 'stands.png' },
  { id: 42, name: 'Ceramic sugar dishes', price: 30, image: 'sugar dishes.png' },
  { id: 43, name: 'Table mats design 1 (6pcs)', price: 1200, image: 'tmat1.png' },
  { id: 44, name: 'Table mats design 2 (6pcs)', price: 1200, image: 'tmat2.png' },
  { id: 45, name: 'Table mats design 3 (6pcs)', price: 1200, image: 'tmat3.png' },
  { id: 46, name: 'Table mats design 4 (6pcs)', price: 1200, image: 'tmat4.png' },
  { id: 47, name: 'Original quality - heavy duty material, safe mandoline slicer', price: 2500, image: 'veggie slicer.png' },
  //{ id: 6, name: 'Product 2', price: 30, image: 'product2.jpg' },
  //{ id: 6, name: 'Product 2', price: 30, image: 'product2.jpg' },
  //{ id: 6, name: 'Product 2', price: 30, image: 'product2.jpg' },
];

function displayProducts() {
  const productsSection = document.getElementById('products');

  products.forEach(product => {
    const productDiv = document.createElement('div');
    productDiv.className = 'product';
    productDiv.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>KES ${product.price}</p>
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
