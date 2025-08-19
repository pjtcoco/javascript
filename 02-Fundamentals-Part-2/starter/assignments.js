'use strict';

const calcAverage = (a, b, c) => {
   return (a + b + c) /3;
}

const scoreDolphins = calcAverage(85, 54, 41);
const scoreKoalas = calcAverage(23, 34, 27);

const checkWinner =  function(avgDolphins, avgKoalas){
    if (avgDolphins == (avgKoalas * 2) ||avgDolphins >= (avgKoalas * 2)){
        console.log(`Dolphinss win (${avgDolphins} vs. ${avgKoalas})`);
    } else 
        if(avgKoalas == (avgDolphins * 2) ||avgKoalas >= (avgDolphins * 2)) {
         console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
           }
           else{console.log(`No team wins...`);

           }
}
checkWinner(scoreDolphins, scoreKoalas);