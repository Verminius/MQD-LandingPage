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

let oficinaCounter = 0;

//Tablero de Juego

flipCard1.addEventListener("click", () => {
  flipCard1.classList.add("descubierto");
  acierto1.classList.add("acertado");
  oficinaCounter++;
  endOficina();
});

flipCard2.addEventListener("click", () => {
  flipCard2.classList.add("descubierto");
  acierto2.classList.add("acertado");
  oficinaCounter++;
  endOficina();
});

flipCard3.addEventListener("click", () => {
  flipCard3.classList.add("descubierto");
  acierto3.classList.add("acertado");
  oficinaCounter++;
  endOficina();
});

flipCard4.addEventListener("click", () => {
  flipCard4.classList.add("descubierto");
  acierto4.classList.add("acertado");
  oficinaCounter++;
  endOficina();
});

flipCard5.addEventListener("click", () => {
  flipCard5.classList.add("descubierto");
  acierto5.classList.add("acertado");
  oficinaCounter++;
  endOficina();
});

//Modal Pistas

const showModalOficina = document.getElementById("modalPistasOficina");
const showBtnOficina = document.getElementById("showBtnOficina");

showBtnOficina.addEventListener("click", () => {
  showModalOficina.classList.toggle("show");
});

//Final del Juego

function endOficina() {
  if (oficinaCounter === 5) {
    let fondoModal = document.getElementById("contModalOfi");
    let modalEndGame = document.getElementById("modalOfi");

    setTimeout(() => {
      fondoModal.classList.toggle("opacity");
      modalEndGame.classList.toggle("show-modal");
    }, 1000);
  }
}
