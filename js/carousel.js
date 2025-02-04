const carousel = document.querySelector(".testimonials-carousel__carousel");
const slides = document.querySelectorAll(".testimonials-carousel__item ");
const prevButton = document.querySelector(
  ".testimonials-carousel__arrow--left"
);
const nextButton = document.querySelector(
  ".testimonials-carousel__arrow--right"
);
const dotsContainer = document.querySelector(".dots-container");
let counter = 0;
const totalSlides = slides.length;

slides.forEach((slide, index) => {
  slide.style.left = `${index * 100}%`;
});
const createDots = () => {
  slides.forEach((_, index) => {
    console.log("inside  createDots");
    const dot = document.createElement("div");
    dot.classList.add("dot");
    dot.addEventListener("click", () => {
      counter = index;
      slideImage();
      updateDots();
    });
    dotsContainer.appendChild(dot);
  });
};
const updateDots = () => {
  const dots = document.querySelectorAll(".dot");
  dots.forEach((dot, index) => {
    if (index === counter) {
      dot.classList.add("active");
    } else {
      dot.classList.remove("active");
    }
  });
};
const slideImage = () => {
  slides.forEach((slide) => {
    slide.style.transform = `translateX(-${counter * 100}%)`;
  });
};
let slideInterval;
const startAutoSlide = () => {
  slideInterval = setInterval(() => {
    counter = counter < totalSlides - 1 ? counter + 1 : 0;
    slideImage();
    updateDots();
  }, 5000);
};

// Function to reset the auto-slide timer
const resetTimer = () => {
  clearInterval(slideInterval); // Stop the current interval
  startAutoSlide(); // Restart it
};
nextButton.addEventListener("click", function () {
  if (counter < totalSlides - 1) {
    counter++;
    slideImage();
    updateDots();
    resetTimer();
  }
});

prevButton.addEventListener("click", function () {
  if (counter > 0) {
    counter--;
    slideImage();
    updateDots();
    resetTimer();
  }
});

// Initialize dots and carousel
createDots();
updateDots();
