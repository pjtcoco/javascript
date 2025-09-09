const btnRed = document.querySelector(".btn-red");
const btnBlue = document.querySelector(".btn-blue");
const btnGreen = document.querySelector(".btn-green");

btnBlue.addEventListener("click", function () {
  btnBlue.style.backgroundColor = "green";
});

btnRed.addEventListener("click", function () {
  btnRed.style.backgroundColor = "blue";
});

btnGreen.addEventListener("click", function () {
  btnGreen.style.backgroundColor = "red";
});
