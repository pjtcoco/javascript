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

const calcTempAmplitude = function (temps) {
  let max = temps[0];
  for (let i = 0; i < temps.length; i++) {
    if (temps[i] > max) max = temps[i];
  }
  console.log(max);
};
calcTempAmplitude([3, 7, 4, 6]);
