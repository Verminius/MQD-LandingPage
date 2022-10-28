var logo = document.querySelector("#logo");
var btnCaliente = document.querySelector("#btn-caliente");
var btnServicios = document.querySelector("#btn-servicio");
var btnOtros = document.querySelector("#btn-otros");
var btnFria = document.querySelector("#btn-fria");
var body = document.querySelector("#body");
var instrucciones = document.querySelector("#instrucciones");
var bgSound = document.querySelector("#bgSound");
var click = document.querySelector("#click");

function iniciar() {
  setTimeout(function () {
    logo.classList.add("delay");
  }, 300);
}

btnCaliente.addEventListener("click", function () {
  body.classList.add("out");
  setTimeout(function () {
    location.href = "caliente.html";
  }, 500);
});

btnServicios.addEventListener("click", function () {
  body.classList.add("out");
  setTimeout(function () {
    location.href = "servicio.html";
  }, 500);
});

btnOtros.addEventListener("click", function () {
  body.classList.add("out");
  setTimeout(function () {
    location.href = "otros.html";
  }, 500);
});

btnFria.addEventListener("click", function () {
  body.classList.add("out");
  setTimeout(function () {
    location.href = "fria.html";
  }, 500);
});

iniciar();
