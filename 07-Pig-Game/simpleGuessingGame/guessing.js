const numberGuessed = document.getElementById("number");
const btnCheck = document.querySelector(".btn-submit");
const message = document.querySelector(".message");

let secretNumber = Math.trunc(Math.random() * 10) + 1;
console.log("The secret number is", secretNumber);

btnCheck.addEventListener("click", function () {
  const guess = Number(numberGuessed.value);
  console.log(guess);
  if (!guess || guess < 1 || guess > 11) {
    message.textContent = `${guess} is not in range`;
  } else if (guess === secretNumber) {
    message.textContent = `You guessed right🏆! ${guess} is the secret number`;
  } else
    message.textContent = `You lose! ${guess} is  not the secret number. Try again`;
});
