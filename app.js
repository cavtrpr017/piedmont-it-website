
// Mobile Navigation


document.addEventListener("DOMContentLoaded", function () {

    const mobileToggle = document.querySelector(".mobile-menu");
    const navLinks = document.querySelector(".nav-links");

    if (mobileToggle && navLinks) {

        mobileToggle.addEventListener("click", function () {

            navLinks.classList.toggle("active");

        });

    }


    // Smooth Scrolling

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        anchor.addEventListener("click", function (e) {

            e.preventDefault();

            const target = document.querySelector(
                this.getAttribute("href")
            );

            if(target){
                target.scrollIntoView({
                    behavior:"smooth"
                });
            }

        });

    });

});
