const question = document.querySelector("#question");
const choices = Array.from(document.querySelectorAll(".choice-text"));
const progressText = document.querySelector("#progressText");
const scoreText = document.querySelector("#score");
const progressBarFull = document.querySelector("#progressBarFull");

let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

const SCORE_POINTS = 1;
const MAX_QUESTIONS = 20;

startGame = () => {
  questionCounter = 0;
  score = 0;
  availableQuestions = [...questions];
  getNewQuestions();
};

getNewQuestions = () => {
  if (availableQuestions.length === 0 || questionCounter == MAX_QUESTIONS) {
    localStorage.setItem("mostRecentScore", score);

    return window.location.assign("/quiz-bolivar/end.html");
  }

  questionCounter++;
  progressText.innerText = `Pregunta ${questionCounter} de ${MAX_QUESTIONS}`;
  progressBarFull.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`;

  const questionsIndex = Math.floor(Math.random() * availableQuestions.length);
  currentQuestion = availableQuestions[questionsIndex];
  question.innerText = currentQuestion.question;

  choices.forEach((choice) => {
    const number = choice.dataset["number"];
    choice.innerText = currentQuestion["choice" + number];
  });

  availableQuestions.splice(questionsIndex, 1);

  acceptingAnswers = true;
};

choices.forEach((choice) => {
  choice.addEventListener("click", (e) => {
    if (!acceptingAnswers) return;

    acceptingAnswers = false;
    const selectedChoice = e.target;
    const selectedAnswer = selectedChoice.dataset["number"];
    let classToApply =
      selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";

    if (classToApply === "correct") {
      incrementScore(SCORE_POINTS);
      document.querySelector("#correct").play();
    } else {
      choices[currentQuestion.answer - 1].parentElement.classList.add(
        "correct"
      );
      choices[currentQuestion.answer - 1].parentElement.classList.add(
        "correct"
      );
      choices[currentQuestion.answer - 1].parentElement.classList.add(
        "correct"
      );

      document.querySelector("#wrong").play();
    }

    selectedChoice.parentElement.classList.add(classToApply);

    setTimeout(() => {
      choices[currentQuestion.answer - 1].parentElement.classList.remove(
        "correct"
      );
      choices[currentQuestion.answer - 1].parentElement.classList.remove(
        "correct"
      );
      choices[currentQuestion.answer - 1].parentElement.classList.remove(
        "correct"
      );

      selectedChoice.parentElement.classList.remove(classToApply);

      getNewQuestions();
    }, 2000);
  });
});

incrementScore = (num) => {
  score += num;
  scoreText.innerText = score;
};

startGame();
