// transicion de juego a index

const mainLogo = document.querySelector(".logo-juego");
const footerIzquierda = document.querySelector(".img-izq");

mainLogo.addEventListener("click", () => {
  //logo moves up
  mainLogo.classList.add("moveUp");

  //left-bottom logo comes up
  footerIzquierda.classList.toggle("moveOut");

  //time move down
  cronometro.classList.toggle("cronoOut");

  //gameboard dissapear
  //if first board is visible
  oficina.classList.remove("delay-game");
  //if other board is visible
  if (patio.classList.contains("show-new-level")) {
    patio.classList.remove("show-new-level");
  }
  if (vehiculo.classList.contains("show-new-level")) {
    vehiculo.classList.remove("show-new-level");
  }

  //if endgame modal is open
  let time = document.getElementById("cronometro");
  let contTime = document.querySelector(".cont-crono");

  let fondoModal = document.getElementById("contModalVehi");
  let modalEndGame = document.getElementById("modalVehi");

  if (
    fondoModal.classList.contains("opacity") &&
    modalEndGame.classList.contains("show-modal-end")
  ) {
    fondoModal.classList.toggle("opacity");
    modalEndGame.classList.toggle("show-modal-end");
  }
  if (
    contTime.classList.contains("cont-crono-front") &&
    time.classList.contains("cronoEnd")
  ) {
    contTime.classList.remove("cont-crono-front");
    time.classList.add("cronoClose");
  }

  //move to index
  setTimeout(() => {
    location.assign("/caza-peligros-eemb/index.html");
  }, 600);
});

//transicion entre niveles
const btnNext1 = document.getElementById("btn1");
const btnNext2 = document.getElementById("btn2");
const btnEnd = document.getElementById("btnEnd");
const oficina = document.querySelector(".oficina");
const patio = document.querySelector(".patio");
const vehiculo = document.querySelector(".vehiculo");
const cronometro = document.getElementById("cronometro");

//delay inicio main
setTimeout(() => {
  oficina.classList.add("delay-game");
  cronometro.classList.toggle("cronoOut");
}, 300);

//de oficina a patio

btnNext1.addEventListener("click", () => {
  let fondoModal = document.getElementById("contModalOfi");
  let modalEndGame = document.getElementById("modalOfi");

  fondoModal.classList.remove("opacity");
  modalEndGame.classList.remove("show-modal");

  setTimeout(() => {
    oficina.classList.add("next-level");
  }, 300);

  setTimeout(() => {
    patio.classList.toggle("show-new-level");
  }, 500);
});

//de patio a vehiculo

btnNext2.addEventListener("click", () => {
  let fondoModal = document.getElementById("contModalPat");
  let modalEndGame = document.getElementById("modalPat");

  fondoModal.classList.remove("opacity");
  modalEndGame.classList.remove("show-modal");

  setTimeout(() => {
    patio.classList.add("next-level");
  }, 300);

  setTimeout(() => {
    vehiculo.classList.toggle("show-new-level");
  }, 500);
});
