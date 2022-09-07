let movimientos = 0;
const cards = document.querySelectorAll(".mesa");

let tarjetaGirada = false;
let bloquearTablero = false;
let primeraTarjeta, segundaTarjeta;

let reiniciarBtn = document.getElementById("reiniciar-btn");

function reiniciar() {
  reiniciarBtn.addEventListener("click", startGame());
}

function startGame() {
  function start() {
    cards.forEach((card) => {
      setTimeout(() => {
        card.classList.add("flip");
      }, 500);

      setTimeout(() => {
        card.classList.remove("flip");
      }, 4500);
    });
  }

  start();

  function repartirTarjetas() {
    cards.forEach((card) => {
      let randomPos = Math.floor(Math.random() * 24);
      card.style.order = randomPos;
    });
  }

  repartirTarjetas();

  function actualizarContador() {
    var movimientosTexto;
    movimientos++;
    movimientosTexto = movimientos;

    if (movimientos < 10) {
      movimientosTexto = "0" + movimientos;
    }
    document.querySelector("#mov").innerHTML = movimientosTexto;
  }

  function girarTarjeta() {
    if (bloquearTablero) return;
    if (this === primeraTarjeta) return;

    this.classList.toggle("flip");

    if (!tarjetaGirada) {
      tarjetaGirada = true;
      primeraTarjeta = this;

      return;
    }

    segundaTarjeta = this;

    emparejar();

    function emparejar() {
      let sonPareja =
        primeraTarjeta.dataset.name === segundaTarjeta.dataset.name;
      sonPareja
        ? inhabilitarTarjetas(primeraTarjeta.dataset.name)
        : cubrirTarjetas();
    }

    function inhabilitarTarjetas(datasetName) {
      primeraTarjeta.removeEventListener("click", girarTarjeta);
      segundaTarjeta.removeEventListener("click", girarTarjeta);
      setTimeout(() => {
        document.getElementById("showed").classList.add("aparece");
        document.getElementById("container").classList.add("visible");
      }, 500);

      switch (datasetName) {
        case "caneca-blanca":
          document.querySelector(".question-img").src =
            "https://i.postimg.cc/fRrHyTV7/caneca-blanca.jpg";
          document.querySelector(".question-text").innerHTML = "";
          document.querySelector(".question-text").innerHTML =
            "¿Qué tipo de residuos se depositan en la caneca blanca?";
          break;

        case "caneca-negra":
          document.querySelector(".question-img").src =
            "https://i.postimg.cc/Y9cbNnfh/caneca-negra.jpg";
          document.querySelector(".question-text").innerHTML = "";
          document.querySelector(".question-text").innerHTML =
            "¿Qué tipo de residuos se depositan en la caneca negra?";
          break;

        case "caneca-roja":
          document.querySelector(".question-img").src =
            "https://i.postimg.cc/5207fF2N/caneca-roja.jpg";
          document.querySelector(".question-text").innerHTML = "";
          document.querySelector(".question-text").innerHTML =
            "¿Qué tipo de residuos se depositan en la caneca roja?";
          break;

        case "deposito":
          document.querySelector(".question-img").src =
            "https://i.postimg.cc/gJv4gVN4/deposito-rojo.jpg";
          document.querySelector(".question-text").innerHTML = "";
          document.querySelector(".question-text").innerHTML =
            "¿Qué tipo de residuos se depositan en el guardián?";
          break;

        case "EPP_alturas":
          document.querySelector(".question-img").src =
            "https://i.postimg.cc/8c44S186/EPP-alturas.jpg";
          document.querySelector(".question-text").innerHTML = "";
          document.querySelector(".question-text").innerHTML =
            "¿Qué elementos de protección personal se utilizan para hacer la disposición de residuos químicos?";
          break;

        case "EPP_residuos":
          document.querySelector(".question-img").src =
            "https://i.postimg.cc/FFVDcxfH/EPP-residuos.jpg";
          document.querySelector(".question-text").innerHTML = "";
          document.querySelector(".question-text").innerHTML =
            "¿Qué elementos de protección personal se utilizan para hacer la disposición de residuos médicos?";
          break;

        case "frascos":
          document.querySelector(".question-img").src =
            "https://i.postimg.cc/gkMstkH9/frascos.jpg";
          document.querySelector(".question-text").innerHTML = "";
          document.querySelector(".question-text").innerHTML =
            "¿Dónde se depositan ampolletas y frascos de medicamentos?";
          break;

        case "material_medico":
          document.querySelector(".question-img").src =
            "https://i.postimg.cc/Z5p9BwRf/material-medico.jpg";
          document.querySelector(".question-text").innerHTML = "";
          document.querySelector(".question-text").innerHTML =
            "¿En cuál caneca se deposita el material médico?";
          break;

        case "quimicos":
          document.querySelector(".question-img").src =
            "https://i.postimg.cc/FzYz9Z8V/quimicos.jpg";
          document.querySelector(".question-text").innerHTML = "";
          document.querySelector(".question-text").innerHTML =
            "¿Dónde se depositan los envases con químicos?";
          break;

        case "quirurgico":
          document.querySelector(".question-img").src =
            "https://i.postimg.cc/8cx5svVQ/quirurgico.jpg";
          document.querySelector(".question-text").innerHTML = "";
          document.querySelector(".question-text").innerHTML =
            "¿En cuál caneca se deposita el material quirúrgico?";
          break;

        case "residuos_negra":
          document.querySelector(".question-img").src =
            "https://i.postimg.cc/3rqWts0S/residuos-negra.jpg";
          document.querySelector(".question-text").innerHTML = "";
          document.querySelector(".question-text").innerHTML =
            "¿El cartón, el papel y similares se depositan en la caneca de color...?";
          break;

        default:
          document.querySelector(".question-img").src =
            "https://i.postimg.cc/kXtGzTxn/residuos-roja.jpg";
          document.querySelector(".question-text").innerHTML = "";
          document.querySelector(".question-text").innerHTML =
            "¿Desechos clínicos, bacterias, aceites, aerosoles y similares se depositan en la caneca de color...?";
      }

      let flipedCards = document.querySelectorAll(".mesa:not(.flip)");

      if (flipedCards.length === 0) {
        endGame();
      }

      function endGame() {
        setTimeout(() => {
          document.getElementById("end").classList.add("aparece");
          document.getElementById("container-end").classList.add("visible");
        }, 4000);
      }

      reiniciarTablero();
    }

    function cubrirTarjetas() {
      bloquearTablero = true;

      setTimeout(() => {
        primeraTarjeta.classList.remove("flip");
        segundaTarjeta.classList.remove("flip");

        reiniciarTablero();
      }, 500);
    }

    function reiniciarTablero() {
      [tarjetaGirada, bloquearTablero] = [false, false];
      [primeraTarjeta, segundaTarjeta] = [null, null];
    }

    actualizarContador();
  }

  cards.forEach((card) => card.addEventListener("click", girarTarjeta));
}

startGame();

function closeModal() {
  let closeIcon = document.querySelector(".close");

  closeIcon.addEventListener(
    "click",

    () => {
      setTimeout(() => {
        document.getElementById("showed").classList.remove("aparece");
        document.getElementById("container").classList.remove("visible");
      }, 100);
    }
  );
}

closeModal();
