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
  lettotalR = 0;
  for (const R of resistors) {
    totalR += R.resistance;
  }
  return totalR;
}

const drinks = [
  { name: "Mojito", price: 20 },
  { name: "Coke", price: 2 },
  { name: "Hot Chocolate", price: 5 },
  { name: "Wine", price: 150 },
];

function softDrinks(drinks) {
  for (let i = 0; i < drinks.length - 1; i++) {
    if (drinks[i].price > drinks[i + 1].price) {
      let temp = drinks[i];
      drinks[i] = drinks[i + 1];
      drinks[i + 1] = temp;
    }
  }
  return drinks;
}

function paths(places) {
  let paths = 1;
  for (let i = 1; i < places + 1; i++) {
    paths *= i;
  }
  return paths;
}

const numbers2 = [2, 324, 23, 5, 1, 7, 56, 32, 2];

function sevenBoom(numbers2) {
  if (numbers2.includes(7)) {
    return "Boom!";
  } else {
    return "Nema 7";
  }
}

console.log(sevenBoom(numbers2));
