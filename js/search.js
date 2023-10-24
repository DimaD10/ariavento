const searchInput = document.querySelector(".search-field__input");

if (searchInput) {
  searchInput.addEventListener("focus", () => {
    let parent = searchInput.closest(".search-field");
    parent.classList.add('active');
  });
  searchInput.addEventListener("blur", () => {
    let parent = searchInput.closest(".search-field");

    parent.classList.remove("active");
  });
}
