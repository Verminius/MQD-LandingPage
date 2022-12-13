//DELAY INICAL

const mainLogo = document.getElementById("mainLogo");
const menu = document.getElementById("menu");

setTimeout(() => {
  mainLogo.classList.add("delay");
  menu.classList.add("delay-btn");
}, 200);

//INSTRUCCIONES

const instrucciones = document.getElementById("instrucciones");
const footerIzquierda = document.querySelector(".img-izq");
const contInst = document.querySelector(".cont-inst");
const inst1 = document.getElementById("inst1");
const inst2 = document.getElementById("inst2");
const inst3 = document.getElementById("inst3");
const inst4 = document.getElementById("inst4");
const close1 = document.getElementById("close1");
const close2 = document.getElementById("close2");
const close3 = document.getElementById("close3");
const close4 = document.getElementById("close4");

//Abrir instrucciones
instrucciones.addEventListener("click", () => {
  contInst.style.visibility = "visible";
  contInst.style.opacity = 1;
  menu.classList.toggle("delay-btn");
  mainLogo.classList.toggle("moveToHeader");
  footerIzquierda.classList.toggle("moveOut");

  setTimeout(() => {
    inst1.classList.toggle("show-instruccion");
  }, 300);
});

//Cerrar instrucciones

close1.addEventListener("click", () => {
  menu.classList.toggle("delay-btn");
  mainLogo.classList.toggle("moveToHeader");
  footerIzquierda.classList.toggle("moveOut");
  inst1.classList.toggle("show-instruccion");

  setTimeout(() => {
    contInst.style.visibility = "hidden";
    contInst.style.opacity = 0;
  }, 300);
});

close2.addEventListener("click", () => {
  menu.classList.toggle("delay-btn");
  mainLogo.classList.toggle("moveToHeader");
  footerIzquierda.classList.toggle("moveOut");
  inst1.classList.toggle("show-instruccion");
  inst1.classList.toggle("slide-left");
  inst2.classList.toggle("show-instruccion");

  setTimeout(() => {
    contInst.style.visibility = "hidden";
    contInst.style.opacity = 0;
  }, 300);
});

close3.addEventListener("click", () => {
  menu.classList.toggle("delay-btn");
  mainLogo.classList.toggle("moveToHeader");
  footerIzquierda.classList.toggle("moveOut");
  inst1.classList.toggle("show-instruccion");
  inst1.classList.toggle("slide-left");
  inst2.classList.toggle("show-instruccion");
  inst2.classList.toggle("slide-left");
  inst3.classList.toggle("show-instruccion");

  setTimeout(() => {
    contInst.style.visibility = "hidden";
    contInst.style.opacity = 0;
  }, 300);
});

close4.addEventListener("click", () => {
  menu.classList.toggle("delay-btn");
  mainLogo.classList.toggle("moveToHeader");
  footerIzquierda.classList.toggle("moveOut");
  inst1.classList.toggle("show-instruccion");
  inst1.classList.toggle("slide-left");
  inst2.classList.toggle("show-instruccion");
  inst2.classList.toggle("slide-left");
  inst3.classList.toggle("show-instruccion");
  inst3.classList.toggle("slide-left");
  inst4.classList.toggle("show-instruccion");

  setTimeout(() => {
    contInst.style.visibility = "hidden";
    contInst.style.opacity = 0;
  }, 300);
});

//Navegación Instrucciones
const derecha1 = document.getElementById("rightArrow1");

const derecha2 = document.getElementById("rightArrow2");
const izquierda2 = document.getElementById("leftArrow2");
const derecha3 = document.getElementById("rightArrow3");
const izquierda3 = document.getElementById("leftArrow3");
const done = document.getElementById("done");
const izquierda4 = document.getElementById("leftArrow4");

//instruccion 1

derecha1.addEventListener("click", () => {
  inst1.classList.toggle("slide-left");

  setTimeout(() => {
    inst2.classList.toggle("show-instruccion");
  }, 100);
});

//instruccion 2

izquierda2.addEventListener("click", () => {
  inst2.classList.toggle("show-instruccion");

  setTimeout(() => {
    inst1.classList.toggle("slide-left");
  }, 100);
});

derecha2.addEventListener("click", () => {
  inst2.classList.toggle("slide-left");

  setTimeout(() => {
    inst3.classList.toggle("show-instruccion");
  }, 100);
});

//instrucciones 3

izquierda3.addEventListener("click", () => {
  inst3.classList.toggle("show-instruccion");

  setTimeout(() => {
    inst2.classList.toggle("slide-left");
  }, 100);
});

derecha3.addEventListener("click", () => {
  inst3.classList.toggle("slide-left");

  setTimeout(() => {
    inst4.classList.toggle("show-instruccion");
  }, 100);
});

//instrucciones 4

izquierda4.addEventListener("click", () => {
  inst4.classList.toggle("show-instruccion");

  setTimeout(() => {
    inst3.classList.toggle("slide-left");
  }, 100);
});

done.addEventListener("click", () => {
  menu.classList.toggle("delay-btn");
  mainLogo.classList.toggle("moveToHeader");
  footerIzquierda.classList.toggle("moveOut");
  inst1.classList.toggle("show-instruccion");
  inst1.classList.toggle("slide-left");
  inst2.classList.toggle("show-instruccion");
  inst2.classList.toggle("slide-left");
  inst3.classList.toggle("show-instruccion");
  inst3.classList.toggle("slide-left");
  inst4.classList.toggle("show-instruccion");

  setTimeout(() => {
    contInst.style.visibility = "hidden";
    contInst.style.opacity = 0;
  }, 300);
});

//transicion de index a menu de juego
const inicio = document.getElementById("inicio");

inicio.addEventListener("click", () => {
  menu.classList.toggle("delay-btn");
  mainLogo.classList.toggle("moveToHeader");
  footerIzquierda.classList.toggle("moveOut");

  setTimeout(() => {
    location.assign("/caza-peligros-eemb/game.html");
  }, 700);
});
