<script src="script.js">document.addEventListener("DOMContentLoaded", function () {
    // Navbar Toggle for Mobile
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });

    // Dark Mode Toggle
    const darkModeToggle = document.getElementById("dark-mode-toggle");
    darkModeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
    });

    // GSAP Animations
    gsap.from(".hero h1", { duration: 1, opacity: 0, y: -50 });
    gsap.from(".hero p", { duration: 1, opacity: 0, y: 50, delay: 0.5 });

    // Swiper.js for Testimonials
    new Swiper(".swiper-container", {
        loop: true,
        autoplay: {
            delay: 3000,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });

    // Contact Form Validation
    const form = document.querySelector("form");
    form.addEventListener("submit", function (event) {
        const inputs = form.querySelectorAll("input[required], textarea");
        let isValid = true;

        inputs.forEach((input) => {
            if (!input.value) {
                isValid = false;
                input.classList.add("error");
                setTimeout(() => input.classList.remove("error"), 500);
            }
        });

        if (!isValid) event.preventDefault();
    });
});
</script>