window.onload = function() {
  const slides = document.querySelectorAll(".carousel-img");
  const lastSlide = document.querySelector(".last");
  const nextSlide = document.querySelector(".next");
  let carouselCount = 0;
  let scrollInterval;
  let interval = 5000;

  lastSlide.addEventListener("click", function(e) {
    e = e || window.event;
    e.preventDefault();
    carouselCount -= 100;
    slide();
    if (e.type !== "autoSlide") {
      clearInterval(scrollInterval);
      scrollInterval = setInterval(autoScroll, interval);
    }
  });

  nextSlide.addEventListener("click", slideEvent);
  nextSlide.addEventListener("autoSlide", slideEvent);

  function slideEvent(e) {
    e = e || window.event;
    e.preventDefault();
    carouselCount += 100;
    slide();
    if (e.type !== "autoSlide") {
      clearInterval(scrollInterval);
      scrollInterval = setInterval(autoScroll, interval);
    }
  }

  function slide() {
    switch (carouselCount) {
      case -100:
        carouselCount = 0;
        break;
      case 400:
        carouselCount = 0;
        break;
      default:
        break;
    }

    for (let i = 0; i < slides.length; i++) {
      slides[i].setAttribute(
        "style",
        `transform: translateX(-${carouselCount}%)`
      );
    }
  }

  const autoSlide = new Event("autoSlide");
  function autoScroll() {
    nextSlide.dispatchEvent(autoSlide);
  }

  scrollInterval = setInterval(autoScroll, interval);
};
