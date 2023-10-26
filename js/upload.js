document
  .querySelectorAll(".popup-atach-file__input")
  .forEach((inputElement) => {
    const dropZoneElement = inputElement.closest(".popup-atach-file");

    dropZoneElement.addEventListener("click", (e) => {
      inputElement.click();
    });

    inputElement.addEventListener("change", (e) => {
      if (inputElement.files.length) {
        updateThumbnail(dropZoneElement, inputElement.files[0]);
      }
    });
  });

/**
 * Updates the thumbnail on a drop zone element.
 *
 * @param {HTMLElement} dropZoneElement
 * @param {File} file
 */
function updateThumbnail(dropZoneElement, file) {
  dropZoneElement.querySelector(".popup-atach-file__text").textContent =
    file.name;
}
