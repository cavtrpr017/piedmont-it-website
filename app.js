
document.addEventListener("DOMContentLoaded", function () {

    const mobileToggle = document.querySelector(".mobile-menu");
    const navLinks = document.querySelector(".nav-links");

    if (mobileToggle && navLinks) {

        mobileToggle.addEventListener("click", function () {

            navLinks.classList.toggle("active");

        });

    }

});

