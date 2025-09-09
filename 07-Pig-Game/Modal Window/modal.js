"use strict ";
const btnOpen = document.getElementById("open-modal");
const btnClose = document.querySelector(".close-modal");
const modalMessage = document.querySelector(".modal-message");
const modal = document.querySelector(".modal");

btnOpen.addEventListener("click", function () {
  modal.style.display = "block";
});

btnClose.addEventListener("click", function () {
  modal.style.display = "none";
});

window.addEventListener("click", function (e) {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});
