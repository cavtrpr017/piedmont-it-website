

document.addEventListener("DOMContentLoaded", function () {

    const mobileToggle = document.querySelector(".mobile-menu");
    const navLinks = document.querySelector(".nav-links");

    if (mobileToggle && navLinks) {

        mobileToggle.addEventListener("click", function () {

            navLinks.classList.toggle("active");

        });

    }

    const assessmentScore =
        document.getElementById("assessmentScore");

    if (assessmentScore) {

        const radios =
            document.querySelectorAll(
                'input[type="radio"]'
            );

        function calculateScore() {

            let score = 0;

            document
                .querySelectorAll(
                    'input[type="radio"]:checked'
                )
                .forEach(function(radio){

                    if(radio.value === "Yes"){
                        score++;
                    }

                });

            let result;

            if(score >= 10){

                result =
                    "Resilient - Your environment appears highly proactive.";

            } else if(score >= 6){

                result =
                    "Moderate Risk - Several gaps may exist.";

            } else {

                result =
                    "High Risk - Significant improvements are recommended.";

            }

            assessmentScore.innerHTML = `
                <h2>Your Assessment Score</h2>
                <p><strong>${score} Yes Answers</strong></p>
                <p>${result}</p>
            `;

        }

        radios.forEach(function(radio){

            radio.addEventListener(
                "change",
                calculateScore
            );

        });

    }

});

