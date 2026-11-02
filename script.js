
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

// Mobile navigation
menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");

    menuToggle.textContent = navLinks.classList.contains("active")
        ? "✕"
        : "☰";
});

// Close menu after clicking a link
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
        menuToggle.textContent = "☰";
    });
});

// Scroll reveal animation
const revealElements = document.querySelectorAll(
    ".section-heading, .about-grid, .about-stats, " +
    ".work-intro, .project-card, .skills-layout, .contact h2"
);

revealElements.forEach(element => {
    element.classList.add("reveal");
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.12
});

revealElements.forEach(element => {
    observer.observe(element);
});

// Navbar active link
const sections = document.querySelectorAll("section[id]");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
    let currentSection = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {
            currentSection = section.getAttribute("id");
        }
    });

    navItems.forEach(link => {
        link.classList.remove("active-link");

        if (link.getAttribute("href") === `#${currentSection}`) {
            link.classList.add("active-link");
        }
    });
});
