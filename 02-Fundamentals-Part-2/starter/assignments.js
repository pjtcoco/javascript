"use strict";

// const calcAverage = (a, b, c) => {
//    return (a + b + c) /3;
// }

// const scoreDolphins = calcAverage(85, 54, 41);
// const scoreKoalas = calcAverage(23, 34, 27);

// const checkWinner =  function(avgDolphins, avgKoalas){
//     if (avgDolphins == (avgKoalas * 2) ||avgDolphins >= (avgKoalas * 2)){
//         console.log(`Dolphinss win (${avgDolphins} vs. ${avgKoalas})`);
//     } else
//         if(avgKoalas == (avgDolphins * 2) ||avgKoalas >= (avgDolphins * 2)) {
//          console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
//            }
//            else{console.log(`No team wins...`);

//            }
// }
// checkWinner(scoreDolphins, scoreKoalas);

// const bills = [125, 555, 44];
// const tips = [];
// const totals = [];
// calcTip(bills[0])
// calcTip(bills[1])
// calcTip(bills[2])

// function calcTip(bill){
//     const tip = bill >= 50 && bill <= 300 ? 0.15 * bill : 0.2 * bill;
//     const totalValue = tip + bill;
//     tips.push(tip);
//     totals.push(totalValue);
//  return {tip, totalValue};
// }

// console.log(bills)
// console.log(tips)
// console.log(totals);

// const mark = {
//     fullName: 'Mark Miller',
//     mass: 78,
//     height: 1.69,

//     calcBMI:function () {
//     this.bmi = this.mass / (this.height * this.height);
//      return this.bmi;
//     }
// }
// const john = {
//     fullName: 'John Smith',
//     mass: 92,
//     height: 1.95,

//      calcBMI:function () {
//       this.bmi = this.mass / (this.height * this.height);
//      return this.bmi;
//      }
// }
//   console.log(mark.calcBMI() > john.calcBMI()? `${mark.fullName}'s BMI ${mark.calcBMI()} is higher  than ${john.fullName}'s ${john.calcBMI()} ` : `${john.fullName}'s BMI ${john.calcBMI()} is higher than ${mark.fullName}'s ${mark.calcBMI}`);

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};
// for (let i = 0; i < bills.length; i++) {
//   const tip = calcTip(bills[i]);
//   tips.push(tip);
//   const totalValue = bills[i] + tip;
//   totals.push(totalValue);
// }

// for (const bill of bills) {
//   const tip = calcTip(bill);
//   tips.push(tip);
//   const totalValue = bill + tip;
//   totals.push(totalValue);
// }

// console.log(bills, tips, totals);

// const calcAverage = function (arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   return sum / arr.length;
// };
// console.log(calcAverage(totals));
// console.log(calcAverage(tips));
