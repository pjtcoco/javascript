const input = document.querySelector(".text");
const btnSubmit = document.querySelector(".btn-submit");
const toDo = document.querySelector(".to-do");
const tasks = [];
btnSubmit.addEventListener("click", function () {
  if (!input.value) {
    alert("Please enter a Task");
  } else {
    let message = input.value;
    tasks.push(message);
    toDo.textContent = tasks.join(", ");
    input.value = "";
    console.log(tasks);
  }
});
