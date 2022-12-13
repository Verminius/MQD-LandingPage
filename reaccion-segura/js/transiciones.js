//Transiciones PRACTICA

const tablero = document.querySelector(".tablero");
const inst1 = document.querySelector("#inst1");
const btnPlay = document.querySelector(".btn-jugar");

//transición inicial del tablero de juego
setTimeout(() => {
  tablero.classList.add("delay-tablero");
  btnPlay.classList.toggle("btn-up");
}, 300);

//transición inicial instrucciones
setTimeout(() => {
  inst1.classList.add("transicion-inst");
}, 1000);

//movimiento de instrucciones

btnPlay.addEventListener("click", () => {
  tablero.classList.add("down-tablero");

  if (inst1.classList.contains("transicion-inst")) {
    inst1.classList.remove("transicion-inst");
  }
  if (inst2.classList.contains("transicion-inst")) {
    inst2.classList.remove("transicion-inst");
  }
  if (inst3.classList.contains("transicion-inst")) {
    inst3.classList.remove("transicion-inst");
  }
  if (inst4.classList.contains("transicion-inst")) {
    inst4.classList.remove("transicion-inst");
  }
  if (inst5.classList.contains("transicion-inst")) {
    inst5.classList.remove("transicion-inst");
  }
  if (inst6.classList.contains("transicion-inst")) {
    inst6.classList.remove("transicion-inst");
  }
  if (inst7.classList.contains("transicion-inst")) {
    inst7.classList.remove("transicion-inst");
  }
  if (inst8.classList.contains("transicion-inst")) {
    inst8.classList.remove("transicion-inst");
  }

  btnPlay.classList.remove("btn-up");

  setTimeout(() => {
    location.assign("/reaccion-segura/quimico.html");
  }, 700);
});
