const username = document.querySelector("#username");
const lastname = document.querySelector("#lastname");
const saveScoreBtn = document.querySelector("#saveScoreBtn");
const finalScore = document.querySelector("#finalScore");
const mostRecentScore = localStorage.getItem("mostRecentScore");

const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

const MAX_HIGH_SCORES = 20;

finalScore.innerText = mostRecentScore;

username.addEventListener("keyup", () => {
  saveScoreBtn.disabled = !username.value;
});

saveHighScore = (e) => {
  e.preventDefault();

  const score = {
    puntaje: mostRecentScore,
    nombre: username.value,
    apellido: lastname.value,
  };

  highScores.push(score);

  highScores.sort((a, b) => {
    return b.score - a.scores;
  });

  highScores.splice(20);

  localStorage.setItem("highScores", JSON.stringify(highScores));
  window.location.assign("/quiz-bolivar/index.html");
};
