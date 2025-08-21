'use strict';

// let hasDriversLicence = false;
// const passTest = true;

// if(passTest) hasDriversLicence = true;
// if(hasDriversLicence) console.log("I can drive :D")

// const interface = 'Audio';
// const private = 534;

// function logger(){
//     console.log('My name is Corine');
// }

// //calling / running / invoking function
// logger();
// logger();
// logger();

// function fruitProcessor(apples, oranges){
//     // console.log(apples, oranges);
//     const juice = `Juice with ${apples} apples and ${oranges} oranges`;
//     return juice;
// }

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);
  
// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);

// // function declaration
// function calcAge1(birthYear){
//     return 2025 - birthYear;
// }

// const age1 = calcAge1(1991);
// console.log(age1);

// // function expression
// const calcAge2 = function(birthYear){
//      return 2025 - birthYear;
// }
// const age2 = calcAge2(1991);

// console.log(age1, age2);

// // Arrow function
// const calcAge3 = birthYear => 2025 - birthYear;
// const age3 = calcAge3(1991);
// console.log(age3);

// const yearsUntilRetirement = (birthYear, firstName) =>{
//     const age = 2025 - birthYear;
//     const retirement = 65 - age;
//     // return retirement;
//     return `${firstName} retires in ${retirement} years`;
// }

// console.log(yearsUntilRetirement(2003, 'Corine'));
// console.log(yearsUntilRetirement(2001, 'Jordan'));

// function cutFruitPieces(fruit){
//     return fruit * 4;
// }

// function fruitProcessor(apples, oranges){

//     const applePieces = cutFruitPieces(apples);
//     const orangePieces = cutFruitPieces(oranges);

   
//     const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges`;
//     return juice;
// };
// console.log(fruitProcessor(2, 3));

// const calcAge = function(birthYear){
//     return 2025 - birthYear;
// }

// const yearsUntilRetirement = function (birthYear, firstName) {
//     const age = calcAge(birthYear);
//     const retirement = 65 - age;

// if(retirement > 0){
//     console.log(`${firstName} retires in ${retirement} years`);
//     return retirement;
//  }
// else {
//     console.log(`${firstName} retires in ${retirement} years`);
//     return -1;
//  }   
// }
 
// console.log(yearsUntilRetirement(2003, 'Corine'));
// console.log(yearsUntilRetirement(1955, 'Ernest'));
// const friend1 = 'Micheal'
// const friend2 = 'Steven'
// const friend3 = 'Peter' 
// const friends = ['Micheal', 'Steven', 'Peter'];
// console.log(friends);
// const year = new Array(1991, 1984, 2008, 2020);

// console.log(friends[0]);
// console.log(friends[2]);

// console.log(friends.length);
// console.log(friends[friends.length - 1]);

// friends[2] = 'Coco';
// console.log(friends);

// const firstName = 'Corine Leslie';
// const coco = [firstName, 'Zone Meli', 2025 - 2003, 'Student', friends];
// console.log(coco);
// console.log(coco.length);

// // Exercise
// function calcAge1(birthYear){
//     return 2025 - birthYear;
// }
// const years = [1990, 1967, 2002, 2010, 2018];
// const age1 = calcAge1(years[0]);
// const age2 = calcAge1(years[1]);
// const age3 = calcAge1(years[years.length - 1]);
// console.log(age1, age2, age3);

// const ages = [calcAge1(years[0]), calcAge1(years[1]), calcAge1(years[years.length - 1])];
// console.log(ages);

// // Add elements
// const friends = ['Micheal', 'Steven', 'Peter'];
// const newLenght= friends.push('Coco');
// console.log(friends);
// console.log(newLenght);

// friends.unshift('Zone');
// console.log(friends);

// // Remove elements
// friends.pop(); //Last
// console.log(friends);
// const popped = friends.pop(); //Last
// console.log(popped);
// console.log(friends);

// friends.shift(); //First
// console.log(friends);

// console.log(friends.indexOf('Steven'));
// console.log(friends.indexOf('Steve'));
// friends.push(32);
// console.log(friends.includes('Steven'));
// console.log(friends.includes('Steve'));
// console.log(friends.includes(32))

// if (friends.includes('Peter')){
//     console.log('You have a friend called Peter');
// }else {
//     console.log('You no friend called Peter');
// }

// const corineArray = [
//     'Corine',
//     'Zone',
//     2025 - 2005,
//     'teacher',
//     ['Micheal', 'Peter', 'Steven' ]
// ];

// const corine = {
//     firstName: 'Corine',
//     lastName : 'Zone',
//     age : 2025 - 2003,
//     job : 'Student',
//     friends: ['Micheal', 'Peter', 'Steven']
// };
// console.log(corine);

// console.log(corine.lastName);
// console.log(corine['lastName']);

// const nameKey = 'Name';
// console.log(corine['first' + nameKey]);
// console.log(corine['last' + nameKey]);

// // console.log(corine.'last' + nameKey);
// const interestedIn = prompt('What do you want to know about Jonas? Choose between firstName, lastName, age,job and friends');
// console.log(corine[interestedIn]);

// if (corine[interestedIn]){
//     console.log(corine[interestedIn]);
// }else{
//     console.log('Wrong request! What do you want to know about Jonas? Choose between firstName, lastName, age,job and friends');
// }

// corine.location = 'Portugal';
// corine['twitter'] = '@corinezone';
// console.log(corine);


// //challenge
// //"Corine has 3 friends, and his best friend is called Micheal"
// console.log(`${corine.firstName} has ${corine.friends.length} friends and her best friend is called ${corine.friends[0]}`);

// const corine = {
//     firstName: 'Corine',
//     lastName : 'Zone',
//     age : 2025 - 2003,
//     birthYear: 2003,
//     job : 'Student',
//     friends: ['Micheal', 'Peter', 'Steven'],
//     hasDriversLicence: true,

    // calcAge: function (birthYear) {
    //     return 2025 - birthYear        
    // }

    //  calcAge: function () {
    //     console.log(this);
        
    //     return 2025 - this.birthYear;        
    // }

//      calcAge: function () {
//         this.age = 2025 - this.birthYear; 
//         console.log(this);
        
//         return this.age;      
//     },

//     getSummary: function(){
// return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and has ${this.hasDriversLicence? 'a' : 'no'} driver's licence`
//     }
// };
// console.log(corine.getSummary())

// console.log(corine.calcAge());
// console.log(corine.age);
// console.log(corine.age);
// console.log(corine.age);

// "Corine is a 21-year old student and has a/no driver's licence"


// for loop keeps running while condition is true
// for(let rep = 1; rep <= 10; rep++){
//     console.log(`Lifting weights repitition ${rep}`);
// }


//  const corine = [
//     'Corine',
//     'Zone',
//     2025 - 2005,
//     'teacher',
//     ['Micheal', 'Peter', 'Steven' ], 
//     true
// ];
// const types =[]
// for(let i = 0; i < corine.length; i++){
//     console.log(corine[i], typeof corine);

// // Filling types array
//     // types[i] = typeof corine[i];
//     types.push(typeof corine[i]);  
// }

// console.log(types);

// const years = [2003, 2001, 1999, 1997];
// const ages = [];

// for(let i = 0; i < years.length; i++){
// //    ages[i] = 2025 - years[i];
// ages.push(2025 - years[i]);
// }
// console.log(ages);


// // Continue and break 
// console.log('---ONLY STRINGs---');
// for(let i = 0; i < corine.length; i++){
//     if(typeof corine [i] !== 'string') continue;
//     console.log(corine[i], typeof corine[i]); 
// }

// console.log('---BREAK WITH NUMBER---');
// for(let i = 0; i < corine.length; i++){
//     if(typeof corine [i] === 'number') break;
//     console.log(corine[i], typeof corine[i]); 
// }


// const corine = [
//     'Corine',
//     'Zone',
//     2025 - 2003,
//     'teacher',
//     ['Micheal', 'Peter', 'Steven' ], 
// ];


// for(let i = corine.length - 1; i >= 0; i-- ){
//     console.log(i, corine[i]);
// }

// for(let exercise = 1; exercise < 4; exercise++){
//     console.log(`----------Starting exercise ${exercise}`);
    
//     for (let rep = 1; rep < 6; rep++) {
//         console.log(`Exercise ${exercise}  Lifting weight repitition ${rep}`);
//     }
// }


// for(let rep = 1; rep <= 10; rep++){
//     console.log(`Lifting weights repitition ${rep}`);
// }

// let rep = 1;
// while(rep <=10){
// // console.log(`While: Lifting weights repitition ${rep}`);
// rep++;
// }


// let dice = Math.trunc(Math.random() * 6) + 1;
// console.log(dice);
// while (dice != 6){
//     console.log(`You rolled a ${dice}`);
//     dice = Math.trunc(Math.random() * 6) + 1;
//     if(dice === 6) console.log('Loop is about to end...'); 
// }