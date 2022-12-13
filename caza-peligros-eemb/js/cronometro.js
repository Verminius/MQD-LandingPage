var h1 = document.getElementById("timer");
var start = document.getElementById("strt");
var stop = document.getElementById("stp");

var sec = 0;
var min = 0;

var t;

function tick() {
  sec++;
  if (sec >= 60) {
    sec = 0;
    min++;
  }
}

function add() {
  tick();
  h1.textContent =
    (min > 9 ? min : "0" + min) + ":" + (sec > 9 ? sec : "0" + sec);
  timer();
}

function timer() {
  t = setTimeout(add, 1000);
}

timer();

function stopTimer() {
  clearTimeout(t);
}
