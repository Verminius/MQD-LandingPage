//Variables desplazamiento

const desplegable = document.querySelector("#desplegable");
const btn = document.querySelector("#btnDesp");
const close = document.querySelector("#close");

//Variables slider

//flechas
const arrowIzq = document.querySelector("#arrowIzq");
const arrowDer = document.querySelector("#arrowDer");

//opciones
const opt1 = document.querySelector(".opcion-1");
const opt2 = document.querySelector(".opcion-2");
const opt3 = document.querySelector(".opcion-3");
const opt4 = document.querySelector(".opcion-4");
const opt5 = document.querySelector(".opcion-5");
const opt6 = document.querySelector(".opcion-6");
const opt7 = document.querySelector(".opcion-7");
const opt8 = document.querySelector(".opcion-8");
const opt9 = document.querySelector(".opcion-9");
const opt10 = document.querySelector(".opcion-10");
const opt11 = document.querySelector(".opcion-11");
const opt12 = document.querySelector(".opcion-12");
const opt13 = document.querySelector(".opcion-13");

//abrir-cerrar menu

btn.addEventListener("click", () => {
  desplegable.classList.toggle("desplegado");
});

close.addEventListener("click", () => {
  desplegable.classList.remove("desplegado");
});

//desplazamiento entre opciones

//derecha
arrowDer.addEventListener("click", () => {
  if (opt1.classList.contains("visible")) {
    opt1.classList.toggle("visible");
    setTimeout(() => {
      opt2.classList.toggle("visible");
    }, 100);
  }

  if (opt2.classList.contains("visible")) {
    opt2.classList.toggle("visible");
    setTimeout(() => {
      opt3.classList.toggle("visible");
    }, 100);
  }

  if (opt3.classList.contains("visible")) {
    opt3.classList.toggle("visible");
    setTimeout(() => {
      opt4.classList.toggle("visible");
    }, 100);
  }

  if (opt4.classList.contains("visible")) {
    opt4.classList.toggle("visible");
    setTimeout(() => {
      opt5.classList.toggle("visible");
    }, 100);
  }

  if (opt5.classList.contains("visible")) {
    opt5.classList.toggle("visible");
    setTimeout(() => {
      opt6.classList.toggle("visible");
    }, 100);
  }

  if (opt6.classList.contains("visible")) {
    opt6.classList.toggle("visible");
    setTimeout(() => {
      opt7.classList.toggle("visible");
    }, 100);
  }

  if (opt7.classList.contains("visible")) {
    opt7.classList.toggle("visible");
    setTimeout(() => {
      opt8.classList.toggle("visible");
    }, 100);
  }

  if (opt8.classList.contains("visible")) {
    opt8.classList.toggle("visible");
    setTimeout(() => {
      opt9.classList.toggle("visible");
    }, 100);
  }

  if (opt9.classList.contains("visible")) {
    opt9.classList.toggle("visible");
    setTimeout(() => {
      opt10.classList.toggle("visible");
    }, 100);
  }

  if (opt10.classList.contains("visible")) {
    opt10.classList.toggle("visible");
    setTimeout(() => {
      opt11.classList.toggle("visible");
    }, 100);
  }

  if (opt11.classList.contains("visible")) {
    opt11.classList.toggle("visible");
    setTimeout(() => {
      opt12.classList.toggle("visible");
    }, 100);
  }

  if (opt12.classList.contains("visible")) {
    opt12.classList.toggle("visible");
    setTimeout(() => {
      opt13.classList.toggle("visible");
    }, 100);
  }

  if (opt13.classList.contains("visible")) {
    opt13.classList.toggle("visible");
    setTimeout(() => {
      opt1.classList.toggle("visible");
    }, 100);
  }
});

//izquierda
arrowIzq.addEventListener("click", () => {
  if (opt1.classList.contains("visible")) {
    opt1.classList.toggle("visible");
    setTimeout(() => {
      opt13.classList.toggle("visible");
    }, 100);
  }

  if (opt13.classList.contains("visible")) {
    opt13.classList.toggle("visible");
    setTimeout(() => {
      opt12.classList.toggle("visible");
    }, 100);
  }

  if (opt12.classList.contains("visible")) {
    opt12.classList.toggle("visible");
    setTimeout(() => {
      opt11.classList.toggle("visible");
    }, 100);
  }

  if (opt11.classList.contains("visible")) {
    opt11.classList.toggle("visible");
    setTimeout(() => {
      opt10.classList.toggle("visible");
    }, 100);
  }

  if (opt10.classList.contains("visible")) {
    opt10.classList.toggle("visible");
    setTimeout(() => {
      opt9.classList.toggle("visible");
    }, 100);
  }

  if (opt9.classList.contains("visible")) {
    opt9.classList.toggle("visible");
    setTimeout(() => {
      opt8.classList.toggle("visible");
    }, 100);
  }

  if (opt8.classList.contains("visible")) {
    opt8.classList.toggle("visible");
    setTimeout(() => {
      opt7.classList.toggle("visible");
    }, 100);
  }

  if (opt7.classList.contains("visible")) {
    opt7.classList.toggle("visible");
    setTimeout(() => {
      opt6.classList.toggle("visible");
    }, 100);
  }

  if (opt6.classList.contains("visible")) {
    opt6.classList.toggle("visible");
    setTimeout(() => {
      opt5.classList.toggle("visible");
    }, 100);
  }

  if (opt5.classList.contains("visible")) {
    opt5.classList.toggle("visible");
    setTimeout(() => {
      opt4.classList.toggle("visible");
    }, 100);
  }

  if (opt4.classList.contains("visible")) {
    opt4.classList.toggle("visible");
    setTimeout(() => {
      opt3.classList.toggle("visible");
    }, 100);
  }

  if (opt3.classList.contains("visible")) {
    opt3.classList.toggle("visible");
    setTimeout(() => {
      opt2.classList.toggle("visible");
    }, 100);
  }

  if (opt2.classList.contains("visible")) {
    opt2.classList.toggle("visible");
    setTimeout(() => {
      opt1.classList.toggle("visible");
    }, 100);
  }
});
