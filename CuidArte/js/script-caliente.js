const flipCard1 = document.getElementById("front1");
const acierto1 = document.getElementById("acierto1");
const flipCard2 = document.getElementById("front2");
const acierto2 = document.getElementById("acierto2");
const flipCard3 = document.getElementById("front3");
const acierto3 = document.getElementById("acierto3");
const flipCard4 = document.getElementById("front4");
const acierto4 = document.getElementById("acierto4");
const flipCard5 = document.getElementById("front5");
const acierto5 = document.getElementById("acierto5");
const flipCard6 = document.getElementById("front6");
const acierto6 = document.getElementById("acierto6");
const flipCard7 = document.getElementById("front7");
const acierto7 = document.getElementById("acierto7");
const flipCard8 = document.getElementById("front8");
const acierto8 = document.getElementById("acierto8");
const flipCard9 = document.getElementById("front9");
const acierto9 = document.getElementById("acierto9");
const flipCard10 = document.getElementById("front10");
const acierto10 = document.getElementById("acierto10");
const flipCard11 = document.getElementById("front11");
const acierto11 = document.getElementById("acierto11");
const flipCard12 = document.getElementById("front12");
const acierto12 = document.getElementById("acierto12");
const flipCard13 = document.getElementById("front13");
const acierto13 = document.getElementById("acierto13");
const flipCard14 = document.getElementById("front14");
const acierto14 = document.getElementById("acierto14");
const flipCard15 = document.getElementById("front15");
const acierto15 = document.getElementById("acierto15");
const flipCard16 = document.getElementById("front16");
const acierto16 = document.getElementById("acierto16");
const flipCard17 = document.getElementById("front17");
const acierto17 = document.getElementById("acierto17");
const acierto = document.querySelector("#acierto");

let showImage = document.querySelector("#showImage");

let counter = 0;

flipCard1.addEventListener("click", function descubrir() {
  flipCard1.classList.add("descubierto");
  acierto1.classList.add("acertado");
  counter++;
  endGame();

  setTimeout(() => {
    showImage.classList.add("show-image");
    showImage.innerHTML =
      '<img src="/CuidArte/img/caliente/01Caliente.png" alt="" />';
  }, 200);

  setTimeout(() => {
    showImage.classList.remove("show-image");
  }, 2000);
});

flipCard2.addEventListener("click", function descubrir() {
  flipCard2.classList.add("descubierto");
  acierto2.classList.add("acertado");
  counter++;
  endGame();

  setTimeout(() => {
    showImage.classList.add("show-image");
    showImage.innerHTML =
      '<img src="/CuidArte/img/caliente/02Caliente.png" alt="" />';
  }, 200);

  setTimeout(() => {
    showImage.classList.remove("show-image");
  }, 2000);
});

flipCard3.addEventListener("click", function descubrir() {
  flipCard3.classList.add("descubierto");
  acierto3.classList.add("acertado");
  counter++;
  endGame();

  setTimeout(() => {
    showImage.classList.add("show-image");
    showImage.innerHTML =
      '<img src="/CuidArte/img/caliente/03Caliente.png" alt="" />';
  }, 200);

  setTimeout(() => {
    showImage.classList.remove("show-image");
  }, 2000);
});

flipCard4.addEventListener("click", function descubrir() {
  flipCard4.classList.add("descubierto");
  acierto4.classList.add("acertado");
  counter++;
  endGame();

  setTimeout(() => {
    showImage.classList.add("show-image");
    showImage.innerHTML =
      '<img src="/CuidArte/img/caliente/04Caliente.png" alt="" />';
  }, 200);

  setTimeout(() => {
    showImage.classList.remove("show-image");
  }, 2000);
});

flipCard5.addEventListener("click", function descubrir() {
  flipCard5.classList.add("descubierto");
  acierto5.classList.add("acertado");
  counter++;
  endGame();

  setTimeout(() => {
    showImage.classList.add("show-image");
    showImage.innerHTML =
      '<img src="/CuidArte/img/caliente/05Caliente.png" alt="" />';
  }, 200);

  setTimeout(() => {
    showImage.classList.remove("show-image");
  }, 2000);
});

flipCard6.addEventListener("click", function descubrir() {
  flipCard6.classList.add("descubierto");
  acierto6.classList.add("acertado");
  counter++;
  endGame();

  setTimeout(() => {
    showImage.classList.add("show-image");
    showImage.innerHTML =
      '<img src="/CuidArte/img/caliente/06Caliente.png" alt="" />';
  }, 200);

  setTimeout(() => {
    showImage.classList.remove("show-image");
  }, 2000);
});

flipCard7.addEventListener("click", function descubrir() {
  flipCard7.classList.add("descubierto");
  acierto7.classList.add("acertado");
  counter++;
  endGame();

  setTimeout(() => {
    showImage.classList.add("show-image");
    showImage.innerHTML =
      '<img src="/CuidArte/img/caliente/07Caliente.png" alt="" />';
  }, 200);

  setTimeout(() => {
    showImage.classList.remove("show-image");
  }, 2000);
});

flipCard8.addEventListener("click", function descubrir() {
  flipCard8.classList.add("descubierto");
  acierto8.classList.add("acertado");
  counter++;
  endGame();

  setTimeout(() => {
    showImage.classList.add("show-image");
    showImage.innerHTML =
      '<img src="/CuidArte/img/caliente/08Caliente.png" alt="" />';
  }, 200);

  setTimeout(() => {
    showImage.classList.remove("show-image");
  }, 2000);
});

flipCard9.addEventListener("click", function descubrir() {
  flipCard9.classList.add("descubierto");
  acierto9.classList.add("acertado");
  counter++;
  endGame();

  setTimeout(() => {
    showImage.classList.add("show-image");
    showImage.innerHTML =
      '<img src="/CuidArte/img/caliente/09Caliente.png" alt="" />';
  }, 200);

  setTimeout(() => {
    showImage.classList.remove("show-image");
  }, 2000);
});

flipCard10.addEventListener("click", function descubrir() {
  flipCard10.classList.add("descubierto");
  acierto10.classList.add("acertado");
  counter++;
  endGame();

  setTimeout(() => {
    showImage.classList.add("show-image");
    showImage.innerHTML =
      '<img src="/CuidArte/img/caliente/10Caliente.png" alt="" />';
  }, 200);

  setTimeout(() => {
    showImage.classList.remove("show-image");
  }, 2000);
});

flipCard11.addEventListener("click", function descubrir() {
  flipCard11.classList.add("descubierto");
  acierto11.classList.add("acertado");
  counter++;
  endGame();

  setTimeout(() => {
    showImage.classList.add("show-image");
    showImage.innerHTML =
      '<img src="/CuidArte/img/caliente/11Caliente.png" alt="" />';
  }, 200);

  setTimeout(() => {
    showImage.classList.remove("show-image");
  }, 2000);
});

flipCard12.addEventListener("click", function descubrir() {
  flipCard12.classList.add("descubierto");
  acierto12.classList.add("acertado");
  counter++;
  endGame();

  setTimeout(() => {
    showImage.classList.add("show-image");
    showImage.innerHTML =
      '<img src="/CuidArte/img/caliente/12Caliente.png" alt="" />';
  }, 200);

  setTimeout(() => {
    showImage.classList.remove("show-image");
  }, 2000);
});

flipCard13.addEventListener("click", function descubrir() {
  flipCard13.classList.add("descubierto");
  acierto13.classList.add("acertado");
  counter++;
  endGame();

  setTimeout(() => {
    showImage.classList.add("show-image");
    showImage.innerHTML =
      '<img src="/CuidArte/img/caliente/13Caliente.png" alt="" />';
  }, 200);

  setTimeout(() => {
    showImage.classList.remove("show-image");
  }, 2000);
});

flipCard14.addEventListener("click", function descubrir() {
  flipCard14.classList.add("descubierto");
  acierto14.classList.add("acertado");
  counter++;
  endGame();

  setTimeout(() => {
    showImage.classList.add("show-image");
    showImage.innerHTML =
      '<img src="/CuidArte/img/caliente/14Caliente.png" alt="" />';
  }, 200);

  setTimeout(() => {
    showImage.classList.remove("show-image");
  }, 2000);
});

flipCard15.addEventListener("click", function descubrir() {
  flipCard15.classList.add("descubierto");
  acierto15.classList.add("acertado");
  counter++;
  endGame();

  setTimeout(() => {
    showImage.classList.add("show-image");
    showImage.innerHTML =
      '<img src="/CuidArte/img/caliente/15Caliente.png" alt="" />';
  }, 200);

  setTimeout(() => {
    showImage.classList.remove("show-image");
  }, 2000);
});

flipCard16.addEventListener("click", function descubrir() {
  flipCard16.classList.add("descubierto");
  acierto16.classList.add("acertado");
  counter++;
  endGame();

  setTimeout(() => {
    showImage.classList.add("show-image");
    showImage.innerHTML =
      '<img src="/CuidArte/img/caliente/16Caliente.png" alt="" />';
  }, 200);

  setTimeout(() => {
    showImage.classList.remove("show-image");
  }, 2000);
});

flipCard17.addEventListener("click", function descubrir() {
  flipCard17.classList.add("descubierto");
  acierto17.classList.add("acertado");
  counter++;
  endGame();

  setTimeout(() => {
    showImage.classList.add("show-image");
    showImage.innerHTML =
      '<img src="/CuidArte/img/caliente/17Caliente.png" alt="" />';
  }, 200);

  setTimeout(() => {
    showImage.classList.remove("show-image");
  }, 2000);
});

//Fin del Juego

function endGame() {
  let bg = document.querySelector("#bgBoard");
  let modal = document.querySelector(".endModal");

  if (counter === 17) {
    setTimeout(() => {
      bg.style.opacity = "1";
      bg.style.visibility = "visible";
    }, 1500);

    setTimeout(() => {
      modal.style.transform = "scale(1)";
      modal.style.opacity = "1";
    }, 2000);
  }
}
