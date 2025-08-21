// let myCountry = 'Cameroon'
// let myContinent = "Africa";
// let myPopulation = 77;
// let isIsland = false;
// let language;

// console.log(typeof myCountry);
// console.log(typeof myContinent);
// console.log(typeof myPopulation);
// console.log(typeof isIsland);
// console.log(typeof language);

// const massMark = 78;
// const heightMark = 1.69;

// const massJohn = 92;
// const heightJohn = 1.95;

// const BMIMark = massMark / (heightMark * heightMark);
// const BMIJohn = massJohn / (heightJohn * heightJohn);
// if(BMIMark > BMIJohn){
// console.log(`Mark's BMI ${BMIMark} is higher than John's ${BMIJohn}!`);
// }
// else{
// console.log(`John's BMI ${BMIJohn} is higher than MArk's ${BMIMark}!`);
// }

// const scoreDolphins = (97 + 112 + 101) / 3;
// const scoreKaolas = (109 + 95 + 106) / 3;
// console.log(scoreDolphins, scoreKaolas)

// if(scoreDolphins > scoreKaolas && scoreDolphins >= 100){
//     console.log('Dolphins win the trophy');
// }
// else if(scoreKaolas > scoreDolphins && scoreKaolas >= 100){
// console.log('Kaolas win the trophy');
// }
// else if( scoreDolphins === scoreKaolas){
// console.log('Both win the trophy');
// }

const bill = 275;

/* Write your code below. Good luck! 🙂 */

// if(bill >= 50 && <= 300){
//    const  tip = (15/100) * bill;
// }else
// {
//     tip = (20/100) * bill;
// }

// const totalValue = tip + bill;
// const totalValue = tip + bill;
//  console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${totalValue}`);

const tip = bill >= 50 && bill <= 300 ? (15 / 100) * bill : (20 / 100) * bill;
const totalValue = tip + bill;
console.log(
  `The bill was ${bill}, the tip was ${tip}, and the total value ${totalValue}`
);
