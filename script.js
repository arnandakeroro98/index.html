
/* =========================================
   THEME SWITCHER
========================================= */

const themeToggle = document.getElementById('themeToggle');
const themeMenu = document.getElementById('themeMenu');

const themeButtons = themeMenu.querySelectorAll('button[data-theme]');

// Tema default
const defaultTheme = 'silver';

// Ambil tema tersimpan
const savedTheme = localStorage.getItem('portfolio-theme');

// Terapkan tema
document.documentElement.dataset.theme = savedTheme || defaultTheme;

// Buka dan tutup menu tema
themeToggle.addEventListener('click', (event) => {
  event.stopPropagation();
  themeMenu.classList.toggle('show');
});

// Ganti tema
themeButtons.forEach(button => {
  button.addEventListener('click', () => {
    const selectedTheme = button.dataset.theme;

    document.documentElement.dataset.theme = selectedTheme;

    localStorage.setItem('portfolio-theme', selectedTheme);

    themeMenu.classList.remove('show');
  });
});

// Tutup menu jika klik di luar
document.addEventListener('click', event => {
  if (
    !themeMenu.contains(event.target) &&
    !themeToggle.contains(event.target)
  ) {
    themeMenu.classList.remove('show');
  }
});


/* =========================================
   PHOTO SLIDER
========================================= */

const slides = document.querySelectorAll('.slide');
const dotsContainer = document.querySelector('.slider-dots');
const previousButton = document.querySelector('.slider-btn.prev');
const nextButton = document.querySelector('.slider-btn.next');

let currentSlide = 0;
let autoSlide = null;

// Buat titik navigasi
slides.forEach((slide, index) => {
  const dot = document.createElement('span');

  dot.addEventListener('click', () => {
    showSlide(index);
    restartAutoSlide();
  });

  dotsContainer.appendChild(dot);
});

const dots = dotsContainer.querySelectorAll('span');

// Tampilkan slide
function showSlide(index) {
  if (!slides.length) return;

  currentSlide = (index + slides.length) % slides.length;

  slides.forEach(slide => {
    slide.classList.remove('active');
  });

  dots.forEach(dot => {
    dot.classList.remove('active');
  });

  slides[currentSlide].classList.add('active');
  dots[currentSlide].classList.add('active');
}

// Tombol previous
function changeSlide(direction) {
  showSlide(currentSlide + direction);
  restartAutoSlide();
}

// Tombol next
previousButton.addEventListener('click', () => {
  changeSlide(-1);
});

nextButton.addEventListener('click', () => {
  changeSlide(1);
});

// Autoplay
function startAutoSlide() {
  if (slides.length <= 1) return;

  autoSlide = setInterval(() => {
    showSlide(currentSlide + 1);
  }, 4000);
}

// Reset autoplay setelah interaksi
function restartAutoSlide() {
  clearInterval(autoSlide);
  startAutoSlide();
}

// Mulai slideshow
if (slides.length > 0) {
  showSlide(0);
  startAutoSlide();
}

// Hentikan sementara ketika mouse berada di atas slider
const photoSlider = document.querySelector('.photo-slider');

photoSlider.addEventListener('mouseenter', () => {
  clearInterval(autoSlide);
});

photoSlider.addEventListener('mouseleave', () => {
  restartAutoSlide();
});
