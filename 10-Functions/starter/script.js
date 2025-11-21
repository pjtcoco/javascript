'use strict';
/*
const bookings = [];
const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  const booking = { flightNum, numPassengers, price };

  console.log(booking);
  bookings.push(booking);
};
createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH123', 2);
createBooking('LH123', 5);
createBooking('LH123', undefined, 1000);

const flight = 'LH234';
const corine = {
    name: 'Corine Leslie',
    passport: 257486398,
};
const checkIn = function (flightNum, passenger) {
    flightNum = 'LH999';
    passenger.name = 'Ms ' + passenger.name;
    
    if (passenger.passport === 257486398) {
        alert('Checked in');
    } else {
        alert('Wrong passport!');
}
};
// checkIn(flight, corine);
// console.log(flight);
// console.log(corine);

const newPassport = function (person) {
    person.passport = Math.trunc(Math.random() * 1000000);
};
newPassport(corine);
checkIn(flight, corine);


const oneWord = function (str) {
    return str.replace(/ /g, ' ').toLowerCase();
};

const upperFirstWord = function (str) {
    const [first, ...others] = str.split(' ');
    return [first.toUpperCase(), ...others].join(' ');
};

// Higher order function
const transformer = function (str, fn) {
    console.log(`Transformed string: ${str}`);
    
  console.log(`Transformed string: ${fn(str)}`);
  
  console.log(`Transformed by: ${fn.name}`);
};
transformer('Javascript is the best !', upperFirstWord);
transformer('Javascript is the best !', oneWord);

// Js uses callbacks all the time
const high5 = function () {
    console.log('👋');
};
document.body.addEventListener('click', high5);

['Corine', 'Leslie', 'Meli'].forEach(high5);

const greet = function (greeting) {
    return function (name) {
        console.log(`${greeting} ${name}`);
    };
};
const greetArr = greeting => name => console.log(`${greeting} ${name}`);
greetArr('Hello')('Corine');

const greeterHey = greet('Hey');
greeterHey('Corine');
greeterHey('Leslie');

greet('Hello')('Corine');
*/

const lufthansa = {
  airline: 'Lufthansa',
  iatCode: 'LH',
  bookings: [],
  // book: function(){}
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${(this, this.airline)} flight ${
        this.iatCode
      }${flightNum}`
    );
    this.bookings.push({ flight: `${this.iatCode}${flightNum}`, name });
  },
};
lufthansa.book(239, 'Corine Leslie');
lufthansa.book(635, 'Zone Meli');
console.log(lufthansa);

const eurowings = {
  airline: 'Eurowings',
  iatCode: 'EW',
  bookings: [],
};
const book = lufthansa.book;

// Does not work
// book(23, 'Charly Junior')

// Call function
book.call(eurowings, 23, 'Charly Junior');
console.log(eurowings);

book.call(lufthansa, 239, 'Frank Jordan');

const swiss = {
  airline: 'Swiss Air Lines',
  iatCode: 'LX',
  bookings: [],
};

book.call(swiss, 239, 'Kenne Roic');
console.log(swiss);

// Apply Method
const flightData = [583, 'George Cooper'];
book.apply(swiss, flightData);
console.log(swiss);

book.call(swiss, ...flightData);

// Bind Method
// book.call(eurowings, 23, 'Charly Junior');

const bookEW = book.bind(eurowings);
const bookLF = book.bind(lufthansa);
const bookSW = book.bind(swiss);

bookEW(230, 'Tabea Armel');
bookLF(23, 'Kelliane Leslie');

const bookEW23 = book.bind(eurowings, 103);
bookEW23('Corine Leslie');
bookEW23('Marie Noelle');

// With Event Listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);

  this.planes++;
  console.log(this.planes);
};
// lufthansa.buyPlane();
document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

//   Partial Application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
// addVAT = console.log(addVAT());

console.log(addVAT(100));
console.log(addVAT(23));

const addTax1 = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};
const addVAT1 = addTax1(0.23);
console.log(addVAT1(100));
console.log(addVAT1(23));
