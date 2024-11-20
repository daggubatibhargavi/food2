const nonVegStarter = [
  {
    id: 1,
    Name: "Lollipops",
    Image:
      "https://www.giggsmeat.com/wp-content/uploads/2020/10/Z03iEXDbcD-min.jpg",
    price: "$170",
  },
  {
    id: 2,
    Name: "chicken tikka",
    Image:
      "https://c.ndtvimg.com/2023-01/9urb16u8_chicken-tikka_625x300_21_January_23.jpg",
    price: "$250",
  },
];
const vegStarter = [
  {
    id: 1,
    Name: "cripsy corn",
    Image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvb2dDgsPE3S4Vr66DTgODQs4FbxXttTehZg&s",
    price: "$170",
  },
  {
    id: 2,
    Name: "mushroom 65",
    Image: "https://i.ytimg.com/vi/7El091mChqc/sddefault.jpg",
    price: "$250",
  },
];
const seaFood = [
  {
    id: 1,
    Name: "fried prawn",
    Image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuNJQUUlYJzkiOEZKiNnL_wA_ojVuvDlCaqQ&s",
    price: "$170",
  },
  {
    id: 2,
    Name: "fish curry",
    Image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG6q-DRuudvvDLKH8WRSEJaSRGAQYpXHLqYw&s",
    price: "$250",
  },
];
const mainCourse = [
  {
    id: 1,
    Name: "mutton biriyani",
    Image:
      "https://i.ytimg.com/vi/s4YsKuoYTe8/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLA8DNcG2opFjrju1AlULhM7SOQLfA",
    price: "$170",
  },
  {
    id: 2,
    Name: "mushroom biriyani",
    Image:
      "https://palatesdesire.com/wp-content/uploads/2021/07/Mushroom_pulao_recipe.jpg",
    price: "$250",
  },
];
const noodles = [
  {
    id: 1,
    Name: "garlic noodles",
    Image:
      "https://pinchandswirl.com/wp-content/uploads/2022/11/Garlic-Butter-Noodles_sq.jpg",
    price: "$170",
  },
  {
    id: 2,
    Name: "cripsy chilli egg noodles",
    Image:
      "https://images.immediate.co.uk/production/volatile/sites/30/2020/12/Noodles-with-chilli-oil-eggs-6ec34e9.jpg?resize=768,574",
    price: "$250",
  },
];
const salads = [
  {
    id: 1,
    Name: "avocado salad",
    Image:
      "https://www.allrecipes.com/thmb/BIMX_PChQD0xvRn4hLsaPyv9PH4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/1124818-156e56b4500b4a3aae1eabe5004850c9.jpg",
    price: "$170",
  },
  {
    id: 2,
    Name: "chicken salad",
    Image: "https://static.toiimg.com/photo/58750154.cms",
    price: "$250",
  },
];
const desserts = [
  {
    id: 1,
    Name: "caramelToppedIceCream",
    Image:
      "https://stordfkenticomedia.blob.core.windows.net/df-us/rms/media/recipesmedia/recipes/retail/x17/2003/feb/17244-caramel-topped-ice-cream-dessert-600x600.jpg?ext=.jpg",
    price: "$170",
  },
  {
    id: 2,
    Name: "block forest",
    Image:
      "https://biancazapatka.com/wp-content/uploads/2023/07/schwarzwaelder-kirsch-nachtisch-720x1008.jpg",
    price: "$250",
  },
];

const soups = [
  {
    id: 1,
    Name: "vegtable soup",
    Image:
      "https://www.howtocook.recipes/wp-content/uploads/2021/11/Vegetable-soup-recipe.jpg",
    price: "$170",
  },
  {
    id: 2,
    Name: "minestone soup",
    Image:
      "https://kristineskitchenblog.com/wp-content/uploads/2022/02/minestrone-soup-recipe-22.jpg",
    price: "$250",
  },
];
// container.innerHTML = "";
function displayMenuItems(category, items) {
  const container = document.getElementById("menuContainer");
  container.innerHTML = "";
  const categoryTitle = document.createElement("h2");
  categoryTitle.textContent = category;
  container.appendChild(categoryTitle);

  items.forEach((item) => {
    const itemCard = document.createElement("div");
    itemCard.classList.add("menu-item-card");

    const itemImage = document.createElement("img");
    itemImage.src = item.Image;
    itemImage.style.width = "250px";
    itemImage.classList.add("menu-item-image");

    const itemName = document.createElement("h3");
    itemName.textContent = item.Name;

    const itemPrice = document.createElement("p");
    itemPrice.textContent = `Price: ${item.price}`;

    // container.style.display = "flex";
    // container.style.flexWrap = "wrap";
    // container.style.gap = "20px";
    // container.style.maxWidth = "100%";
    // container.style.maxHeight = "70%";
    // container.style.margin = "40px auto";

    container.style.cssText = `display: flex;flex-wrap: wrap;gap: 20px;width:100%;margin: 40px auto;height:auto`;
    // container.innerHTML = "";

    const addToCartButton = document.createElement("button");
    addToCartButton.textContent = "Add to Cart";
    addToCartButton.addEventListener("click", () => addToCart(item));

    itemCard.appendChild(itemImage);
    itemCard.appendChild(itemName);
    itemCard.appendChild(itemPrice);
    itemCard.appendChild(addToCartButton);
    container.appendChild(itemCard);
  });
}
function bhargavi(category) {
  if (category === "Non-Veg") {
    displayMenuItems("Non-Veg Starters", nonVegStarter);
  } else if (category === "Veg") {
    displayMenuItems("Veg Starters", vegStarter);
  } else if (category === "sea-food") {
    displayMenuItems("seaFood", seaFood);
  } else if (category === "main-course") {
    displayMenuItems("mainCourse", mainCourse);
  } else if (category === "noodles") {
    displayMenuItems("noodles", noodles);
  } else if (category === "salads") {
    displayMenuItems("salads", salads);
  } else if (category === "desserts") {
    displayMenuItems("desserts", desserts);
  } else if (category === "soups") {
    displayMenuItems("soups", soups);
  }
}
let cart = [];
function addToCart(item) {
  const foundItem = cart.find((cartItem) => cartItem.Name === item.Name);

  if (foundItem) {
    foundItem.itemCount += 1;
    // console.log(`itemCount "${item.Name}" updated to ${foundItem.itemCount.`);
    alert(`item of "${item.Name}" added to ${foundItem.itemCount} times.`);
  } else {
    cart.push({ ...item, itemCount: 1 });
    // console.log(`Item "${item.Name}" added to cart.`);
    alert(`Item "${item.Name}" added to cart.`);
    window.location.href = "./order.html";
  }
  return cart;
}
