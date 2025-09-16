'use strict';

// function calcAge(birthYear) {
//   const age = 2025 - birthYear;
//   function printAge() {
//     let output = `${firtsName}, You are  ${age}, born in ${birthYear}`;
//     console.log(output);

//     if (birthYear >= 1981 && birthYear <= 1996) {
//       var millenial = true;
//       //   Creating New variable with same name as outerscope's variable
//       const firtsName = 'Steven';

//       // Reassigning outer scope's variable
//       output = 'NEW OUTPUT!';

//       const str = `Oh, You are a millenial, ${firtsName}`;
//       console.log(str);
//     } else {
//       const str = `Oh, You are not a millenial, ${firtsName}`;
//       console.log(str);

//       function add(a, b) {
//         return a + b;
//       }
//     }
//     console.log(output);
//     console.log(millenial);
//     // console.log(add(2, 3));
//   }
//   printAge();
//   return age;
// }
// console.log();
// const firtsName = 'Corine';
// calcAge(2003);

// console.log(me);
// console.log(job);
// console.log(year);

// var me = 'Corine';
// let job = 'Student';
// const year = 2003;

// console.log(addDecl(2 + 3));
// console.log(addExpr(2 + 3));
// console.log(addArr(2 + 3));

// // functions
// function addDecl(a, b) {
//   return a + b;
// }

// const addExpr = function (a, b) {
//   return a + b;
// };

// const addArr = (a, b) => a + b;

// // Example
// if (!numProducts) deleteShoppingCart();
// var numProducts = 10;

// function deleteShoppingCart() {
//   console.log('All products deleted!');
// }

// var x = 1;
// let y = 2;
// const z = 3;

// console.log(x === window.x);
// console.log(x === window.y);
// console.log(x === window.z);

// console.log(this);

// const calcAge = function (birthYear) {
//   console.log(2025 - birthYear);
//   console.log(this);
// };
// calcAge(2003);

// const calcAgeArr = birthYear => {
//   console.log(2025 - birthYear);
//   console.log(this);
// };
// calcAgeArr(2003);

// const corine = {
//   year: 2003,
//   calcAge: function () {
//     console.log(this);
//     console.log(2025 - this.year);
//   },
// };
// corine.calcAge();

// const meli = {
//   year: 2022,
// };
// meli.calcAge = corine.calcAge;
// meli.calcAge();

// const f = corine.calcAge;
// f();

// var firstName = 'Corine';
// const corine = {
//   firstName: 'Corine',
//   year: 2003,
//   calcAge: function () {
//     // console.log(this);
//     console.log(2025 - this.year);

//     //     //Solution 1
//     //     const self = this; //self or that
//     //     const isMillenial = function () {
//     //       console.log(self);
//     //       console.log(self.year >= 1981 && self.year <= 1996);
//     //       //   console.log(this.year >= 1981 && this.year <= 1996);
//     //     };
//     //     isMillenial();
//     //   },

//     //Solution 2
//     const self = this; //self or that
//     // const isMillenial = () => {
//     //   console.log(this);
//     //   console.log(this.year >= 1981 && this.year <= 1996);
//     //   //   console.log(this.year >= 1981 && this.year <= 1996);
//     // };
//     // isMillenial();
//   },
//   greet: () => console.log(`Hey ${this.firstName}`),
// };
// corine.greet();
// corine.calcAge();

// // argument keyword
// function addDecl(a, b) {
//   return a + b;
// }
// addDecl();

// const addExpr = function (a, b) {
//   console.log(arguments);
//   return a + b;
// };
// addExpr(2, 5);
// addExpr(2, 5, 8, 12);

// const addArr = (a, b) => a + b;
// addArr(2, 5, 8);

const corine1 = {
  firstname: 'Corine',
  lastName: ' Zone',
  age: 22,
};

function marryPerson(originalPerson, newLastName) {
  originalPerson = newLastName;
  return originalPerson;
}
const marriedCorine = marryPerson(corine1, 'Meli');

// marriedCorine = corine;
// marriedCorine.lastName = 'Meli';

console.log('Before:', corine1);
console.log('After:', marriedCorine);

const corine = {
  firstname: 'Corine',
  lastName: 'Zone',
  age: 22,
  family: ['Alice', 'Bob'],
};

// Shallow copy
const corineCopy = { ...corine };
corineCopy.lastName = 'Meli';

// corineCopy.family.push('Mary');
// corineCopy.family.push('John');
// console.log('Before:', corine1);
// console.log('After:', corineCopy);

// Deep copy/Clone
const corineClone = structuredClone(corine);
corineClone.family.push('Marry');
corineClone.family.push('John');

console.log('Original:', corine);
console.log('Clone:', corineClone);
