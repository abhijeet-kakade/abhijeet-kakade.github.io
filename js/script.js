document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");

    // Toggle the 'active' class on the nav-links and hamburger when clicked
    hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("active");
        hamburger.classList.toggle("active");
    });

    // Close the nav when clicking outside of it
    document.addEventListener("click", (e) => {
        if (!navLinks.contains(e.target) && !hamburger.contains(e.target)) {
            navLinks.classList.remove("active");
            hamburger.classList.remove("active");
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const heroSection = document.querySelector(".hero");

    heroSection.addEventListener("mousemove", (e) => {
        const ripple = document.createElement("div");
        ripple.classList.add("water-ripple");
        ripple.style.top = `${e.clientY}px`;
        ripple.style.left = `${e.clientX}px`;
        heroSection.appendChild(ripple);

        // Remove the ripple after the animation ends
        ripple.addEventListener("animationend", () => {
            ripple.remove();
        });
    });
});
