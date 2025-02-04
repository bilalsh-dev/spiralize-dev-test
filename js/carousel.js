const carousel = document.querySelector(".testimonials-carousel__carousel");
const slides = document.querySelectorAll(".testimonials-carousel__item ");
const prevButton = document.querySelector(
  ".testimonials-carousel__arrow--left"
);
const nextButton = document.querySelector(
  ".testimonials-carousel__arrow--right"
);
const dotsContainer = document.querySelectorAll("dots-container");
let counter = 0;
const totalSlides = slides.length;
dotsContainer.innerHTML = "";

slides.forEach((slide, index) => {
  slide.style.left = `${index * 100}%`;
});

const slideImage = () => {
  slides.forEach((slide) => {
    slide.style.transform = `translateX(-${counter * 100}%)`;
  });
};

nextButton.addEventListener("click", function () {
  if (counter < totalSlides - 1) {
    counter++;
    slideImage();
  }
});

prevButton.addEventListener("click", function () {
  if (counter > 0) {
    counter--;
    slideImage();
  }
});

setInterval(function () {
  if (counter < totalSlides - 1) {
    counter++;
    slideImage();
  } else {
    counter = 0;
    slideImage();
  }
}, 5000);
