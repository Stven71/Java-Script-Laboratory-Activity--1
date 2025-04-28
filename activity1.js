
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Discount and Tax Calculator</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #f4f4f9;
      margin: 0;
      padding: 20px;
    }

    h1 {
      text-align: center;
      color: #333;
    }

    .container {
      max-width: 500px;
      margin: 0 auto;
      padding: 20px;
      background-color: #fff;
      border-radius: 8px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }

    .result-container {
      padding: 20px;
      border-radius: 8px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      margin-top: 20px;
    }

    .result {
      font-size: 18px;
      margin-bottom: 10px;
      padding: 10px;
      border-radius: 5px;
    }

    .total-payment { background-color: #c3e6cb; color: #155724; }
    .discount { background-color: #ffecb3; color: #856404; }
    .price-after-discount { background-color: #d1ecf1; color: #0c5460; }
    .tax { background-color: #f8d7da; color: #721c24; }
    .final-price { background-color: #28a745; color: white; font-weight: bold; }
  </style>
</head>
<body>

<h1>Product Price Calculator</h1>

<div class="container">
  <form id="calculator-form">
    <label for="product">Choose Product:</label>
    <select id="product" required>
      <option value="mouse">Mouse</option>
      <option value="keyboard">Keyboard</option>
      <option value="monitor">Monitor</option>
      <option value="motherboard">Motherboard</option>
      <option value="harddrive">Hard Drive</option>
      <option value="table">Table</option>
    </select><br><br>

    <label for="quantity">Quantity:</label>
    <input type="number" id="quantity" value="1" min="1" required><br><br>

    <label for="isStudent">Are you a student?</label>
    <input type="checkbox" id="isStudent"><br><br>

    <button type="submit">Calculate</button>
  </form>

  <div id="result" class="result-container" style="display:none;">
    <div id="total-payment" class="result"></div>
    <div id="discount" class="result"></div>
    <div id="price-after-discount" class="result"></div>
    <div id="tax" class="result"></div>
    <div id="final-price" class="result"></div>
  </div>
</div>

<script>
  const prices = {
    mouse: 750,
    keyboard: 1500,
    monitor: 12000,
    motherboard: 4000,
    harddrive: 2000,
    table: 1500
  };

  const taxRate = 0.12;  // 12% tax rate

  // Function to handle calculations
  function calculatePrice(event) {
    event.preventDefault();

    const product = document.getElementById("product").value;
    const quantity = parseInt(document.getElementById("quantity").value);
    const isStudent = document.getElementById("isStudent").checked;

    let pricePerItem = prices[product];
    let totalPrice = pricePerItem * quantity;
    let discount = 0;

    // Calculate discount based on product and total price
    if (product === "mouse" && totalPrice > 1000) discount = totalPrice * 0.10;
    else if (product === "keyboard" && totalPrice > 2000) discount = totalPrice * 0.15;
    else if (product === "monitor" && totalPrice > 4000) discount = totalPrice * 0.07;
    else if (product === "motherboard" && totalPrice > 6000) discount = totalPrice * 0.06;

    // Apply student discount if applicable
    if (isStudent) discount += (totalPrice - discount) * 0.05;

    const discountedPrice = totalPrice - discount;
    const tax = discountedPrice * taxRate;
    const finalPrice = discountedPrice + tax;

    // Display the results
    document.getElementById("total-payment").textContent = `Total Payment: ₱${totalPrice.toFixed(2)}`;
    document.getElementById("discount").textContent = `Discount: ₱${discount.toFixed(2)}`;
    document.getElementById("price-after-discount").textContent = `Price After Discount: ₱${discountedPrice.toFixed(2)}`;
    document.getElementById("tax").textContent = `Tax: ₱${tax.toFixed(2)}`;
    document.getElementById("final-price").textContent = `Final Price: ₱${finalPrice.toFixed(2)}`;

    // Show the result container
    document.getElementById("result").style.display = "block";
  }

  // Attach the calculate function to the form submit event
  document.getElementById("calculator-form").addEventListener("submit", calculatePrice);
</script>

</body>
</html>
