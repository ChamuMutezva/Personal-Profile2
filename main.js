let display = document.querySelector(".fa-bars");
let modal = document.getElementById("modal");
let modalBar = document.querySelector("#modal .fa-bars");
console.log(modalBar);
/*
let bar = display.forEach(item => item.addEventListener("click", function () {
    modal.classList.toggle("show");    
    item.style.transform = "rotate(90deg)";
}) );
*/

display.addEventListener("click", function () {
    modal.classList.toggle("show");
modalBar.style.transform = "rotate(90deg)";  
   
    hideScrolls();
    console.log("modal open");
})
modal.firstElementChild.addEventListener("click", function () {
    modal.classList.toggle("show");
  display.style.transform = "rotate(0deg)";   
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

//register service worker
if ("serviceWorker" in navigator) {
    // console.log("service worker supported");
    window.addEventListener("load", () => {
        navigator.serviceWorker
            .register("swRegister.js")
            .then(reg => console.log("sevice worker registered"))
            .catch(err => console.log(`service worker: error: ${err}`));
    });
}

