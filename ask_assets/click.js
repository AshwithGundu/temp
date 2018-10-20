
const f = document.getElementById("ee1");
const s = document.getElementById("ee2");
// function c1(a,b) {
//     document.getElementById(a).style.zIndex = "2"
//     document.getElementById(b).style.zIndex = "-2"
// }
f.style.display = "none"

function c2() {
    f.style.zIndex = 1;
    s.style.zIndex = -1;
    f.style.display = "block"
    
}

function c1() {
    f.style.zIndex = -1;
    s.style.zIndex = 1;
}

