const cartList = document.querySelector("#cartList");
const sumElement = document.querySelector("#sum");

let cart = [];

try {
  const saved = localStorage.getItem("cart");
  cart = JSON.parse(saved) || [];
} catch (error) {
  console.log("Could not read saved cart");
}

console.log(cart);

function save() {
  const text = JSON.stringify(cart);
  localStorage.setItem("cart", text);
}

// function render() {
//     cartList.textContent = "";

//     for (let i = 0; i < cart.length; i++) {
//         const li = document.createElement("li");
//         const namnElement = document.createElement("p")
//         const prisElement = document.createElement("p")

//         namnElement.textContent = cart[i].name;
//         prisElement.textContent = cart[i].price;

//         li.appendChild(namnElement);
//         li.appendChild(prisElement);

//         cartList.appendChild(li);
//         console.log(cartList)
//     }
// }

// render();

function render() {
  cartList.textContent = "";
  for (const item of cart) {
    const li = document.createElement("li");
    const namnElement = document.createElement("p");
    const prisElement = document.createElement("p");

    namnElement.className = "cart-name";
    prisElement.className = "cart-price";

    namnElement.textContent = item.name;
    prisElement.textContent = `${item.price} SEK`;

    li.appendChild(namnElement);
    li.appendChild(prisElement);

    cartList.appendChild(li);
    console.log(cartList);
  }
  sumElement.className = "total-sum";
  sumElement.textContent = `Total: ${updateSum()} SEK`;
}

save();
render();

function updateSum() {
  let sum = 0;
  for (const item of cart) {
    sum = item.price + sum;
  }
  return sum; // Moved outside of the for loop
}
