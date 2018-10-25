window.onscroll = function () {
    my()
};

var sign = document.getElementById("sign");
var si = document.getElementById("sign_inside");
var fdd = document.getElementById("fdd");
var stick = fdd.offsetTop;

function my() {
    if (window.pageYOffset > stick) {
        // sign.innerHTML="gundu";
        sign.appendChild(si)
    } 
    // else {
    //     header.classList.remove("sticky");
    //     header.classList.add("heading");
    //     header.style.display = "none";
    // }
}
