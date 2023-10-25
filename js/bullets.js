window.addEventListener("resize", () => {
  checkBullets();
});
window.addEventListener("load", () => {
  checkBullets();
});

function checkBullets() {
  if (document.querySelectorAll(".fullscreen-slider").length > 0) {
    document.querySelectorAll(".fullscreen-slider").forEach((slider) => {
      if (window.innerWidth < 767.98) {
        if (
          slider
            .querySelector(".fullscreen-slider__slider")
            .querySelectorAll(".swiper-pagination-bullet").length > 4
        ) {
          slider.querySelector(
            ".fullscreen-slider__slider .swiper-pagination"
          ).style.display = "none";
        } else {
          slider.querySelector(
            ".fullscreen-slider__slider .swiper-pagination"
          ).style.display = "block";
          slider.querySelector(
            ".fullscreen-slider__slider .swiper-pagination"
          ).style.position = "absolute";
        }
      } else {
        slider.querySelector(
          ".fullscreen-slider__slider .swiper-pagination"
        ).style.display = "block";
        slider.querySelector(
          ".fullscreen-slider__slider .swiper-pagination"
        ).style.position = "static";
      }
    });
  }
}
