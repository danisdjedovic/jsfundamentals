const cart = [
  { title: "Book", quantity: 3, price: 20 },
  { title: "TV", quantity: 1, price: 820 },
  { title: "Bread", quantity: 1, price: 2 },
  { title: "T-Shirt", quantity: 5, price: 10 },
  { title: "Socks", quantity: 7, price: 4 },
];

function getTotalPriceOfCartItems(cart) {
  let sum = 0;
  for (let i = 0; i < cart.length; i++) {
    sum += cart[i].quantity * cart[i].price;
  }
  return sum;
}

console.log(getTotalPriceOfCartItems(cart));
