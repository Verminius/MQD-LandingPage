import { saveTask } from "./firebase.js";

const mostRecentScore = localStorage.getItem("mostRecentScore");
const finalScore = document.querySelector("#finalScore");

finalScore.value = mostRecentScore;

const showDate = document.getElementById("date");
const date = new Date();

showDate.value = date.toDateString();

const username = document.querySelector("#username");
const lastname = document.querySelector("#lastname");
const saveScoreBtn = document.querySelector("#saveScoreBtn");

username.addEventListener("keyup", () => {
  saveScoreBtn.disabled = !username.value && !lastname.value && !cc.value;
});

function saveScore() {
  const taskForm = document.getElementById("task-form");

  taskForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const date = taskForm["date"];
    const name = taskForm["username"];
    const score = taskForm["finalScore"];
    const lName = taskForm["lastname"];
    const cc = taskForm["cc"];

    saveTask(date.value, name.value, lName.value, cc.value, score.value);

    taskForm.reset();

    setTimeout(() => {
      location.assign("/quiz-transer/index.html");
    }, 1500);
  });
}

saveScoreBtn.addEventListener("click", saveScore());
