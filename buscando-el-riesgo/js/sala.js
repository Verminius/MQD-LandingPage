//variables globales

const flipCard1 = document.getElementById("front1");
const acierto1 = document.getElementById("acierto1");
const flipCard2 = document.getElementById("front2");
const acierto2 = document.getElementById("acierto2");
const flipCard3 = document.getElementById("front3");
const acierto3 = document.getElementById("acierto3");
const flipCard4 = document.getElementById("front4");
const acierto4 = document.getElementById("acierto4");
const flipCard5 = document.getElementById("front5");
const acierto5 = document.getElementById("acierto5");
const flipCard6 = document.getElementById("front6");
const acierto6 = document.getElementById("acierto6");

let counter = 0;

//Tablero de Juego

flipCard1.addEventListener("click", () => {
  flipCard1.classList.add("descubierto");
  acierto1.classList.add("acertado");
  counter++;
  endGame();
});

flipCard2.addEventListener("click", () => {
  flipCard2.classList.add("descubierto");
  acierto2.classList.add("acertado");
  counter++;
  endGame();
});

flipCard3.addEventListener("click", () => {
  flipCard3.classList.add("descubierto");
  acierto3.classList.add("acertado");
  counter++;
  endGame();
});

flipCard4.addEventListener("click", () => {
  flipCard4.classList.add("descubierto");
  acierto4.classList.add("acertado");
  counter++;
  endGame();
});

flipCard5.addEventListener("click", () => {
  flipCard5.classList.add("descubierto");
  acierto5.classList.add("acertado");
  counter++;
  endGame();
});

flipCard6.addEventListener("click", () => {
  flipCard6.classList.add("descubierto");
  acierto6.classList.add("acertado");
  counter++;
  endGame();
});

//Modal Pistas

const showModal = document.getElementById("modalPistas");
const showBtn = document.getElementById("showBtn");

showBtn.addEventListener("click", () => {
  showModal.classList.toggle("show");
});

//Final del Juego

function endGame() {
  if (counter === 6) {
    let fondoModal = document.getElementById("contModal");
    let modalEndGame = document.getElementById("modal");

    setTimeout(() => {
      fondoModal.classList.add("opacity");
      modalEndGame.classList.add("show-modal");
    }, 1500);
  }
}
