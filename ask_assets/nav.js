window.onscroll = function () {
    myFunction()
};

var header = document.getElementById("myHeader");
var sticky = header.offsetTop;
header.style.display = "none";

function myFunction() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
        header.classList.remove("heading");
        header.style.display = "block";
    } else {
        header.classList.remove("sticky");
        header.classList.add("heading");
        header.style.display = "none";
    }
}
