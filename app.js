
document.addEventListener("DOMContentLoaded", function () {

    const mobileToggle = document.querySelector(".mobile-menu");
    const navLinks = document.querySelector(".nav-links");

    if (mobileToggle && navLinks) {
        mobileToggle.addEventListener("click", function () {
            navLinks.classList.toggle("active");
        });
    }

    const assessmentScore = document.getElementById("assessmentScore");

    if (assessmentScore) {

        const radios = document.querySelectorAll(
            'input[type="radio"]'
        );

        function calculateScore() {

            let score = 0;

            document
                .querySelectorAll(
                    'input[type="radio"]:checked'
                )
                .forEach(function (radio) {

                    if (radio.value === "Yes") {
                        score++;
                    }

                });

            let result;
            let color;

            if (score >= 10) {
                result = "Low Risk";
                color = "#2e7d32";
            }
            else if (score >= 6) {
                result = "Moderate Risk";
                color = "#f9a825";
            }
            else {
                result = "High Risk";
                color = "#c62828";
            }

            assessmentScore.innerHTML = `
                <h2>Your Assessment Score</h2>

                <p>
                    <strong>${score} Yes Answers</strong>
                </p>

                <h3 style="color:${color}">
                    ${result}
                </h3>
            `;
        }

        radios.forEach(function (radio) {
            radio.addEventListener(
                "change",
                calculateScore
            );
        });

    }

});
