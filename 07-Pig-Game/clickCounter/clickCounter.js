const numberOfTimesClicked = document.querySelector(".counter");
const btnClick = document.querySelector(".btn-click");
const btnReset = document.querySelector(".btn-reset");

let counter = 0;

btnClick.addEventListener("click", function (event) {
  if (event) {
    counter += 1;
    numberOfTimesClicked.textContent = `You have clicked ${counter} times`;
  }
});

btnReset.addEventListener("click", function () {
  counter = 0;
  numberOfTimesClicked.textContent = `You have clicked ${counter} times`;
});
