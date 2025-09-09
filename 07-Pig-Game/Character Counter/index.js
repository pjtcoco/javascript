const text = document.querySelector(".text");
const textArea = document.querySelector(".text-area");
const textCounter = document.querySelector(".text-counter");

text.addEventListener("input", function () {
  textArea.textContent = text.value;
  let counter = text.value.length;
  textCounter.textContent = counter;
});
