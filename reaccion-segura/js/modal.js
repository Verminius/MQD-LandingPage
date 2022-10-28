const desplegable = document.querySelector("#desplegable");
const btn = document.querySelector("#btnDesp");
const close = document.querySelector("#close");

btn.addEventListener("click", () => {
  desplegable.classList.toggle("desplegado");
});

close.addEventListener("click", () => {
  desplegable.classList.remove("desplegado");
});
