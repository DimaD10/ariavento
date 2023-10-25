window.addEventListener("resize", () => {
  checkReviews();
});
window.addEventListener("load", () => {
  checkReviews();
});

function checkReviews() {
  if (document.querySelectorAll(".review").length > 0) {
    document.querySelectorAll(".review").forEach((el) => {
      if (
        parseInt(el.querySelector(".review__body").offsetHeight) <
        parseInt(el.querySelector(".review__message").offsetHeight) + 6
      ) {
        el.classList.add("hidden");
      } else {
        el.classList.remove("hidden");
      }
    });
  }
}
