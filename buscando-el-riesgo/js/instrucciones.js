//cajas

const inst1 = document.getElementById("inst1");
const inst2 = document.getElementById("inst2");
const inst3 = document.getElementById("inst3");
const inst4 = document.getElementById("inst4");
const inst5 = document.getElementById("inst5");
const inst6 = document.getElementById("inst6");

//botones

const forward1 = document.getElementById("forward1");

const back2 = document.getElementById("back2");
const forward2 = document.getElementById("forward2");

const back3 = document.getElementById("back3");
const forward3 = document.getElementById("forward3");

const back4 = document.getElementById("back4");
const forward4 = document.getElementById("forward4");

const back5 = document.getElementById("back5");
const forward5 = document.getElementById("forward5");

//inicio delay

setTimeout(() => {
  inst1.classList.add("show");
}, 200);

//slide 1

forward1.addEventListener("click", () => {
  inst1.classList.add("slideleft");
  setTimeout(() => {
    inst2.classList.add("showleft");
  }, 300);
});

//slide 2

back2.addEventListener("click", () => {
  setTimeout(() => {
    inst1.classList.remove("slideleft");
  }, 300);
  inst2.classList.remove("showleft");
});

forward2.addEventListener("click", () => {
  inst2.classList.add("slideleft");
  setTimeout(() => {
    inst3.classList.add("showleft");
  }, 300);
});

//slide 3

back3.addEventListener("click", () => {
  setTimeout(() => {
    inst2.classList.remove("slideleft");
  }, 300);
  inst3.classList.remove("showleft");
});

forward3.addEventListener("click", () => {
  inst3.classList.add("slideleft");
  setTimeout(() => {
    inst4.classList.add("showleft");
  }, 300);
});

//slide 4

back4.addEventListener("click", () => {
  setTimeout(() => {
    inst3.classList.remove("slideleft");
  }, 300);
  inst4.classList.remove("showleft");
});

forward4.addEventListener("click", () => {
  inst4.classList.add("slideleft");
  setTimeout(() => {
    inst5.classList.add("showleft");
  }, 300);
});

//slide 5

back5.addEventListener("click", () => {
  setTimeout(() => {
    inst4.classList.remove("slideleft");
  }, 300);
  inst5.classList.remove("showleft");
});

forward5.addEventListener("click", () => {
  inst5.classList.add("slideleft");
  setTimeout(() => {
    inst6.classList.add("showleft");
  }, 300);
});
