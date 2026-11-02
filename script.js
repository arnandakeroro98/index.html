
const themeToggle = document.getElementById('themeToggle');
const themeMenu = document.getElementById('themeMenu');

// Buka/tutup pilihan tema
themeToggle.addEventListener('click', () => {
  themeMenu.classList.toggle('show');
});

// Ganti tema
themeMenu.querySelectorAll('button[data-theme]').forEach(button => {
  button.addEventListener('click', () => {
    const selectedTheme = button.dataset.theme;

    document.documentElement.dataset.theme = selectedTheme;

    localStorage.setItem('portfolio-theme', selectedTheme);

    themeMenu.classList.remove('show');
  });
});

// Ambil tema terakhir yang dipilih
const savedTheme = localStorage.getItem('portfolio-theme');

if (savedTheme) {
  document.documentElement.dataset.theme = savedTheme;
}

// Tutup menu jika klik di luar menu
document.addEventListener('click', event => {
  if (
    !themeMenu.contains(event.target) &&
    !themeToggle.contains(event.target)
  ) {
    themeMenu.classList.remove('show');
  }
});

const slides = document.querySelectorAll(".slide");
const dotsContainer = document.querySelector(".slider-dots");

let currentSlide = 0;
let autoSlide;

slides.forEach((_, index) => {
    const dot = document.createElement("span");

    dot.addEventListener("click", () => {
        showSlide(index);
        restartAutoSlide();
    });

    dotsContainer.appendChild(dot);
});

const dots = dotsContainer.querySelectorAll("span");

function showSlide(index) {
    currentSlide = (index + slides.length) % slides.length;
