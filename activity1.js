// Prices of each item
let mousePrice = 1200;
let keyboardPrice = 2500;
let monitorPrice = 5000;
let motherboardPrice = 7000;

// Apply individual discounts
if (mousePrice > 1000) {
  mousePrice *= 0.90; // 10% discount
}
if (keyboardPrice > 2000) {
  keyboardPrice *= 0.85; // 15% discount
}
if (monitorPrice > 4000) {
  monitorPrice *= 0.93; // 7% discount
}
if (motherboardPrice > 6000) {
  motherboardPrice *= 0.94; // 6% discount
}

// Calculate total of any two remaining items
let totalTwoItems = monitorPrice + motherboardPrice;
if (totalTwoItems > 10000) {
  totalTwoItems *= 0.90; // Additional 10% discount
}

// Apply student discount (5%) on selected item (example: on mouse)
mousePrice *= 0.95; // 5% off

// Calculate final total
let finalTotal = mousePrice + keyboardPrice + totalTwoItems;

// Apply tax if needed
if (finalTotal > 5000) {
  finalTotal *= 1.08; // Add 8% tax
}

// Show the result
console.log("The final total amount is: ₱" + finalTotal.toFixed(2));
