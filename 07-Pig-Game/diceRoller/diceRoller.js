const diceMessage = document.querySelector(".dice-message");
const btnRoll = document.querySelector(".btn-roll");
const diceEl = document.querySelector(".dice");

btnRoll.addEventListener("click", function () {
  let dice = Math.trunc(Math.random() * 6) + 1;
  console.log(`The random number is`, dice);
  diceMessage.textContent = dice;
  diceEl.src = `dice-${dice}.png`;
});
