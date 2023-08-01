const highScoresList = document.getElementById("highScoresList");
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

highScores.sort((a, b) => b.puntaje - a.puntaje);

highScoresList.innerHTML = highScores
  .map((score) => {
    return `<li class="high-score">${score.nombre} ${score.apellido} - ${score.puntaje}</li>`;
  })
  .join("");
