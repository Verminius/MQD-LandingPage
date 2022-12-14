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
    question: "¿El riesgo biológico es originado por?",
    choice1: "Microorganismos",
    choice2: "Radiaciones ionzantes",
    choice3: "Quimicos",
    choice4: "Electricidad",
    answer: 1,
  },
  {
    question: "Un ejemplo de objetos corto-punzantes pueden ser:",
    choice1: "Agujas, hojas  bisturi y papel",
    choice2: "Agujas, ampolletas, algodones",
    choice3: "Lancetas, agujas y ampolletas",
    choice4: "Lancetas, bajalenguas y ampolletas",
    answer: 3,
  },
  {
    question:
      "La disposición de guantes, gasas, ropa desechable contaminada se hace:",
    choice1: "En caneca verde",
    choice2: "En caneca gris para ser reutilizado",
    choice3: "En contenedor rígido específico o guardián",
    choice4: "En caneca roja por ser biosanitarios",
    answer: 4,
  },
  {
    question: "El lavado de manos previene",
    choice1: "Enfermedades psicologicas",
    choice2: "Enfermedades infectocontagiosas",
    choice3: "La migraña",
    choice4: "El embarazo",
    answer: 2,
  },

  {
    question:
      "En lo que respecta a los elementos de protección personal es cierto:",
    choice1: "Favorecen el contacto directo con sustancias.",
    choice2: "No son responsabilidad del empleador.",
    choice3:
      "Son responsabilidad compartida entre el empleador y el trabajador.",
    choice4: "No son responsabilidad del trabajador.",
    answer: 3,
  },

  {
    question: "La eficacia de la vacunación de Hepatitis B se valida con:",
    choice1: "Titulaciones",
    choice2: "Coprológico",
    choice3: "Gases Arteriales",
    choice4: "Valoración médica",
    answer: 1,
  },
  {
    question: "Doblar o partir agujas manualmente…",
    choice1: "Es una causal de accidentes",
    choice2: "Es una práctica de Trabajo seguro",
    choice3: "Es necesario para desecharlas",
    choice4: "Ninguna de las anteriores",
    answer: 1,
  },
  {
    question: "Para la prevención de salpicaduras en los ojos utilíce:",
    choice1: "Gorro",
    choice2: "Gafas de seguridad",
    choice3: "Uniforme antifluido",
    choice4: "Tapabocas",
    answer: 2,
  },
  {
    question: "Son causas de accidentes por objeto corto-punzante, excepto:",
    choice1:
      "El paciente se mueve de manera repentina durante el procedimiento",
    choice2: "No depositar de inmediato el corto-punzante en el guardián",
    choice3: "Doblar o partir agujas manualmente",
    choice4: "Transportar objetos corto-punzantes protegidos",
    answer: 4,
  },
  {
    question:
      "Son acciones preventivas para el manejo de objetos corto-punzantes, excepto:",
    choice1: "Usar los EPP de acuerdo al procedimiento",
    choice2: "Re-encapuchar las agujas",
    choice3: "Descartar la aguja en el guardián con la mano que venopuncionó",
    choice4: "Solicitar ayuda en casos especiales",
    answer: 2,
  },
  {
    question: "Son ejemplos de comportamientos seguros, excepto:",
    choice1: "Dejar las agujas abandonadas",
    choice2: "Depositar las agujas en el guardián",
    choice3: "Lavarse las manos después de un procedimiento",
    choice4: "Usar los EPP en forma correcta",
    answer: 1,
  },
  {
    question:
      "La técnica para descarte de agujas en área asistencial consiste en:",
    choice1: "Descartar la aguja en el guardián con la mano que venopuncionó",
    choice2: "Lo hago como puedo",
    choice3: "Re-encapuchar las agujas",
    choice4: "Solicitar ayuda en casos especiales",
    answer: 3,
  },
  {
    question:
      "Son acciones preventivas para el manejo de objetos corto-punzantes, excepto:",
    choice1: "Girar para buscar el guardián",
    choice2: "Lo hago como puedo",
    choice3: "A y D son correctas",
    choice4: "Descartar la aguja en el guardián con la mano que venopuncionó",
    answer: 3,
  },
];

const SCORE_POINTS = 1;
const MAX_QUESTIONS = 13;

startGame = () => {
  questionCounter = 0;
  score = 0;
  availableQuestions = [...questions];
  getNewQuestions();
};

getNewQuestions = () => {
  if (availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
    localStorage.setItem("mostRecentScore", score);

    return window.location.assign("/Bioseguros/end.html");
  }

  questionCounter++;
  progressText.innerText = `Pregunta ${questionCounter} de ${MAX_QUESTIONS}`;
  progressBarFull.style.height = `${(questionCounter / MAX_QUESTIONS) * 100}%`;

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
    }, 900);
  });
});

incrementScore = (num) => {
  score += num;
  scoreText.innerText = score;
};

//modales

// llamada
const llamada = document.querySelector("#llamada");
const llamadaBtn = document.querySelector("#llamada-btn");
const llamadaText = document.querySelector("#respuesta-llamada");

function activarLlamada() {
  llamadaBtn.addEventListener("click", function () {
    llamada.classList.add("mostrar-modal");

    function printAnswer() {
      let contenedorRespuesta = document.querySelector("#textoLlamada");

      var textoRespuesta = document.createElement("p");

      switch (true) {
        case currentQuestion.answer === 1:
          textoRespuesta.innerText = "Es la Opción A";
          break;
        case currentQuestion.answer === 2:
          textoRespuesta.innerText = "Creo que es B";
          break;
        case currentQuestion.answer === 3:
          textoRespuesta.innerText = "Debe ser C";
          break;
        default:
          textoRespuesta.innerText = "Seguro es la D";
      }

      contenedorRespuesta.appendChild(textoRespuesta);
    }

    printAnswer();
  });
}

activarLlamada();

function save3() {
  llamadaBtn.disabled = true;
  setTimeout(() => {
    llamada.classList.remove("mostrar-modal");
    llamadaBtn.classList.add("disable");
  }, 4000);
}

// publico

const publico = document.querySelector("#publico");
const publicoBtn = document.querySelector("#publico-btn");
let imGraphic = document.getElementById("changeSrc");

function activarPublico() {
  publicoBtn.addEventListener("click", function () {
    publico.classList.toggle("mostrar-modal");

    switch (currentQuestion.answer) {
      case 1:
        imGraphic.src = "https://i.postimg.cc/PfC1fzm7/graficas-a.gif";
        break;

      case 2:
        imGraphic.src = "https://i.postimg.cc/K4XGmynm/graficas-b.gif";
        break;

      case 3:
        imGraphic.src = "https://i.postimg.cc/4dS4Fcy7/graficas-c.gif";
        break;

      default:
        imGraphic.src = "https://i.postimg.cc/MHfZkGfs/graficas-d.gif";
    }
  });
}

activarPublico();

function save2() {
  publicoBtn.disabled = true;

  setTimeout(() => {
    publico.classList.remove("mostrar-modal");
    publicoBtn.classList.add("disable");
  }, 5000);
}

//cincuenta-cincuenta

// const cincuentaBtn = document.querySelector("#cincuenta-btn");

// function save1() {
//     cincuentaBtn.disabled = true;

//     setTimeout(() => {
//         cincuentaBtn.classList.add("disable");
//     }, 1000);
// }

startGame();
