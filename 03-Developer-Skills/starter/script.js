// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// const x = '23';
// const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// 1) Understanding the problem

// - What is temperature amplitude? Answer: difference between highest and lowest temperature

// -How to compute max and min temperatures?
// -What's a sensor error? and what to do ?

// 2) Breaking up into sub-problems
// -How to ignore errors ?
// -Find min value in temperature array
// -Find max value in temperature array
// - Substract min from max(amplitude) and return it

// const calcTempAmplitude = function (temps) {
//   let max = temps[0];
//   let min = temps[0];
//   for (let i = 0; i < temps.length; i++) {
//     const curTemp = temps[i];
//     if (typeof curTemp !== 'number') continue;
//     if (curTemp > max) max = curTemp;
//     if (curTemp < min) min = curTemp;
//   }
//   console.log(max, min);
//   return max - min;
// };
// const amplitude = calcTempAmplitude(temperatures);
// console.log(amplitude);

// PROBLEM 2 function should now receive two arrays of temperatures

// 1) Understanding the problem
// - With 2 arrays, should we implement functionality twice? Just merge two arrays

// 2) Breaking up into sub-problems
// - merge 2 arrays?
// const calcTempAmplitudeNew = function (t1, t2) {
//   const temps = t1.concat(t2);
//   console.log(temps);
// results in ['a', 'b', 'c', 1, 2, 3]

//   let max = temps[0];
//   let min = temps[0];
//   for (let i = 0; i < temps.length; i++) {
//     const curTemp = temps[i];
//     if (typeof curTemp !== 'number') continue;
//     if (curTemp > max) max = curTemp;
//     if (curTemp < min) min = curTemp;
//   }
//   console.log(max, min);
//   return max - min;
// };
// const amplitudeNew = calcTempAmplitudeNew([(3, 5, 1)], [9, 0, 5]);
// console.log(amplitudeNew);

// const measureKelvin = function () {
//   const measurement = {
//     type: 'temp',
//     unit: 'celcuis',
//     // C) SOLVE
//     value: Number(prompt('Degrees celcuis')),
//   };
//   //B) FIND
//   console.log(measurement);
//   const kelvin = measurement.value + 237;
//   console.log(typeof Number(measurement.value));

//   return kelvin;
// };
// // A) IDENTIFY
// console.log(measureKelvin());

// const arr1 = [17, 21, 23];
// const arr2 = [12, 5, -5, 0, 4];
// const arr = arr1.concat(arr2);
// function printForcast(arr) {
//   let str = '';
//   for (let i = 0; i < arr.length; i++) {
//     str += ` ${arr[i]}°C in ${i + 1}days... `;
//   }
//   console.log('...' + str);
// }
// printForcast(arr);
