// Menu desplegable

const menuBtn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");

menuBtn.addEventListener("click", function() {
    menu.classList.toggle("desplegado");
});

// Modal

const modal = document.getElementById("cont-modal");
const disenoBtn = document.getElementById("diseno-grafico");
const digitalBtn = document.getElementById("digitales");
const merchBtn = document.getElementById("merchandising");
const bigFormatBtn = document.getElementById("gran-formato");
const didacticoBtn = document.getElementById("didactico");
const closeModal = document.querySelector(".btn-sec");

closeModal.addEventListener("click", () => {
    modal.classList.remove("show-modal");
})

disenoBtn.addEventListener("click", () => {
    modal.classList.add("show-modal");

})

digitalBtn.addEventListener("click", () => {
    modal.classList.add("show-modal");
})

merchBtn.addEventListener("click", () => {
    modal.classList.add("show-modal");
})

didacticoBtn.addEventListener("click", () => {
    modal.classList.add("show-modal");
})

bigFormatBtn.addEventListener("click", () => {
    modal.classList.add("show-modal");
})