import { getTask, onGetTask } from "./firebase.js";

const highScoresList = document.getElementById("highScoresList");

window.addEventListener("DOMContentLoaded", async () => {
  onGetTask((querySnapshot) => {
    let scores = [];

    querySnapshot.forEach((doc) => {
      const score = doc.data();
      scores.push(score);
    });

    scores.sort((a, b) => b.score - a.score);

    let html = "";

    scores.forEach((score) => {
      html += `
          <ul class="score-item">  
              <h2 class="high-score">${score.score} - ${score.name} ${score.lastname}.</h2>
          </ul>
          `;
    });

    highScoresList.innerHTML = html;
  });
});
