let display = document.querySelector(".fa-bars");
let modal = document.getElementById("modal");
let modalBar = document.querySelector("#modal .fa-bars");
console.log(modalBar);
/*
let displayBars = document.querySelectorAll(".fa-bars");
console.log(displayBars);
let bar = displayBars.forEach(item => item.addEventListener("click", function () {
    console.log(item);
    if (modal.classList.contains("show")) {
        item.style.transform = "rotate(0deg)";
        console.log("class show exist");
    } else {
        console.log("class show does not exist at all");
        item.style.transform = "rotate(90deg)";
    }   
    modal.classList.toggle("show");    
    //item.style.transform = "rotate(90deg)";
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

