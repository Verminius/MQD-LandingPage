// Menu desplegable

const menuBtn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");

menuBtn.addEventListener("click", function () {
  menu.classList.toggle("desplegado");
});

// Modal

const modal = document.getElementById("cont-modal");

const disenoBtn = document.getElementById("diseno-grafico");
const digitalBtn = document.getElementById("digitales");
const merchBtn = document.getElementById("merchandising");
const bigFormatBtn = document.getElementById("gran-formato");
const didacticoBtn = document.getElementById("didactico");

let tittleModal = document.getElementById("tittle-modal");
let imgModal = document.getElementById("img-modal");
let textModal = document.getElementById("text-modal");

disenoBtn.addEventListener("click", () => {
  modal.classList.add("show-modal");
  imgModal.src = "/img/dg-modal.png";
  tittleModal.innerHTML = "";
  tittleModal.innerHTML = "<h3>Diseño Gráfico</h3>";
  textModal.innerHTML = "";
  textModal.innerHTML =
    "<p>Nuestro fuerte es la creatividad, en cada proyecto de diseño ponemos todo nuestro empeño para lograr piezas únicas y efectivas. En este proceso iniciamos con la recopilación de información, continuamos realizando un boceto, digitalizamos, ilustramos, diagramamos, damos forma, color y estilo para que nuestro diseño quede listo.</p>";
});

digitalBtn.addEventListener("click", () => {
  modal.classList.add("show-modal");
  imgModal.src = "/img/pd-modal.png";
  tittleModal.innerHTML = "";
  tittleModal.innerHTML = "<h3>Productos Digitales</h3>";
  textModal.innerHTML = "";
  textModal.innerHTML =
    "<p>Cada vez la tecnología es más importante en nuestras vidas, por eso utilizamos los medios digitales para enseñar e informar. Si tienes una idea sobre un tema en específico que quieres reforzar en tu compañía, te podemos apoyar desarrollando vídeo cápsulas animadas en 2D o grabadas en locación, gifs y juegos digitales como ruletas, concéntrese, quién quiere ser millonario entre otros.</p>";
});

merchBtn.addEventListener("click", () => {
  modal.classList.add("show-modal");
  imgModal.src = "/img/merch-modal.png";
  tittleModal.innerHTML = "";
  tittleModal.innerHTML = "<h3>Merchandising</h3>";
  textModal.innerHTML = "";
  textModal.innerHTML =
    "<p>Si estás trabajando en una campaña o evento sobre algún tema en específico y quieres obsequiar un producto que se adecúe muy bien al tema que quieres reforzar, puedes solicitarlo y nosotros te guiaremos en la búsqueda de los mejores promocionales que podrán ser marcados con el logo de tu compañía.</p>";
});

didacticoBtn.addEventListener("click", () => {
  modal.classList.add("show-modal");
  imgModal.src = "/img/mtd-modal.png";
  tittleModal.innerHTML = "";
  tittleModal.innerHTML = "<h3>Material Técnico Didáctico</h3>";
  textModal.innerHTML = "";
  textModal.innerHTML =
    '<p><span class ="italic">¿Sabías que puedes potenciar una habilidad, conocimiento o una actitud en específico mediante un juego?</span> <br><br>Si tienes una idea sobre como enseñar a tus colaboradores a cuidar de su salud y su seguridad realizando una actividad divertida, nosotros podemos apoyarte en su desarrollo para que la puedas materializar y llevarla a cabo en tu compañía. Algunos de los juegos que hacemos son:<br><br> <span class ="italic">Parqués, Golosa, Dominó, Escaleras y serpientes, Concéntrese, entre otros.</span></p>';
});

bigFormatBtn.addEventListener("click", () => {
  modal.classList.add("show-modal");
  imgModal.src = "/img/igf-modal.png";
  tittleModal.innerHTML = "";
  tittleModal.innerHTML = "<h3>Impresión Gran Formato</h3>";
  textModal.innerHTML = "";
  textModal.innerHTML =
    '<p>¡Para grandes ideas, las mejores impresiones!<br><br> Contamos con la maquinaria necesaria para realizar proyectos coloridos, utilizando tintas ecosolventes, trabajamos con los mejores materiales, garantizamos durabilidad y excelentes acabados. Algunos de estos productos son:<br><br> <span class ="italic">Señalización, tapetes para juegos, pendones, retablos, tableros, stickers y vinilos.</span></p>';
});

const closeModal = document.querySelector(".btn-sec");

closeModal.addEventListener("click", () => {
  modal.classList.remove("show-modal");
});
