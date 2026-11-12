const element = document.querySelector(".portrait");

function responsiveMode() {
    if (window.innerWidth <= 768) {
        element.classList.remove("portrait");
    } else {
        element.classList.add("portrait");
    }
}

window.addEventListener("resize", responsiveMode);
responsiveMode();