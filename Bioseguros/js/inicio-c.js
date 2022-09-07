const intro = document.querySelector(".logo-container");

let instruccionesBtn = document.querySelector("#instrucciones-btn");
let contenedorModal = document.querySelector(".contenedor-modal");
let instruccionesModal = document.querySelector(".modal-instrucciones");
let closeInstrucciones = document.querySelector(".close-instrucciones");

function delayIntro() {
  setTimeout(function () {
    intro.classList.add("delay-index");
  }, 400);
}

delayIntro();

instruccionesBtn.addEventListener("click", function openModal() {
  contenedorModal.classList.add("visible");
  instruccionesModal.classList.add("aparece");
});

closeInstrucciones.addEventListener("click", function closeModal() {
  contenedorModal.classList.remove("visible");
  instruccionesModal.classList.remove("aparece");
});
