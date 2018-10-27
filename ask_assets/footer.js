window.onscroll = function () {
    my()
};

let sign = document.getElementById("sign");
let si = document.getElementById("sign_inside");
let fdd = document.getElementById("fdd");
let stick = fdd.offsetTop;
let status = true

function my() {
    if (window.pageYOffset > stick && status) {
        // sign.innerHTML="gundu";
        sign.appendChild(si);
        status = false;
    }

}
