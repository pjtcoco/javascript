"use restrict ";
const btnSubmit = document.querySelector(".btn-submit");
const submit = document.querySelector(".submit");
const message = document.querySelector(".message");

btnSubmit.addEventListener("click", function () {
  message.textContent = `Hello, ${submit.value}!`;
});
