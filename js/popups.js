document.addEventListener("click", (e) => {
  if (
    e.target.closest(
      ".fullscreen-slider .fullscreen-slider__main-slider .swiper-slide"
    ) &&
    !e.target.closest(".fullscreen-slider").classList.contains("active")
  ) {
    e.target.closest(".fullscreen-slider").classList.add("active");
    document.body.style.overflow = "hidden";
  }

  if (e.target.closest(".fullscreen-slider__close-btn")) {
    e.target.closest(".fullscreen-slider").classList.remove("active");
    document.body.style.overflow = "visible";
  }
  if (
    e.target.closest(".fullscreen-slider__parrent") &&
    !e.target.closest(".fullscreen-slider__wrapper")
  ) {
    e.target.closest(".fullscreen-slider").classList.remove("active");
    document.body.style.overflow = "visible";
  }
});

document.addEventListener("keydown", function (event) {
  if (
    event.key == "Escape" &&
    document.querySelectorAll(".fullscreen-slider").length > 0
  ) {
    document.querySelectorAll(".fullscreen-slider").forEach((el) => {
      el.classList.remove("active");
    });
    document.body.style.overflow = "visible";
  }
});
