// Password Visiblity
var passWord = document.getElementById("password-visibility");

if (passWord) {
    passWord.addEventListener('click', passwordFunction);
}

function passwordFunction() {
    var passInput = document.getElementById("psw-input");
    passWord.classList.toggle("active");

    if (passInput.type === "password") {
        passInput.type = "text";
    } else {
        passInput.type = "password";
    }
}
// ======================
// Chapter 5.0 Preloader
// ======================

var preloader = document.getElementById("preloader");

if (preloader) {
    window.addEventListener("load", function () {
        var fadeOut = setInterval(function () {
            if (!preloader.style.opacity) {
                preloader.style.opacity = 1;
            }
            if (preloader.style.opacity > 0) {
                preloader.style.opacity -= 0.1;
            } else {
                clearInterval(fadeOut);
                preloader.remove();
            }
        }, 20);
    });
}