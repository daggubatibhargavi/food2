document.addEventListener("DOMContentLoaded", function () {
  const ordersContainer = document.getElementById("ordersContainer");

  const pastOrders = JSON.parse(localStorage.getItem("pastOrders")) || [];

  if (pastOrders.length === 0) {
    ordersContainer.innerHTML = "<p>No past orders found.</p>";
    return;
  }

  pastOrders.forEach((order) => {
    const orderDiv = document.createElement("div");
    orderDiv.classList.add("order");
    // orderDiv.style.width = "80%";

    const orderHeader = document.createElement("h3");
    orderHeader.textContent = `Order ID: ${order.orderID} | Customer: ${order.name}`;
    orderDiv.appendChild(orderHeader);

    order.items.forEach((item, itemIndex) => {
      const itemDiv = document.createElement("div");
      itemDiv.classList.add("order-item");

      const itemInfo = document.createElement("p");
      itemInfo.textContent = `${item.Name} - $${item.price}`;

      const ratingInput = document.createElement("input");
      ratingInput.type = "number";
      ratingInput.min = "1";
      ratingInput.max = "5";
      ratingInput.value =
        localStorage.getItem(`rating-${order.orderID}-${itemIndex}`) || "";

      const submitButton = document.createElement("button");
      submitButton.textContent = "Submit Rating";
      // const feedbackContainer = document.createElement("div");
      // feedbackContainer.classList.add("feedback-container");

      // Feedback section
      // const feedbackParagraph = document.createElement("p");
      // feedbackParagraph.textContent =
      //   localStorage.getItem(`feedback-${order.orderID}-${item.Name}`) || " ";

      // const feedbackInput = document.createElement("textarea");
      // feedbackInput.placeholder = "Write your feedback about this item...";
      // feedbackInput.rows = 2;
      // feedbackInput.cols = 40;

      // const feedbackButton = document.createElement("button");
      // feedbackButton.textContent = "Submit Feedback";

      // feedbackButton.addEventListener("click", () => {
      //   const feedback = feedbackInput.value.trim();
      //   if (feedback) {
      //     // Save feedback to localStorage
      //     localStorage.setItem(
      //       `feedback-${order.orderID}-${item.Name}`,
      //       feedback
      //     );

      //     feedbackParagraph.textContent = `Feedback: ${feedback}`;
      //     alert(`Thank you for your feedback on ${item.Name}!`);
      //     feedbackInput.value = ""; // Clear input field
      //   } else {
      //     alert("Please enter valid feedback.");
      //   }
      // });

      submitButton.addEventListener("click", () => {
        const rating = parseInt(ratingInput.value, 10);
        if (rating >= 1 && rating <= 5) {
          localStorage.setItem(`rating-${order.orderID}-${itemIndex}`, rating);
          alert(`Thank you for rating ${item.Name}: ${rating} stars!`);
        } else {
          alert("Please enter a rating between 1 and 5.");
        }
      });

      // feedbackContainer.appendChild(feedbackParagraph);
      // feedbackContainer.appendChild(feedbackInput);
      // feedbackContainer.appendChild(feedbackButton);

      itemDiv.appendChild(itemInfo);
      itemDiv.appendChild(ratingInput);
      itemDiv.appendChild(submitButton);

      // itemDiv.appendChild(feedbackContainer);

      orderDiv.appendChild(itemDiv);
    });

    ordersContainer.appendChild(orderDiv);
  });
});
