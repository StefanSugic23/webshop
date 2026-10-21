let cart = [];

try {
  const saved = localStorage.getItem("cart");
  cart = JSON.parse(saved) || [];
} catch (error) {
  console.log("Could not read saved cart");
}

console.log(cart);