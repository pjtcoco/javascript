// 1.
const order = ['Pizza', 'Coke', 'Ice Cream', 'Fries'];

const [mainDish, drink, ...sides] = order;
console.log(`Main dish: ${mainDish},\nDrink: ${drink},\nSides: ${sides} `);
console.log(order);

// 2.
const employee = {
  name: 'Alice',
  job: 'Developer',
  details: {
    city: 'Berlin',
    experience: 5,
  },
};
const {
  name,
  job,
  details: { city, experience },
} = employee;
console.log(`${name} works in ${city} and has ${experience} of experience`);

// 3.
const starters = ['Salad', 'Soup'];
const mains = ['Steak', 'Pasta'];
menu = [...starters, ...mains, 'Deserts'];
console.log(menu);

// 4.
const makeOrder = function (...items) {
  const numberOfItems = items.length;
  console.log(`You ordered ${numberOfItems} items: ${items.join(', ')}`);
};
makeOrder('Pizza', 'Pasta', 'Coke');

// 5.
const username = '';
const defaultName = 'Guest';
console.log(username || defaultName);

// Nullish Coalescing returns the first value which is not a nullish value and ' ' is not a nullish value so it returns it.
console.log(username ?? defaultName);

// 6.
function calcTip(bill, tipPercent) {
  //   tipPercent = tipPercent ?? 10;
  tipPercent = tipPercent || 10;
  const tip = (bill * tipPercent) / 100;
  // if tipPercent is missing, default to 10%

  const totalAmount = bill + tip;
  console.log(totalAmount);
}
calcTip(500, 10);
calcTip(450);
calcTip(80);

// 7.
const scores = [81];
let [first, second = 50] = scores;
console.log(first);
console.log(second);

// 8.
const user = {
  name: 'John',
  address: {
    city: 'Hamburg',
  },
};
console.log(user?.address?.street ?? `Street not Available`);

// 9.
const days = ['mon', 'tue', 'wed'];
const hours = {};
for (const day of days) {
  hours[day] = { open: 9, close: 17 };
}
console.log(hours);

// const hours = {
//   [days[0]]: {
//     open: 9,
//     close: 17,
//   },
//   [days[1]]: {
//     open: 9,
//     close: 17,
//   },
//   [days[2]]: {
//     open: 9,
//     close: 17,
//   },
// };
// console.log(hours);

// 10.
const menu1 = {
  starter: 'Salad',
  main: 'Steak',
  dessert: 'Cake',
};

for (const [name, food] of Object.entries(menu1)) {
  console.log(`(${name}: ${food})`);
}

// 11.
const attendees = ['Alice', 'Bob', 'Alice', 'Eve', 'Bob'];
const normalized = new Set(attendees);
console.log(`there are ${normalized.size} attendees:`, ...normalized);

// 12.
const rates = new Map([
  ['USD', 1],
  ['EUR', 0.9],
  ['GBP', 0.8],
]);
function convert(amount, from, to) {
  const rateFrom = rates.get(from);
  const rateTo = rates.get(to);
  const totalAmount = (amount / rateFrom) * rateTo;
  console.log(totalAmount);
}
convert(100, 'USD', 'EUR'); // 90
convert(200, 'EUR', 'USD');
convert(70, 'USD', 'GBP');

// 13.
for (let [currency, rate] of rates) {
  console.log(` ${currency} = ${rate} `);
}

// 14.
const input = ' Hello World! ';
console.log(input.trim().toLowerCase().replace('!', '.'));

// 15.
const name1 = 'john-doe-smith';
const rearranged = name1.split('-');
// console.log(
//   rearranged[0][0].toUpperCase() +
//     rearranged[0].slice(1) +
//     ' ' +
//     rearranged[1][0].toUpperCase() +
//     rearranged[1].slice(1) +
//     ' ' +
//     rearranged[2][0].toUpperCase() +
//     rearranged[2].slice(1)
// );

// 16.
const email = 'user@example.com';
console.log(email.split('@')[1]);

// 17.
function countWords(text) {
  const wordCounts = new Map();
  const arr = text.split(' ');

  for (const word of arr) {
    if (!word) continue;
    const count = wordCounts.get(word) || 0;
    wordCounts.set(word, count + 1);
  }
  console.log(wordCounts);
}
countWords('hi hi hello');
countWords('');

// 18.
const cart = [25, 15, 30, 10];
const [variable1, variable2, ...others] = cart;
const variables = [variable1, variable2];
console.log(variables, others);

function addition(...numbers) {
  let sum = 0;

  for (const number of numbers) {
    sum += number;
  }
  console.log(sum);
}
addition(...others);

// 19.
const basic = { name: 'Alice', age: 25 };
const extra = { city: 'Berlin', job: 'Engineer' };
const profile = { ...basic, ...extra };
console.log(
  'Profile:',
  profile,
  `\n`,
  profile?.hobbies?.length || `Hobbies property not found in Profile`
);

// 20.
const products = [
  { name: 'Laptop', price: 1200 },
  { name: 'Phone', price: 800 },
  { name: 'Tablet', price: 600 },
];
const newProduct = new Map();

for (const { name, price } of products) {
  newProduct.set(name, price);
}
console.log(newProduct);

function getPrice(productName) {
  if (newProduct.has(productName)) {
    console.log(`The ${productName} costs ${newProduct.get(productName)}EUR`);
  } else `Product not found `;
}
getPrice('Laptop');
