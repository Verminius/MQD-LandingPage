//Delay Inicio

const menuIndex = document.querySelector(".index");

setTimeout(() => {
  menuIndex.classList.add("after");
}, 700);

//Slider Instrucciones

const instruccionesBtn = document.querySelector("#instrucciones");
const inst1 = document.querySelector("#inst1");
const instBtn1 = document.querySelector("#instBtn1");
const inst2 = document.querySelector("#inst2");
const instBtn2 = document.querySelector("#instBtn2");
const inst3 = document.querySelector("#inst3");
const instBtn3 = document.querySelector("#instBtn3");
const inst4 = document.querySelector("#inst4");
const instBtn4 = document.querySelector("#instBtn4");
const inst5 = document.querySelector("#inst5");
const instBtn5 = document.querySelector("#instBtn5");
const inst6 = document.querySelector("#inst6");
const instBtn6 = document.querySelector("#instBtn6");
const inst7 = document.querySelector("#inst7");
const instBtn7 = document.querySelector("#instBtn7");
const inst8 = document.querySelector("#inst8");
const instBtn8 = document.querySelector("#instBtn8");

instruccionesBtn.addEventListener("click", () => {
  menuIndex.classList.add("slide");
  setTimeout(() => {
    inst1.classList.add("show-inst");
  }, 600);
});

instBtn1.addEventListener("click", () => {
  inst1.classList.remove("show-inst");
  inst1.classList.add("slide-inst");
  setTimeout(() => {
    inst2.classList.add("show-inst");
  }, 600);
});

instBtn2.addEventListener("click", () => {
  inst2.classList.remove("show-inst");
  inst2.classList.add("slide-inst");
  setTimeout(() => {
    inst3.classList.add("show-inst");
  }, 600);
});

instBtn3.addEventListener("click", () => {
  inst3.classList.remove("show-inst");
  inst3.classList.add("slide-inst");
  setTimeout(() => {
    inst4.classList.add("show-inst");
  }, 600);
});

instBtn4.addEventListener("click", () => {
  inst4.classList.remove("show-inst");
  inst4.classList.add("slide-inst");
  setTimeout(() => {
    inst5.classList.add("show-inst");
  }, 600);
});

instBtn5.addEventListener("click", () => {
  inst5.classList.remove("show-inst");
  inst5.classList.add("slide-inst");
  setTimeout(() => {
    inst6.classList.add("show-inst");
  }, 600);
});

instBtn6.addEventListener("click", () => {
  inst6.classList.remove("show-inst");
  inst6.classList.add("slide-inst");
  setTimeout(() => {
    inst7.classList.add("show-inst");
  }, 600);
});

instBtn7.addEventListener("click", () => {
  inst7.classList.remove("show-inst");
  inst7.classList.add("slide-inst");
  setTimeout(() => {
    inst8.classList.add("show-inst");
  }, 600);
});
