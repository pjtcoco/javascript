const number = document.getElementById("number");
const btnScore = document.querySelector(".btn-score");
const highScore = document.querySelector(".highscore");
const currentScore = document.querySelector(".current-score");

let highscore = 0;
btnScore.addEventListener("click", function () {
  const score = Number(number.value);
  currentScore.textContent = `Current Score: ${score}`;
  if (!score || score < 1) {
    highScore.textContent = `Invalid Number`;
  } else if (score > highscore) {
    console.log(highscore);
    highscore = score;
    highScore.textContent = `Highscore: ${highscore}`;
  }
});
