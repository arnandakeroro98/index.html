const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

// Mobile navigation
menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});

// Close menu after clicking a link
document.querySelectorAll("#navMenu a").forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("active");
    });
});

// Automatic copyright year
document.getElementById("year").textContent =
    new Date().getFullYear();
