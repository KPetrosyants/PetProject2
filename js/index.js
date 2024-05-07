const form = document.querySelector("form");
const formSection = document.querySelector(".section-form");
const inputs = document.querySelectorAll(".form__input");
const orderButton = document.querySelector("#order");
const hiddenBlocks = document.querySelectorAll(".hiddenBlock");
const menuButton = document.querySelector(".menu-button");
const menu = document.querySelector(".header__nav");

inputs.forEach((i) =>
  i.addEventListener("focus", function (e) {
    let label = e.target.previousElementSibling;
    label.classList.add("active");
  })
);

inputs.forEach((i) =>
  i.addEventListener("blur", function (e) {
    let label = e.target.previousElementSibling;
    if (!e.target.value) {
      label.classList.remove("active");
    }
  })
);

orderButton.addEventListener("click", (e) => {
  e.preventDefault();
  formSection.scrollIntoView({ behavior: "smooth", blok: "center", inline: "center" });
});

window.addEventListener("scroll", () => {
  hiddenBlocks.forEach((e) => {
    if (
      !e.classList.contains("popupBlock") &&
      200 + window.innerHeight / 2 > e.getBoundingClientRect().top
    ) {
      e.classList.replace("hiddenBlock", "popupBlock");
    }
  });
});

menuButton.addEventListener("click", () => {
  menuButton.classList.toggle("active");
  menu.classList.toggle("active");
});
