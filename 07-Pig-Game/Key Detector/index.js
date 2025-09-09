const key1 = document.querySelector(".key");
const character = document.querySelector(".character");

key1.addEventListener("keyup", function (e) {
  character.textContent = `${e.key}`;
});
