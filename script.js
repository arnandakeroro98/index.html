document.querySelectorAll(".photo-slider").forEach((slider) => {
  const slides = slider.querySelectorAll(".slide");
  const dotsContainer = slider.querySelector(".slider-dots");
  const prev = slider.querySelector(".prev");
  const next = slider.querySelector(".next");

  let current = 0;
  let timer;

  if (!slides.length) return;

  slides.forEach((slide, index) => {
    const dot = document.createElement("span");

    if (index === 0) dot.classList.add("active");

    dot.addEventListener("click", () => {
      showSlide(index);
      restartTimer();
    });

    dotsContainer.appendChild(dot);
  });

  const dots = dotsContainer.querySelectorAll("span");

  function showSlide(index) {
    current = (index + slides.length) % slides.length;

    slides.forEach((slide, i) => {
      slide.classList.toggle("active", i === current);
      dots[i].classList.toggle("active", i === current);
    });
  }

  function restartTimer() {
    clearInterval(timer);
    timer = setInterval(() => showSlide(current + 1), 4000);
  }

  prev.addEventListener("click", () => {
    showSlide(current - 1);
    restartTimer();
  });

  next.addEventListener("click", () => {
    showSlide(current + 1);
    restartTimer();
  });

  restartTimer();
});
