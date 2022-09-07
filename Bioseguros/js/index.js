let logoIndex = document.getElementById("logo-index");
let bioseguroBtn = document.getElementById("bioseguro-btn");
let concentreseBtn = document.getElementById("concentrese-btn");
let ruletaBtn = document.getElementById("ruleta-btn");
let videoBtn = document.getElementById("video-btn");

function inicioInterfaz() {
  setTimeout(() => {
    logoIndex.classList.add("delay-logo-index");
  }, 100);
  setTimeout(() => {
    bioseguroBtn.classList.add("delay");
  }, 200);
  setTimeout(() => {
    concentreseBtn.classList.add("delay");
  }, 500);
  setTimeout(() => {
    ruletaBtn.classList.add("delay");
  }, 800);
  setTimeout(() => {
    videoBtn.classList.add("delay");
  }, 1100);
}

inicioInterfaz();
