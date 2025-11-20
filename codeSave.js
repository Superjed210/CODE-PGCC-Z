const red = document.getElementById("red");
const green = document.getElementById("green");
const blue = document.getElementById("blue");
const yellow = document.getElementById("yellow");
const next = document.getElementById("next");

function color_change(txt, colr) {
    txt.style.color = colr;
    txt.innerText = "||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||"
}

red.onclick = function () {color_change(document.getElementById("color1"), "red")}
green.onclick = function () {color_change(document.getElementById("color2"), "green")}
blue.onclick = function () {color_change(document.getElementById("color3"), "blue")}
yellow.onclick = function () {color_change(document.getElementById("color4"), "yellow")}
next.onclick = function () {window.location.href = "index2.html"}



const themeButton = document.getElementById("press");
const savedTheme = localStorage.getItem("theme");

if (savedTheme) {document.body.classList.add(savedTheme)} else {document.body.classList.add("light-mode")}

function swapTheme() {
    if (document.body.classList.contains("light-mode")) {
        console.log("contains light");
        document.body.classList.replace("light-mode", "dark-mode");
        localStorage.setItem("theme", "dark-mode");
    } else {
        console.log("doesnt contain light");
        document.body.classList.replace("dark-mode", "light-mode");
        localStorage.setItem("theme", "light-mode");
    }
}


themeButton.addEventListener("click", swapTheme);