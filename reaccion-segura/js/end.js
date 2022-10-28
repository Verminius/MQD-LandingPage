let scoreShow = document.getElementById("finalScore");

const finalScore = JSON.parse(localStorage.getItem("mostRecentScore"));

scoreShow.innerText = finalScore;
