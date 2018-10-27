window.onscroll = function () {
    myFunction()
};

let header = document.getElementById("myHeader");
let sticky = header.offsetTop;
header.style.display = "none";
let sign = document.getElementById("sign");
let si = document.getElementById("sign_inside");
let fdd = document.getElementById("fdd");
let stick = fdd.offsetTop;
let status = true

function myFunction() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
        header.classList.remove("heading");
        header.style.display = "block";
       
        // if (status) {
             sign.appendChild(si);
         status = false;
        // }
    } else {
        header.classList.remove("sticky");
        header.classList.add("heading");
        header.style.display = "none";
    }
}
