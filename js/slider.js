const projects = new Swiper(".products-slider", {
  loop: true,
  spaceBetween: 20,

  pagination: {
    el: ".projects__pagination",
    clickable: true,
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    480: {
      slidesPerView: "auto",
      spaceBetween: 25,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
  },
});

const sertificates = new Swiper(".sertificates__slider", {
  loop: true,

  pagination: {
    el: ".sertificates__pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".sertificates__slider-btn_next",
    prevEl: ".sertificates__slider-btn_prev",
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    480: {
      slidesPerView: 1,
      spaceBetween: 25,
    },
    668: {
      slidesPerView: 2,
      spaceBetween: 26,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 26,
    },
  },
});
const sertificatesFullscreen = new Swiper(".sertificates__slider-fullscreen", {
  loop: true,

  pagination: {
    el: ".sertificates__pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".sertificates__slider-fullscreen-btn_next",
    prevEl: ".sertificates__slider-fullscreen-btn_prev",
  },

  slidesPerView: 1,
  spaceBetween: 20,

  thumbs: {
    swiper: sertificates,
  },
});

const productivity = new Swiper(".productivity__slider", {
  loop: true,
  effect: "fade",

  pagination: {
    el: ".productivity__pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".productivity__slider-btn_next",
    prevEl: ".productivity__slider-btn_prev",
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    480: {
      slidesPerView: 1,
      spaceBetween: 25,
    },
    668: {
      slidesPerView: 1,
      spaceBetween: 26,
    },
    992: {
      slidesPerView: 1,
      spaceBetween: 26,
    },
  },
});

const reviews = new Swiper(".reviews__slider", {
  loop: true,

  pagination: {
    el: ".reviews__pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".reviews__slider-btn_next",
    prevEl: ".reviews__slider-btn_prev",
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    480: {
      slidesPerView: 1,
      spaceBetween: 25,
    },
    668: {
      slidesPerView: 2,
      spaceBetween: 16,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },
});