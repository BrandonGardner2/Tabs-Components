window.onload = function() {
  const slides = document.querySelectorAll(".carousel-img");
  const lastSlide = document.querySelector(".last");
  const nextSlide = document.querySelector(".next");
  let carouselCount = 0;
  let scrollInterval;
  let interval = 5000;

  lastSlide.addEventListener("click", e => {
    e.preventDefault();
    carouselCount -= 100;
    //more stuff here
  });

  nextSlide.addEventListener("click", e => slideEvent(e));
  nextSlide.addEventListener("autoClick", e => slideEvent(e));

  const slideEvent = e => {
    e.preventDefault();
    carouselCount += 100;
    //more stuff here
  };

  const slide = () => {
    switch (carouselCount) {
      case -100:
        ccarouselCount = 0;
        break;
      case 300:
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
  };

  const autoClick = new Event("autoClick");
  const autoScroll = () => {
    nextSlide.dispatchEvent(autoClick);
  };

  scrollInterval = setInterval(autoScroll, interval);
};
