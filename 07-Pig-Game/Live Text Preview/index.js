const liveText = document.querySelector(".live-text");
const text = document.querySelector(".text");
liveText.addEventListener("input", function () {
  text.textContent = liveText.value;
});
