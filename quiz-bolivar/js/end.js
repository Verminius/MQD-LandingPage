import { saveTask } from "./firebase.js";

const mostRecentScore = localStorage.getItem("mostRecentScore");
const finalScore = document.querySelector("#finalScore");

finalScore.value = mostRecentScore;

const username = document.querySelector("#username");
const saveScoreBtn = document.querySelector("#saveScoreBtn");

username.addEventListener("keyup", () => {
  saveScoreBtn.disabled = !username.value;
});

function saveScore() {
  const taskForm = document.getElementById("task-form");

  taskForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = taskForm["username"];
    const score = taskForm["finalScore"];

    saveTask(name.value, score.value);

    taskForm.reset();

    setTimeout(() => {
      location.assign("/quiz-bolivar/index.html");
    }, 1500);
  });
}

saveScoreBtn.addEventListener("click", saveScore());
