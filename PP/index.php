<?php
// Simulating database functionality with an array
$products = [
    ['id' => 1, 'name' => 'Product 1', 'price' => 20, 'image' => 'product1.jpg'],
    ['id' => 2, 'name' => 'Product 2', 'price' => 30, 'image' => 'product2.jpg'],
    // Add more products as needed
];

// Business description
$businessDescription = "Welcome to our online store! We offer a wide range of high-quality products.";

// Render products as JSON for JavaScript to use
$productsJson = json_encode($products);
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
    <title>Online Store</title>
</head>
<body>
<header>
    <h1>Online Store</h1>
    <div id="cart">
        <span id="cart-count">0</span>
        <button onclick="openCart()">Open Cart</button>
    </div>
</header>

<section id="description">
    <h2>Business Description</h2>
    <p><?php echo $businessDescription; ?></p>
</section>

<section id="products">
    <!-- Product listing goes here -->
</section>

<div id="cart-modal" class="modal">
    <div class="modal-content">
        <span class="close" onclick="closeCart()">&times;</span>
        <h2>Shopping Cart</h2>
        <ul id="cart-items">
            <!-- Cart items go here -->
        </ul>
    </div>
</div>

<script>
    // Pass PHP variables to JavaScript
    const products = <?php echo $productsJson; ?>;
</script>
<script src="script.js"></script>
</body>
</html>
