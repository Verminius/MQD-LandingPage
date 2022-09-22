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

let questions = [
  {
    question:
      "Responda falso o verdadero, un ambiente de trabajo seguro y saludable es aquel en el que se toman todas las medidas para reducir los riesgos y donde se integra la prevención como parte de la cultura organizacional.",
    choice1: "Falso",
    choice2: "Verdadero",
    choice3: "",
    choice4: "",
    answer: 2,
  },
  {
    question:
      "¿Cuáles son los 4 estados físicos y emocionales que pueden poner en riesgo nuestra seguridad?",
    choice1: "Afán, cansancio, exceso de confianza, enojo o frustración.",
    choice2: "Exceso de confianza, felicidad, furia, enojo o frustración.",
    choice3:
      "Afán, cansancio, rabia, emociones positivas, enojo o frustración.",
    choice4: "Frustración, afán, cansancio, felicidad, enojo o frustración.",
    answer: 1,
  },
  {
    question:
      "¿Un ambiente de trabajo seguro y saludable, es aquel en el que no se tomaron las medidas para reducir los riesgos?",
    choice1: "",
    choice2: "",
    choice3: "Falso",
    choice4: "Verdadero",
    answer: 3,
  },
  {
    question:
      "¿Cuál de estas acciones NO se debe realizar para el bienestar de nuestra salud física y mental?",
    choice1: "Dedicar tiempo a una actividad que nos guste.",
    choice2: "Descansar",
    choice3: "Lamentarnos por aquellas metas que vemos lejos.",
    choice4: "Alimentarnos saludablemente.",
    answer: 3,
  },
  {
    question:
      "¿Cansancio es el estado físico en el cual estamos motivados, entusiasmados y queremos hacer todo al mismo tiempo?",
    choice1: "",
    choice2: "Falso",
    choice3: "Verdadero",
    choice4: "",
    answer: 2,
  },
];

const SCORE_POINTS = 1;
const MAX_QUESTIONS = 5;

startGame = () => {
  questionCounter = 0;
  score = 0;
  availableQuestions = [...questions];
  getNewQuestions();
};

getNewQuestions = () => {
  if (availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
    localStorage.setItem("mostRecentScore", score);

    return window.location.assign("/test-locativo/end.html");
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
    }

    selectedChoice.parentElement.classList.add(classToApply);

    setTimeout(() => {
      selectedChoice.parentElement.classList.remove(classToApply);
      getNewQuestions();
    }, 800);
  });
});

incrementScore = (num) => {
  score += num;
  scoreText.innerText = score;
};

startGame();
