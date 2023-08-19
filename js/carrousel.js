const carousel = document.querySelector(".carousel");
const carouselItems = document.querySelectorAll(".carousel_item");
const indicators = document.querySelectorAll(".carousel_indicator");
const prevButton = document.getElementById("prevBtn");
const nextButton = document.getElementById("nextBtn");

let currentIndex = 0;

function showSlide(index) {
  if (index < 0) {
    currentIndex = carouselItems.length - 1;
  } else if (index >= carouselItems.length) {
    currentIndex = 0;
  }

  const offset = -currentIndex * 100;
  carousel.style.transform = `translateX(${offset}%)`;

  indicators.forEach((indicator, i) => {
    if (i === currentIndex) {
      indicator.classList.add("active");
    } else {
      indicator.classList.remove("active");
    }
  });
}

prevButton.addEventListener("click", () => {
  currentIndex--;
  showSlide(currentIndex);
});

nextButton.addEventListener("click", () => {
  currentIndex++;
  showSlide(currentIndex);
});

indicators.forEach((indicator, i) => {
  indicator.addEventListener("click", () => {
    currentIndex = i;
    showSlide(currentIndex);
  });
});

showSlide(currentIndex);
