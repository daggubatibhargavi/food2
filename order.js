let cartData = JSON.parse(localStorage.getItem("cart")) || [];
console.log(cartData);

function displayCart() {
  const cartItemsContainer = document.getElementById("cartItems");
  cartItemsContainer.innerHTML = "";

  if (cartData.length === 0) {
    cartItemsContainer.textContent = "No items in cart";
    return;
  }

  let totalAmount = 0;

  cartData.forEach((item) => {
    console.log("Processing item:", item);

    const price = parseFloat(item.price.replace("$", "")) || 0;
    const quantity = parseInt(item.quantity, 10) || 1;

    totalAmount += price * quantity;

    cartItemsContainer.innerHTML += `<p>${item.Name} - $${price} x ${quantity}</p>`;
  });

  cartItemsContainer.innerHTML += `<h3>Total: $${totalAmount}</h3>`;
}

displayCart();

const orderButton = document.getElementById("orderButton");
orderButton.addEventListener("click", function () {
  if (cartData.length === 0) {
    document.getElementById("orderStatus").textContent =
      "Your cart is empty. Please add items to the cart.";
  } else {
    selectPaymentMethod();
  }
});

function selectPaymentMethod() {
  const paymentMethod = prompt(
    "Select payment method: \n1. PayPal\n2. MasterCard\n3. Visa\n4. American Express"
  );

  if (paymentMethod === "1" || paymentMethod.toLowerCase() === "paypal") {
    processPayment("PayPal");
  } else if (
    paymentMethod === "2" ||
    paymentMethod.toLowerCase() === "mastercard"
  ) {
    processPayment("MasterCard");
  } else if (paymentMethod === "3" || paymentMethod.toLowerCase() === "visa") {
    processPayment("Visa");
  } else if (
    paymentMethod === "4" ||
    paymentMethod.toLowerCase() === "american express"
  ) {
    processPayment("American Express");
  } else {
    document.getElementById("orderStatus").textContent =
      "Invalid payment method selected. Please try again.";
  }
}

function processPayment(method) {
  orderButton.disabled = true;
  orderButton.textContent = `Processing payment with ${method}...`;

  setTimeout(() => {
    document.getElementById(
      "orderStatus"
    ).textContent = `Your order has been placed successfully using ${method}!`;
    orderButton.textContent = "Order Placed";

    localStorage.removeItem("cart");
    cart = [];
    // localStorage.setItem("cart", JSON.stringify(cart));
    displayCart();
  }, 2000);
}
