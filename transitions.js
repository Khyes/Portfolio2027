document.addEventListener("DOMContentLoaded", function () {
    // FADE IN au chargement
    gsap.fromTo(".main-content",
        { opacity: 0 },
        { opacity: 1, duration: 0.5, delay: 0.5, ease: "power2.out" }
    );
});

// FADE OUT au clic
document.addEventListener("click", function (e) {
    var link = e.target.closest("a");
    if (!link) return;

    var href = link.getAttribute("href");
    if (!href || href.startsWith("#") || href.startsWith("http")) return;

    e.preventDefault();

    gsap.to(".main-content", {
        opacity: 0,
        duration: 0.5,
        ease: "power2.in",
        onComplete: function () {
            window.location.href = href;
        }
    });
});

const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    mobileMenu.classList.toggle('open');
});

document.getElementById('hero-up').addEventListener('click', function (e) {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});