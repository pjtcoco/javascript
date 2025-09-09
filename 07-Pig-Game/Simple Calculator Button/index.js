const one = document.querySelector(".one");
const two = document.querySelector(".two");
const btnAdd = document.querySelector(".btn-add");
const btnSubstract = document.querySelector(".btn-substract");
const addResult = document.querySelector(".add-result");
const substractResult = document.querySelector(".substract-result");

btnAdd.addEventListener("click", function () {
  addResult.textContent = `Result = ${Number(one.value) + Number(two.value)}`;
});

btnSubstract.addEventListener("click", function () {
  substractResult.textContent = `Result = ${one.value - two.value}`;
});
