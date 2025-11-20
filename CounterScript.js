const savedTheme = localStorage.getItem("theme");
console.log(savedTheme);
if (savedTheme) {document.body.classList.add(savedTheme)} else {document.body.classList.add("light-mode")}

const pluss = document.getElementById('pluss');
const minuss= document.getElementById('minuss');
const num = document.getElementById('numDisplay');
const back = document.getElementById('back');



function addi() {
    let numVal = num.textContent;
    console.log(numVal);
    num.textContent++;

}
function subbi() {
    let numVal = num.textContent;
    if (numVal == 0) {
        console.log(numVal, "ZERO");

    }else{
        console.log(numVal);
        num.textContent--;
    }
}

pluss.addEventListener('click', addi);
minuss.addEventListener('click', subbi);
back.onclick = function () {window.location.href = "index.html"}
