const scrollToTopBtn = document.querySelector(".scroll-to-top");
let prevScrollPos = window.scrollY;
const header = document.querySelector(".header");
const prodNav = document.querySelector(".product-nav");

document.addEventListener("scroll", () => {
  let scrollPos = window.scrollY;
  let gap = document.querySelector(".header-top").offsetHeight;

  if (scrollPos + 16 >= parseInt(gap)) {
    burgerMenu.classList.add("fixed");
  } else {
    burgerMenu.classList.remove("fixed");
  }

  if (scrollPos > prevScrollPos && scrollPos - 120 >= parseInt(gap)) {
    header.classList.add("hidden");
  } else if (scrollPos < prevScrollPos) {
    header.classList.remove("hidden");
  }

  prevScrollPos = scrollPos;
});
