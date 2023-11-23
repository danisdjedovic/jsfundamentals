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

function getQuantityOfCartItems(cart) {
  let sum = 0;
  for (let i = 0; i < cart.length; i++) {
    sum += cart[i].quantity;
  }
  return sum;
}

const numbers = [1, 34, 21, 97, 102, 25];

function findBiggestNumber(numbers) {
  let biggestNumber = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > biggestNumber) {
      biggestNumber = numbers[i];
    }
  }
  return biggestNumber;
}

const items = [
  { name: "Lopta", color: "red" },
  { name: "Stol", color: "blue" },
  { name: "Daska", color: "blue" },
  { name: "Pernica", color: "white" },
];

function filterBlueObjects(items) {
  for (const item of items) {
    if (item.color === "blue") console.log(item);
  }
}

const resistors = [
  { name: "R1", resistance: 10 },
  { name: "R2", resistance: 40 },
  { name: "R3", resistance: 20 },
  { name: "R4", resistance: 5 },
];

function getTotalResistance(resistors) {
  totalR = 0;
  for (const R of resistors) {
    totalR += R.resistance;
  }
  return totalR;
}

console.log(getTotalResistance(resistors));
