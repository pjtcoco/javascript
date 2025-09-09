const btnLuckyNumber = document.querySelector(".lucky-number");
const randomNumbers = document.querySelector(".random-numbers");
let numbers = [];

btnLuckyNumber.addEventListener("click", function () {
  for (let i = 0; i < 3; i++) {
    let luckyNumber = Math.trunc(Math.random() * 10) + 1;
    numbers.push(luckyNumber);
  }
  randomNumbers.textContent = numbers.join(", ");
  numbers = [];
});
