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
});
