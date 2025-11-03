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
console.log(user.address?.street ?? `Street not Available`);

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
