const searchField = document.querySelector(".search-field_mobile");
const overlay = document.querySelector(".overlay");
const burgerMenu = document.querySelector(".header-sticky");

document.addEventListener("click", (e) => {
  if (e.target.closest(".search-btn") && searchField) {
    if (burgerMenu.classList.contains("active")) {
      burgerMenu.classList.remove("active");
      document.querySelector(".burger-btn").classList.toggle("active");
    }
    searchField.classList.toggle("active");
    overlay.classList.toggle("active");
    e.target.closest(".search-btn").classList.toggle("active");

    if (searchField.classList.contains("active")) {
      document.querySelector("body").style.overflow = "hidden";
    } else {
      if (!burgerMenu.classList.contains("active")) {
        document.querySelector("body").style.overflow = "visible";
      }
    }
  }

  if (e.target.closest(".search-field__close-btn")) {
    let parent = e.target.closest(".search-field");
    parent.classList.remove("active");
    overlay.classList.remove("active");
    document.querySelector(".search-btn").classList.remove("active");

    document.querySelector("body").style.overflow = "visible";
  }

  if (e.target.closest(".burger-btn")) {
    if (searchField.classList.contains("active")) {
      searchField.classList.remove("active");
      overlay.classList.remove("active");
      document.querySelector(".search-btn").classList.remove("active");
    }
    burgerMenu.classList.toggle("active");
    e.target.closest(".burger-btn").classList.toggle("active");

    if (burgerMenu.classList.contains("active")) {
      document.querySelector("body").style.overflow = "hidden";
    } else {
      if (!searchField.classList.contains("active")) {
        document.querySelector("body").style.overflow = "visible";
      }
    }
  }

  if (e.target.classList.contains("category-about__more-btn")) {
    let parent = e.target.closest(".category-about__body");
    parent.classList.toggle("active");

    parent.querySelectorAll(".category-about__more-btn").forEach((el) => {
      el.style.display = "block";
    });
    e.target.style.display = "none";
  }

  if (e.target.classList.contains("details__slider-btn")) {
    let prevBtn = e.target
      .closest(".details__body")
      .querySelector(".details__slider-btn_prev");
    let nextBtn = e.target
      .closest(".details__body")
      .querySelector(".details__slider-btn_next");

    let slider = e.target
      .closest(".details__body")
      .querySelector(".details__slider");
    if (prevBtn.classList.contains("swiper-button-disabled")) {
      slider.classList.remove("shadow-left");
    } else {
      slider.classList.add("shadow-left");
    }
    if (nextBtn.classList.contains("swiper-button-disabled")) {
      slider.classList.remove("shadow-right");
    } else {
      slider.classList.add("shadow-right");
    }
  }
});

window.addEventListener("load", () => {
  if (document.querySelector(".details__slider")) {
    let slider = document.querySelector(".details__slider");
    let contentWidth = 0;
    let lastGap = 0;

    slider.querySelectorAll(".swiper-slide").forEach((slide) => {
      let width = parseInt(slide.offsetWidth);
      let gap = parseInt(window.getComputedStyle(slide).marginRight);

      contentWidth += width + gap;
      lastGap = gap;
    });

    if (parseInt(slider.offsetWidth) < contentWidth) {
      slider.classList.add("shadow-right");
    } else {
      slider.classList.remove("shadow-right");
    }

    if (slider.querySelectorAll(".swiper-slide").length > 8) {
      const newCard = document.createElement("button");
      newCard.className = "swiper-slide detail-card detail-card-btn-return";

      const newSpan = document.createElement("span");
      newSpan.textContent = "← Вернутья назад к полному списку товаров";

      newCard.appendChild(newSpan);

      const container = slider.querySelector('.swiper-wrapper');

      const cards = container.querySelectorAll(".swiper-slide.detail-card");
      container.insertBefore(newCard, cards[7].nextSibling);

      details.update();
      details.updateSize();
      details.updateSlides();
    }
  }
});
