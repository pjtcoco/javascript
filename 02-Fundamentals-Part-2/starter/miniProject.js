"use strict";
// Exercise 1
const a = 10;
const b = 20;
const c = 30;
const calc = (a + b) * (c / (2 - 5));
console.log(calc, typeof calc);

// Exercise 2
let x = "5";
let y = 3;
// const result = x + y;
// predicted result 53: this is because "+" serves primarily in concactinating so when a string and and a plus is put, it immediately concactinates
// console.log(result);

// const result = x - y;
// predicted result 2: the sole use of the operand is substraction so it converts the string to number and performs the operation
// console.log(result);

// const result = x * y;
// predicted result 15: the sole use of the operand is multiplication so it converts the string to number and performs the operation
// console.log(result);

const result = x / y;
// predicted result 5/3: the sole use of the operand is division so it converts the string to number and performs the operation
console.log(result);

// Exercise 3
// const firstName = prompt("Please enter your first name");
// const lastName = prompt("Please enter your last name");
// const birthYear = prompt("Please enter your year of birth");
// const age = 2025 - birthYear;
// console.log(`Hello ${firstName} ${lastName}! You are ${age} years old.`);

// Exercise 4
3;
("52");
10;
2.5;
true;

// Exercise 5
// const age1 = prompt(`Please enter your age`);
// if (age1 >= 18 && age1 < 65) {
//   console.log("You can drive");
// } else if (age1 < 18) {
//   console.log("You can learn driving");
// } else {
//   console.log("You are a senior driver");
// }

// Exercise 6

// const number = prompt(`Enter a number`);

// if (number % 3 == 0 && number % 5 == 0) {
//   console.log(`${number} is divisible by both 3 and 5.`);
// } else if (number % 3 == 0 || number % 5 == 0) {
//   console.log(`${number} is divisible by either 3 or 5.`);
// } else {
//   console.log(`${number} is divisible by neither 3 or 5. `);
// }
// Exercise 7
// for (let day = 1; day <= 7; day++) {
//   switch (day) {
//     case 1:
//       console.log("Today is Monday");
//       break;
//     case 2:
//       console.log("Today is Tuesday");
//       break;
//     case 3:
//       console.log("Today is Wednesday");
//       break;
//     case 4:
//       console.log("Today is Thursday");
//       break;
//     case 5:
//       console.log("Today is Friday");
//       break;
//     case 6:
//       console.log("Today is Saturday");
//       break;
//     case 7:
//       console.log("Today is Sunday");
//       break;
//     default:
//       console.log("Invalid day of the week");
//   }
// }

// Exercise 8
// const number1 = prompt(`Please enter a number`);
// const isOdd =
//   number1 % 2 == 0
//     ? `${number1} is an even number`
//     : `${number1} is an odd number`;
// console.log(isOdd);

// Exercise 9
// function calcAge(birthYear) {
//   return age;
// }

// const calcAge = function (birthYear) {
//   return age;
// };

// const calcAge = (birthYear) => {
//   return age;
// };

// Exercise 10

// const isPrime = function (n) {
//   if (n % n == 0 && n % 1) {
//   }
// };

// Exercise 11
// const corine = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let sum = 0;
// for (let i = 0; i < corine.length; i++) {
//   sum = sum + corine[i];
// }
// console.log(sum);
// let sum1 = 0;
// for (let i = 0; i < corine.length; i++) {
//   if (corine[i] % 2 == 0) {
//     sum1 = sum1 + corine[i];
//   } else continue;
// }
// console.log(sum1);

// // Exercise 12
// const coco = ["Coco", "Baby", "Boy", "Girl", "Zone", "Meli", "PJT"];
// coco.push("Leslie");
// console.log(coco);
// coco.shift();
// console.log(coco);
// coco[3] = 42;
// console.log(coco);

// Exercise 13:
const person = {
  firstName: "John",
  lastName: "Miler",
  birthYear: "2003",
  job: "Student",
  friends: ["Coco", "Mike", "Boy"],

  calcAge: function () {
    return 2025 - this.birthYear;
  },

  // Exercise 14
  isSummary: function () {
    return `I am called ${this.firstName} ${
      this.lastName
    }. I am ${this.calcAge()} years old, and I am a ${this.job}. I have ${
      this.friends.length
    } friends, and their names are ${this.friends}. My best friend is ${
      this.friends[1]
    }.`;
  },
};
console.log(
  `${person.firstName} has ${person.friends.length}, and his best friend is ${person.friends[1]}`
);
console.log(person.isSummary());

// Exercise 15
// const numbers = [20, 10, 50, 2, 5, 15, 27, 29, 57, 11];
// const newNumber = [];
// let i = 0;
// while (numbers[i] > 10) {
//   newNumber.push(numbers[i]);
//   if (numbers[i] > 50) {
//     break;
//   }
//   i++;
//   console.log(newNumber);
// }
// };
// console.log(person.isSummary());

// Exercise 15
const numbers = [20, 57, 10, 50, 2, 5, 15, 27, 29, 57, 11];
// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] > 50) {
//     break;
//   }
//   if (numbers[i] > 10) {
//     console.log(numbers[i]);
//   }
// }

// for (const number of numbers) {
//   if (number > 50) {
//     break;
//   }
//   if (number > 10) {
//     console.log(number);
//   }
// }

// Exercise 16

// for (let i = 1; i < 6; i++) {
//   let hashTags = "";
//   for (let j = 1; j <= i; j++) {
//     hashTags += "#";
//   }
//   console.log(`${hashTags}`);
// }

// Exercise 17
// let dice = 0;

// while (dice !== 6) {
//   const v = parseInt(Math.random() * 10);
//   if (v > 6) {
//     console.log(`This number ${v} is greater than 6`);
//     break;
//   } else {
//     dice = v;
//     console.log(dice);
//   }
// }
// console.log(parseInt(Math.random() * 10));

// Exercise 18
const tipss = [];
const billss = [125, 555, 44];
const totalss = [];

function calcTips(bill) {
  return bill > 50 && bill < 300 ? 0.15 * bill : 0.2 * bill;
}
for (const bill of billss) {
  tipss.push(calcTips(bill));
  totalss.push(bill + calcTips(bill));
}

console.log(totalss);
console.log(tipss);
