const btnToggle = document.querySelector(".btn-toggle");
const message = document.querySelector(".toggle");

btnToggle.addEventListener("click", function () {
  message.classList.toggle("hidden");
  if (message.classList.contains("hidden")) {
    btnToggle.textContent = `Show`;
  } else {
    btnToggle.textContent = `Hide`;
  }
});
