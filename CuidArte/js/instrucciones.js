var bg = document.querySelector("#bg");
var instrucciones = document.querySelector("#caja-instrucciones");
var cerrar = document.querySelector("#cerrar");
var abrir = document.querySelector("#instrucciones");

function abrirInstrucciones() {
  abrir.addEventListener("click", function () {
    bg.style.opacity = "1";
    bg.style.visibility = "visible";
    instrucciones.classList.toggle("get_in");
  });
}

function cerrarInstrucciones() {
  cerrar.addEventListener("click", function () {
    instrucciones.classList.toggle("get_in");
    setTimeout(function () {
      bg.style.opacity = "0";
      bg.style.visibility = "hidden";
    }, 500);
  });

  window.addEventListener("click", function (e) {
    console.log(e.target);
    if (e.target == bg) {
      instrucciones.classList.toggle("get_in");
      setTimeout(function () {
        bg.style.opacity = "0";
        bg.style.visibility = "hidden";
      }, 500);
    }
  });
}

abrirInstrucciones();
cerrarInstrucciones();
