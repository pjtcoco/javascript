// let js = 'Amazing'
// console.log(40 + 8 + 23 - 10)
// console.log('Jonas')

// let firstName = 'Corine'
// console.log(firstName)
// console.log(firstName)
// console.log(firstName)


// let age = 30;
// age = 31;

// const birthYear = 1991;
// birthYear = 1990;

// const job;

// var job = 'programmer'
// job = 'teacher'

const now = 2025;
const ageCorine = now - 2003;
const ageJonas = now - 2018
console.log(ageCorine, ageJonas);

// console.log(ageCorine * 2, ageCorine / 2, 2 ** 3);


// const firstName ='Corine Leslie';
// const lastName = 'Zone Meli';
// console.log(firstName + " " + lastName);

// console.log(typeof firstName, typeof now );
// // assignment operators
// let x = 10 + 5;
// x += 10;
// x *= 4;
// x++;
// x--;
// console.log(x);

// // comparison operators
// console.log(ageCorine > ageJonas); 
// console.log(ageCorine >= 18);
//  const isFullAge = ageCorine >= 18;

//  console.log(now - 2003 > now  - 2018);
// let x, y;
// x = y = 25 - 10 - 5;
// console.log(x, y);
// const averageAge = (ageCorine + ageJonas) / 2;
// console.log(ageCorine, ageJonas, averageAge);

// const firstName = 'Corine Leslie';
// const job = 'engineer';
// const birthYear = 2003;
// const year = 2025;
// const corine = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';
// console.log(corine);

// const corineNew = `I'm ${firstName} a ${year - birthYear} year old ${job}`;
// console.log(corineNew);

// console.log(`Just a regular string...`);

// console.log('String with \n\
//      multiple\n\
//      lines');

// console.log(`String
//     multiple
//     lines`);

// const age = 14;

// if(age >= 18){
// console.log('Corine can start driving liscence🚗');
// }
// else{
//     const yearsLeft = 18 - age;
//     console.log(`Corine has to wait for ${yearsLeft} years`);
// }

// const birthYear = 2003;
// let century;
// if (birthYear<= 2000){
//     century = 20;
// } else {
//     century = 21;
// }
// console.log(`Corine was born in the ${century} century`)

// // type conversion
// const inputYear = '2003';
// console.log(Number(inputYear), inputYear);
// console.log(Number(inputYear) + 18);

// console.log(Number('Corine'));
// console.log(String(23), 23);

// // type coercion
// console.log('I am ' + 21 + ' years old');
// console.log('I am ' + ' 21' + ' years old');
// console.log('23' - '10' - 3);
// console.log('23' * '2')

// let n = '1' + 1;
// n = n -1;
// console.log(n);
// const favourite =Number( prompt("What's your favourite number?"));
// console.log(favourite);
// console.log(typeof favourite);

// if (favourite === 23){
//     console.log("Cool 23 is an amazing number!");
// }
// else if (favourite === 7){
//     console.log("7 is also a cool number!");
// }
// else if (favourite === 9) {
// console.log("9 is also a cool number!");
// }
// else{
//     console.log("Number is not 23 or 9 or 7");
// }

// if (favourite !== 23)
//     console.log('Why not 23?');


// const hasDriversLicence = true; //A
// const hasGoodVision = true; //b
// console.log(hasDriversLicence && hasGoodVision);
// console.log(hasDriversLicence || hasGoodVision);
// console.log(!hasDriversLicence);

// // if(hasDriversLicence && hasGoodVision){
// //     console.log('Sarah is able to drive');
// // }
// // else{
// //     console.log('Someone else should drive...');
// // }

// const isTired = false; //c
// console.log(hasDriversLicence && hasGoodVision && !isTired);

// if(hasDriversLicence && hasGoodVision && isTired){
//     console.log('Someone else needs to drive...')
// }
// else{
//     console.log('Sarah is able to drive!')
// }

// const day = 'sunday';
// switch (day){
//     case 'monday':
//     console.log('Plan course structure');
//     console.log('Go to coding meetup');
//         break;
//     case 'tuesday':
//         console.log('Prepare theory videos');
//         break;
//     case 'wedneday':
//     case 'thursday':
//             console.log('Write code examples');
//         break;
//     case 'friday':
//             console.log('Record videos');
//         break;
//     case 'saturday':
//     case 'sunday':
//         console.log('Enjoy the weekend :D');
//         break;
//     default:
//         console.log('Not a valid day!');
// } 

// if(day === 'monday'){
//     console.log('Plan course structure');
//     console.log('Go to coding meetup');
// }
// else if(day === 'tuesday'){
//     console.log('Prepare theory videos');
// }
// else if(day === 'wednesday' || day === 'thursday'){
//     console.log('Write code examples');
// }
// else if(day === 'friday'){
//     console.log('Record videos');
// }
// else if(day === 'saturday' || day === 'sunday'){
//     console.log('Enjoy the weekend :D');
// }
// else console.log('Not a valid day!');

const age = 23;

age >= 18 ? console.log("I like to drink wine"):console.log("I like to drink water");
age <= 18 ? console.log("I like to drink wine "):console.log("I like to drink water");
const drink = age <= 18 ? `wine` : `water`;
console.log(drink);
let drink2;
if(age >= 18){
    drink2 = `wine`;
}else{
drink2 = `water`;
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? `wine` : `water`}`);

