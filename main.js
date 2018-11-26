let display = document.querySelector(".fa-bars");
let modal = document.getElementById("modal");
display.addEventListener("click", function () {
    modal.classList.toggle("show");
    console.log("modal open");
})
modal.firstElementChild.addEventListener("click", function () {
    modal.classList.toggle("show");
    console.log("modal closed");
})