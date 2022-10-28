//DELAY AFTER PRESS "INICIAR"

const logo = document.querySelector(".logo");
const botones = document.querySelector(".btn-index");
const bg = document.querySelector(".bg");
const house = document.getElementById("main");
const indexBtn = document.getElementById("indexBtn");

indexBtn.addEventListener("click", () => {
  logo.classList.add("move");
  botones.classList.add("btn-move");
  bg.classList.remove("blur");
  house.classList.remove("blur");

  setTimeout(() => {
    location.assign("/buscando-el-riesgo/inicio.html");
  }, 1000);
});

const bgInstrucciones = document.querySelector(".bg-inst");
const modalInstrucciones = document.querySelector(".cont-inst");
const btnInstrucciones = document.querySelector("#instrucciones");
const closeInstrucciones = document.querySelector("#closeInst");

btnInstrucciones.addEventListener("click", () => {
  bgInstrucciones.style.visibility = "visible";
  bgInstrucciones.style.opacity = 1;
  setTimeout(() => {
    modalInstrucciones.style.transform = "scale(1)";
  }, 300);
});

closeInstrucciones.addEventListener("click", () => {
  modalInstrucciones.style.transform = "scale(0)";
  setTimeout(() => {
    bgInstrucciones.style.visibility = "hidden";
    bgInstrucciones.style.opacity = 0;
  }, 300);
});

window.addEventListener("click", (e) => {
  console.log(e.target);
  if (e.target == bgInstrucciones) {
    modalInstrucciones.style.transform = "scale(0)";
    setTimeout(() => {
      bgInstrucciones.style.visibility = "hidden";
      bgInstrucciones.style.opacity = 0;
    }, 300);
  }
});
