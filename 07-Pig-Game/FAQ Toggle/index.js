const toggle = document.querySelector(".toggle");
const definition = document.querySelector(".definition");

toggle.addEventListener("click", function () {
  definition.classList.toggle("hidden");
});
