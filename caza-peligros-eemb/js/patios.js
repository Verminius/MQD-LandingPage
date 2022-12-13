//variables globales

const flipCard6 = document.getElementById("front6");
const acierto6 = document.getElementById("acierto6");
const flipCard7 = document.getElementById("front7");
const acierto7 = document.getElementById("acierto7");
const flipCard8 = document.getElementById("front8");
const acierto8 = document.getElementById("acierto8");
const flipCard9 = document.getElementById("front9");
const acierto9 = document.getElementById("acierto9");
const flipCard10 = document.getElementById("front10");
const acierto10 = document.getElementById("acierto10");
const flipCard11 = document.getElementById("front11");
const acierto11 = document.getElementById("acierto11");
const flipCard12 = document.getElementById("front12");
const acierto12 = document.getElementById("acierto12");
const flipCard13 = document.getElementById("front13");
const acierto13 = document.getElementById("acierto13");

let patioCounter = 0;

//Tablero de Juego

flipCard6.addEventListener("click", () => {
  flipCard6.classList.add("descubierto");
  acierto6.classList.add("acertado");
  patioCounter++;
  endPatio();
});

flipCard7.addEventListener("click", () => {
  flipCard7.classList.add("descubierto");
  acierto7.classList.add("acertado");
  patioCounter++;
  endPatio();
});

flipCard8.addEventListener("click", () => {
  flipCard8.classList.add("descubierto");
  acierto8.classList.add("acertado");
  patioCounter++;
  endPatio();
});

flipCard9.addEventListener("click", () => {
  flipCard9.classList.add("descubierto");
  acierto9.classList.add("acertado");
  patioCounter++;
  endPatio();
});

flipCard10.addEventListener("click", () => {
  flipCard10.classList.add("descubierto");
  acierto10.classList.add("acertado");
  patioCounter++;
  endPatio();
});

flipCard11.addEventListener("click", () => {
  flipCard11.classList.add("descubierto");
  acierto11.classList.add("acertado");
  patioCounter++;
  endPatio();
});

flipCard12.addEventListener("click", () => {
  flipCard12.classList.add("descubierto");
  acierto12.classList.add("acertado");
  patioCounter++;
  endPatio();
});

flipCard13.addEventListener("click", () => {
  flipCard13.classList.add("descubierto");
  acierto13.classList.add("acertado");
  patioCounter++;
  endPatio();
});

//Modal Pistas

const showModalPatio = document.getElementById("modalPistasPatio");
const showBtnPatio = document.getElementById("showBtnPatio");

showBtnPatio.addEventListener("click", () => {
  showModalPatio.classList.toggle("show");
});

//Final del Juego

function endPatio() {
  if (patioCounter === 8) {
    let fondoModal = document.getElementById("contModalPat");
    let modalEndGame = document.getElementById("modalPat");

    setTimeout(() => {
      fondoModal.classList.add("opacity");
      modalEndGame.classList.add("show-modal");
    }, 1000);
  }
}
