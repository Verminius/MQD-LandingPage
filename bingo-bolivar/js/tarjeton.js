//objeto Valor
class Valor {
  constructor(titulo, img, descripcion) {
    this.titulo = titulo;
    this.img = img;
    this.descripcion = descripcion;
  }
}

//Valores
const respeto = new Valor(
  "Respeto",
  "https://cdn-icons-png.flaticon.com/512/5521/5521365.png",
  "Aceptémonos los unos a los otros sin intensiones de querer cambiarnos, en las diferencias esta nuestra identidad."
);

const generosidad = new Valor(
  "Generosidad",
  "https://cdn-icons-png.flaticon.com/512/5521/5521365.png",
  "Compartamos con amabilidad y de manera desinteresada con nuestros seres queridos."
);

const amor = new Valor(
  "Amor",
  "https://cdn-icons-png.flaticon.com/512/5521/5521365.png",
  "Anhelemos la compañía, alegrémonos de los éxitos y compartamos los malos momentos de nuestros seres amados."
);

const justicia = new Valor(
  "Justicia",
  "https://cdn-icons-png.flaticon.com/512/5521/5521365.png",
  "Todos tenemos derechos y deberes, si nos aseguramos de cumplirlos la convivencia no será un problema."
);

const responsabilidad = new Valor(
  "Responsabilidad",
  "https://cdn-icons-png.flaticon.com/512/5521/5521365.png",
  "Debemos ser capaces de asumir las consecuencias de nuestras acciones y decisiones, buscando el bien común de nuestra familia."
);

const gratitud = new Valor(
  "Gratitud",
  "https://cdn-icons-png.flaticon.com/512/5521/5521365.png",
  "Sintamos alegría incluso en con los detalles más pequeños, disfrutemos de las experiencias, momentos y seres amados en la vida."
);

const paciencia = new Valor(
  "Paciencia",
  "https://cdn-icons-png.flaticon.com/512/5521/5521365.png",
  "Debemos saber esperar cuando deseamos algo o tenemos expectativas de los demás. No todos van al mismo ritmo."
);

const compasion = new Valor(
  "Compasión",
  "https://cdn-icons-png.flaticon.com/512/5521/5521365.png",
  "Seamos empáticos en los momentos malos de nuestra familia, comprendámoslos con ternura y amor. No siempre se tienen buenos días."
);

const perdon = new Valor(
  "Perdón",
  "https://cdn-icons-png.flaticon.com/512/5521/5521365.png",
  "Decidir no guardar rencores ni remordimientos con tus seres queridos es uno de los más puros actos de amor y aceptación."
);

const bondad = new Valor(
  "Bondad",
  "https://cdn-icons-png.flaticon.com/512/5521/5521365.png",
  "Estemos dispuestos permanentemente a hacer el bien, de manera amable y generosa."
);

//Variables
let btnBack = document.querySelector(".btn");
let visibleBg = document.querySelector(".cont-modal");
let showWin = document.querySelector(".win");
let tarjeton = document.querySelector(".container");
let txtCont = document.querySelector(".text-container");

let valorCont = document.querySelector(".valor-familiar");
let closeBtn = document.querySelector(".closeBtn");
let titulo = document.querySelector(".titulo");
let img = document.querySelector(".img-cont");
let text = document.querySelector(".text-cont");

let valoresMostrados = 0;

const valores = [
  respeto,
  generosidad,
  amor,
  justicia,
  responsabilidad,
  gratitud,
  paciencia,
  compasion,
  perdon,
  bondad,
];

//funcion MostrarValor
function mostrarValor(valor) {
  titulo.innerHTML = `<p>${valor.titulo}</p>`;
  img.innerHTML = `<img src="${valor.img}" alt="" />`;
  text.innerHTML = `<p>${valor.descripcion}</p>`;
}

function limpiarValor() {
  titulo.innerHTML = "";
  img.innerHTML = "";
  text.innerHTML = "";
}

let indiceAleatorio;

//---------------------------------------------------------------------------------

const table = document.querySelector("#tblBingo");
const letter = document.querySelectorAll(".letter-bingo");

const winningPositions = [
  [0, 1, 2, 3, 4],
  [5, 6, 7, 8, 9],
  [10, 11, 12, 13, 14],
  [15, 16, 17, 18, 19],
  [20, 21, 22, 23, 24],
  [0, 5, 10, 15, 20],
  [1, 6, 11, 16, 21],
  [2, 7, 12, 17, 22],
  [3, 8, 13, 18, 23],
  [4, 9, 14, 19, 24],
];

let arr = Array.apply(null, { length: 100 }).map(Number.call, Number);

arr.shift();
shuffle(arr);
function shuffle(arr) {
  let currentIndex = arr.length,
    randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [arr[currentIndex], arr[randomIndex]] = [
      arr[randomIndex],
      arr[currentIndex],
    ];
  }

  return arr;
}

let iterator = 0;

for (i = 0; i < 5; i++) {
  let tr = document.createElement("tr");
  table.appendChild(tr);

  for (j = 0; j < 5; j++) {
    let td = document.createElement("td");
    td.id = arr[iterator].toString();
    td.style.height = "20%";
    td.style.width = "20%";
    td.classList.add("main-table-cell");

    let div = document.createElement("div");
    div.classList.add("cell-format");
    div.textContent = arr[iterator].toString();
    td.appendChild(div);
    tr.appendChild(td);
    iterator++;
  }
}

const cell = document.querySelectorAll(".main-table-cell");

let winningIterator = 0;

cell.forEach((e) => {
  e.addEventListener("click", () => {
    e.classList.add("strickout");
    document.querySelector("#click").cloneNode().play();

    if (matchWin()) {
      letter[winningIterator].classList.add("show-bingo");

      setTimeout(() => {
        winningIterator++;
        if (winningIterator === 5) {
          visibleBg.style.visibility = "visible";
          showWin.classList.add("show-win");
          btnBack.classList.add("showBtn");
          txtCont.classList.add("show-text");
          document.querySelector("#victory").play();
        }
      }, 300);

      btnBack.addEventListener("click", () => {
        visibleBg.style.visibility = "hidden";
        showWin.classList.remove("show-win");
        btnBack.classList.remove("showBtn");
        txtCont.classList.remove("show-text");

        setTimeout(() => {
          tarjeton.classList.remove("animate__bounceInUp");
          tarjeton.classList.add("animate__bounceOutDown");
        }, 5000);

        setTimeout(() => {
          location.assign("/bingo-bolivar/index.html");
        }, 5500);
      });
    }
  });
});

function matchWin() {
  const cell = document.querySelectorAll(".main-table-cell");

  return winningPositions.some((combination) => {
    let ite = 0;
    combination.forEach((index) => {
      if (cell[index].classList.contains("strickout")) ite++;
    });

    if (ite === 5) {
      let indexWin = winningPositions.indexOf(combination);
      winningPositions.splice(indexWin, 1);
      document.querySelector("#complete").play();
      valoresMostrados++;

      if (valoresMostrados != 5) {
        setTimeout(() => {
          indiceAleatorio = Math.floor(Math.random() * 9 + 1);
          mostrarValor(valores[indiceAleatorio]);
          visibleBg.style.visibility = "visible";
          valorCont.classList.add("show-valor");
        }, 500);

        window.addEventListener("click", function (e) {
          // console.log(e.target);
          if (e.target == visibleBg || e.target == valorCont) {
            setTimeout(() => {
              visibleBg.style.visibility = "hidden";
              valorCont.classList.remove("show-valor");
              indiceAleatorio = 0;
              limpiarValor();
            }, 600);
          }
        });
      } else {
        visibleBg.style.visibility = "visible";
        valorCont.classList.remove("show-valor");
        indiceAleatorio = 0;
        window.removeEventListener("click", function (e) {
          if (e.target == visibleBg) {
            setTimeout(() => {
              visibleBg.style.visibility = "hidden";
              valorCont.classList.remove("show-valor");
              indiceAleatorio = 0;
              limpiarValor();
            }, 300);
          }
        });
        limpiarValor();
      }
    }

    return combination.every((index) => {
      return cell[index].classList.contains("strickout");
    });
  });
}

console.log(arr);
