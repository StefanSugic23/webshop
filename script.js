// Elements
const header = document.querySelector("#header");
const nav = document.querySelector("#nav");
const main = document.querySelector("#main");
const productsDiv = document.querySelector("#productsDiv");
const productsList = document.querySelector("#products");
const footer = document.querySelector("#footer");
const myShop = document.querySelector("#myShop");

// Product Data
const products = [
  { id: 1, name: "Headphones", price: 499, emoji: "🎧", category: "audio" },
  { id: 2, name: "Keyboard", price: 799, emoji: "⌨️", category: "computer" },
  { id: 3, name: "Mouse", price: 349, emoji: "🖱️", category: "computer" },
  { id: 4, name: "Webcam", price: 599, emoji: "📷", category: "computer" },
  { id: 5, name: "Speaker", price: 699, emoji: "🔊", category: "audio" },
  { id: 6, name: "Phone case", price: 149, emoji: "📱", category: "phone" },
  { id: 7, name: "Charger", price: 199, emoji: "🔌", category: "phone" },
  { id: 8, name: "Backpack", price: 899, emoji: "🎒", category: "other" },
  { id: 9, name: "Desk lamp", price: 299, emoji: "💡", category: "other" },
  { id: 10, name: "Notebook", price: 99, emoji: "📓", category: "other" },
];

// Loading saved cart
let cart = [];

try {
  const saved = localStorage.getItem("cart");
  cart = JSON.parse(saved) || [];
} catch (error) {
  console.log("Could not read saved cart");
}

// Saving the cart
function save() {
  const text = JSON.stringify(cart);
  localStorage.setItem("cart", text);
}

// Drawing the products
function render() {
  productsList.textContent = "";

  for (let i = 0; i < products.length; i++) {
    // Create elements
    const li = document.createElement("li");
    const emojiElement = document.createElement("p");
    const namnElement = document.createElement("p");
    const prisElement = document.createElement("p");
    const buttonElement = document.createElement("button");

    emojiElement.className = "emoji";
    namnElement.className = "name";
    prisElement.className = "price";

<<<<<<< HEAD
    // Fill in content
    emojiElement.textContent = products[i].emoji;
    namnElement.textContent = products[i].name;
    prisElement.textContent = products[i].price + " SEK";
    buttonElement.textContent = "Add to cart";
=======
    const li = document.createElement("li")
    const emojiElement = document.createElement("p")
    const namnElement = document.createElement("p")
    const prisElement = document.createElement("p")
    const buttonElement = document.createElement("button")

    emojiElement.textContent = products[i].emoji
    namnElement.textContent = products[i].name
    prisElement.textContent = products[i].price + " kr"
    buttonElement.textContent = "Add to cart"
    emojiElement.classList.add("emoji")
    buttonElement.classList.add("buttonAdd")
>>>>>>> eb526b8 (Added functionality,css and modify webshop)

    // Add to cart on click
    buttonElement.addEventListener("click", function () {
<<<<<<< HEAD
      const newProduct = {
        name: products[i].name,
        price: products[i].price,
      };

      cart.push(newProduct);
      render();
      save();
    });
=======

  const product = products[i];

  let found = false;

  for (let item of cart) {
    if (item.name === product.name) {
      item.quantity++;
      found = true;
      break;
    }
  }

  if (found === false) {
    const newProduct = {
      name: product.name,
      price: product.price,
      quantity: 1,
      category: product.category
    };

    cart.push(newProduct);
  }

  render();
  save();
});
>>>>>>> eb526b8 (Added functionality,css and modify webshop)

    // Put it on the page
    li.appendChild(emojiElement);
    li.appendChild(namnElement);
    li.appendChild(prisElement);
    li.appendChild(buttonElement);

    productsList.appendChild(li);

<<<<<<< HEAD
    console.log(productsList);
=======
    li.appendChild(emojiElement)
    li.appendChild(namnElement)
    li.appendChild(prisElement)
    li.appendChild(buttonElement)

    productsList.appendChild(li)

    


>>>>>>> eb526b8 (Added functionality,css and modify webshop)
  }
}

render();
<<<<<<< HEAD
=======





>>>>>>> eb526b8 (Added functionality,css and modify webshop)
