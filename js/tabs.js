const tabs = document.querySelectorAll(".prod-nav__point");
const tabsContent = document.querySelectorAll(".info-prod__section");

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("prod-nav__point") && tabsContent.length > 0) {

    tabs.forEach((el) => {
      el.classList.remove("prod-nav__point_current");
    });
    e.target.classList.add("prod-nav__point_current");

    let elPos = [...tabs].indexOf(e.target);

    tabsContent.forEach((el) => {
      el.classList.remove("info-prod__section_current");
    });
    tabsContent[elPos].classList.add("info-prod__section_current");
  }

  if (e.target.closest(".info-prod__section-header")) {
    tabsContent.forEach((el) => {
      el.classList.remove("info-prod__section_current");
    });
    e.target
      .closest(".info-prod__section")
      .classList.add("info-prod__section_current");

    let elPos = [...tabsContent].indexOf(
      e.target.closest(".info-prod__section")
    );

    tabs.forEach((el) => {
      el.classList.remove("prod-nav__point_current");
    });
    tabs[elPos].classList.add("prod-nav__point_current");
  }
});
