window.addEventListener("scroll", function () {
  let menu = document.querySelector(".menu-container");
  let logo = document.querySelector(".logo");
  let borderElement = document.querySelector(".link.hjem");
  let menuItemsContainer = document.querySelector("#menu");
  if (window.scrollY > 90) {
    menu.classList.add("shrink");
    logo.classList.add("shrink");
    borderElement.classList.add("shrink");
    menuItemsContainer.classList.add("shrink");
  }
  if (window.scrollY < 1) {
    menu.classList.remove("shrink");
    logo.classList.remove("shrink");
    borderElement.classList.remove("shrink");
    menuItemsContainer.classList.remove("shrink");
  }
});
