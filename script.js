/* ===========================
   ELHNDAZA
   script.js
=========================== */

document.addEventListener("DOMContentLoaded", function () {

    // تأثير الظهور أثناء النزول
    const cards = document.querySelectorAll(".contact-card");

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

            }

        });

    }, {
        threshold: 0.15
    });

    cards.forEach((card, index) => {

        card.style.opacity = "0";
        card.style.transform = "translateY(40px)";
        card.style.transition = "all .6s ease";
        card.style.transitionDelay = (index * 0.08) + "s";

        observer.observe(card);

    });

    // تأثير Hover

    cards.forEach(card => {

        card.addEventListener("mouseenter", function () {

            this.style.transform = "translateY(-8px) scale(1.02)";

        });

        card.addEventListener("mouseleave", function () {

            this.style.transform = "translateY(0px) scale(1)";

        });

    });

    // لمعان الزر

    cards.forEach(card => {

        card.addEventListener("mousemove", function (e) {

            const rect = this.getBoundingClientRect();

            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            this.style.backgroundPosition = `${x}px ${y}px`;

        });

    });

});


// زر العودة للأعلى

const topBtn = document.createElement("button");

topBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';

topBtn.className = "top-button";

document.body.appendChild(topBtn);

window.addEventListener("scroll", () => {

    if (window.scrollY > 350) {

        topBtn.classList.add("show");

    } else {

        topBtn.classList.remove("show");

    }

});

topBtn.onclick = () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

};
