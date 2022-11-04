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

//DELAY AFTER CLICK "INSTRUCCIONES"

const bolivar = document.getElementById("bolivar");
const instrucciones = document.getElementById("instrucciones");

instrucciones.addEventListener("click", () => {
  bolivar.classList.add("delay");
  logo.classList.add("move-up");
  botones.classList.add("btn-move");

  setTimeout(() => {
    location.assign("/buscando-el-riesgo/instrucciones.html");
  }, 1000);
});
