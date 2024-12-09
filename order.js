// document.addEventListener("DOMContentLoaded", function () {
//   let cartData = JSON.parse(localStorage.getItem("cart")) || [];
//   const cartItemsContainer = document.getElementById("cartItems");
//   const orderButton = document.getElementById("orderButton");
//   const orderStatus = document.getElementById("orderStatus");

//   function displayCart() {
//     cartItemsContainer.innerHTML = "";

//     if (cartData.length === 0) {
//       cartItemsContainer.textContent = "No items in cart";
//       return;
//     }

//     let totalAmount = 0;

//     cartData.forEach((item) => {
//       const price = parseFloat(item.price.replace("$", "")) || 0;
//       const quantity = parseInt(item.quantity, 10) || 1;

//       totalAmount += price * quantity;

//       const itemContainer = document.createElement("div");
//       itemContainer.classList.add("cart-item");

//       itemContainer.innerHTML = `
//         <p>${item.Name} - $${price} x ${quantity}</p>
//         <label for="rating-${item.id}">Rating:</label>
//         <div id="rating-${item.id}" class="star-rating">
//             <i class="fa fa-star" data-rating="1"></i>
//             <i class="fa fa-star" data-rating="2"></i>
//             <i class="fa fa-star" data-rating="3"></i>
//             <i class="fa fa-star" data-rating="4"></i>
//             <i class="fa fa-star" data-rating="5"></i>
//         </div>
//         <label for="review-${item.id}">Review:</label>
//         <textarea id="review-${item.id}" placeholder="Write your review"></textarea>
//       `;

//       cartItemsContainer.appendChild(itemContainer);

//       const stars = itemContainer.querySelectorAll(".fa-star");
//       stars.forEach((star) => {
//         star.addEventListener("click", function () {
//           const rating = parseInt(star.getAttribute("data-rating"));

//           stars.forEach((s) => s.classList.remove("selected"));
//           for (let i = 0; i < rating; i++) {
//             stars[i].classList.add("selected");
//           }

//           console.log(`Selected Rating for item ${item.id}: ${rating}`);
//         });
//       });
//     });

//     cartItemsContainer.innerHTML += `<h3>Total: $${totalAmount}</h3>`;
//   }

//   displayCart();

//   orderButton.addEventListener("click", function () {
//     console.log("  orderButton");

//     if (cartData.length === 0) {
//       orderStatus.textContent =
//         "Your cart is empty. Please add items to the cart.";
//     } else {
//       submitOrder();
//     }
//   });

//   function submitOrder() {
//     const reviews = [];

//     cartData.forEach((item) => {
//       const rating = document.querySelector(`#rating-${item.id} .selected`)
//         ? document
//             .querySelector(`#rating-${item.id} .selected`)
//             .getAttribute("data-rating")
//         : 0;
//       const reviewText = document.getElementById(`review-${item.id}`).value;

//       reviews.push({
//         itemId: item.id,
//         rating: rating,
//         review: reviewText,
//       });
//     });

//     console.log("Reviews Submitted:", reviews);

//     processPayment();
//   }

//   function processPayment() {
//     orderButton.disabled = true;
//     orderButton.textContent = `Processing payment...`;

//     setTimeout(() => {
//       orderStatus.textContent = `Your order has been placed successfully!`;
//       orderButton.textContent = "Order Placed";
//       cartData = [];
//       localStorage.setItem("cart", JSON.stringify(cartData));

//       cartItemsContainer.innerHTML = "Your cart is empty.";
//     }, 2000);
//   }
// });

document.addEventListener("DOMContentLoaded", function () {
  const orderForm = document.getElementById("orderForm");
  const orderButton = document.getElementById("orderButton");
  const orderStatus = document.getElementById("orderStatus");
  const cartItemsContainer = document.getElementById("cartItems");

  let cartData = JSON.parse(localStorage.getItem("cart")) || [];
  console.log("Raw cart data from localStorage:", cartData);
  console.log("Is cartData an array?", Array.isArray(cartData));

  // Ensure cartData is an array
  if (!Array.isArray(cartData)) {
    cartData = Object.values(cartData);
    console.log("Converted cartData:", cartData);
  }

  function displayCart() {
    cartItemsContainer.innerHTML = "";
    if (cartData.length === 0) {
      cartItemsContainer.textContent = "No items in cart";
      return;
    }

    let totalAmount = 0;
    cartData.forEach((item) => {
      const price =
        item.price && typeof item.price === "string"
          ? Number(item.price.replace("$", "")) || 0
          : 0;
      // const price = Number(item.price.replace("$", "")) || 0;
      const quantity = parseInt(item.quantity, 10) || 1;
      totalAmount += price * quantity;

      const itemContainer = document.createElement("div");
      itemContainer.innerHTML = `<p>${item.Name} - $${price} x ${quantity}</p>`;
      console.log(item.Name);
      console.log(price);

      cartItemsContainer.appendChild(itemContainer);
    });

    cartItemsContainer.innerHTML += `<h3>Total: $${totalAmount.toFixed(
      2
    )}</h3>`;
  }

  orderForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const notes = document.getElementById("notes").value;

    if (!name || !email) {
      orderStatus.textContent = "Name and Email are required.";
      return;
    }

    const orderDetails = {
      name,
      email,
      notes,
      cart: cartData,
    };

    localStorage.setItem("orderDetails", JSON.stringify(orderDetails));
    processPayment();
  });

  function processPayment() {
    orderButton.disabled = true;
    orderButton.textContent = "Processing Payment...";

    setTimeout(() => {
      orderStatus.textContent = "Your order has been placed successfully!";
      localStorage.removeItem("cart"); // Clear cart
      cartData = [];
      displayCart();
      orderButton.textContent = "Place Order";
      orderButton.disabled = false;
    }, 2000);
  }

  displayCart();
});
