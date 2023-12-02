<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "ukit db";

// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve ordered product details from the form
    $productName = $_POST["Product_Name"];
    $quantity = $_POST["Quantity"];

    // Insert data into the 'orders' table
    $sql = "INSERT INTO Orders (Product_Name, Quantity) VALUES ('$productName', $quantity)";

    if ($conn->query($sql) === TRUE) {
        echo "Order placed successfully!";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
}

// Close the database connection
$conn->close();
?>