//variables globales

const flipCard14 = document.getElementById("front14");
const acierto14 = document.getElementById("acierto14");
const flipCard15 = document.getElementById("front15");
const acierto15 = document.getElementById("acierto15");
const flipCard16 = document.getElementById("front16");
const acierto16 = document.getElementById("acierto16");
const flipCard17 = document.getElementById("front17");
const acierto17 = document.getElementById("acierto17");
const flipCard18 = document.getElementById("front18");
const acierto18 = document.getElementById("acierto18");

let vehiculoCounter = 0;

//Tablero de Juego

flipCard14.addEventListener("click", () => {
  flipCard14.classList.add("descubierto");
  acierto14.classList.add("acertado");
  vehiculoCounter++;
  endVehiculo();
});

flipCard15.addEventListener("click", () => {
  flipCard15.classList.add("descubierto");
  acierto15.classList.add("acertado");
  vehiculoCounter++;
  endVehiculo();
});

flipCard16.addEventListener("click", () => {
  flipCard16.classList.add("descubierto");
  acierto16.classList.add("acertado");
  vehiculoCounter++;
  endVehiculo();
});

flipCard17.addEventListener("click", () => {
  flipCard17.classList.add("descubierto");
  acierto17.classList.add("acertado");
  vehiculoCounter++;
  endVehiculo();
});

flipCard18.addEventListener("click", () => {
  flipCard18.classList.add("descubierto");
  acierto18.classList.add("acertado");
  vehiculoCounter++;
  endVehiculo();
});

//Modal Pistas

const showModalVehiculo = document.getElementById("modalPistasVehiculo");
const showBtnVehiculo = document.getElementById("showBtnVehiculo");

showBtnVehiculo.addEventListener("click", () => {
  showModalVehiculo.classList.toggle("show");
});

//Final del Juego

function endVehiculo() {
  if (vehiculoCounter === 5) {
    const time = document.getElementById("cronometro");
    const contTime = document.querySelector(".cont-crono");

    let fondoModal = document.getElementById("contModalVehi");
    let modalEndGame = document.getElementById("modalVehi");

    setTimeout(() => {
      fondoModal.classList.toggle("opacity");
      modalEndGame.classList.toggle("show-modal-end");
      stopTimer();
      contTime.classList.add("cont-crono-front");
      time.classList.add("cronoEnd");
    }, 1000);
  }
}
