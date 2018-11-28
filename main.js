let display = document.querySelector(".fa-bars");
let modal = document.getElementById("modal");

display.addEventListener("click", function () {
    modal.classList.toggle("show");
    hideScrolls();
    console.log("modal open");
})
modal.firstElementChild.addEventListener("click", function () {
    modal.classList.toggle("show");
    hideScrolls();
    console.log("modal closed");
})

function hideScrolls() {
    if (document.body.style.overflow === "hidden") {
        document.body.style.overflow = "visible";
    } else {
        document.body.style.overflow = "hidden";
    }
}