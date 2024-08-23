var navbar = document.querySelector(".side-navbar");

function opennavbar() {
    navbar.style.left = "0";
}

function closenavbar() {
    navbar.style.left = "-60%";
}
var buttonclick = document.querySelector(".Subscribe");

function Subscribe() {
    buttonclick.style.backgroundColor = "brown";
}

buttonclick.addEventListener("click", Subscribe);

 