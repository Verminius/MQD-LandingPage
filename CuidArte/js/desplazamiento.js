//Movimiento Inicial

let cuerpo = document.querySelector("#contenedor");

function desplazamiento() {
  setTimeout(function () {
    cuerpo.classList.add("delay");
  }, 500);
}

desplazamiento();
