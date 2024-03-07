const mobileMenu = document.querySelector(".mobile-menu");
const header = document.querySelector(".header");
const products = document.querySelector(".products");
const sellers = document.querySelector(".sellers");
const earphones = document.querySelector(".earphones");
const launches = document.querySelector(".launches");

document.querySelector(".menu_button").addEventListener("click", (event) => {
  mobileMenu.classList.remove("hidden");
  mobileMenu.classList.add("visible");
});

mobileMenu
  .querySelector(".mobile-menu__close")
  .addEventListener("click", (event) => {
    mobileMenu.classList.remove("visible");
    mobileMenu.classList.add("hidden");
  });

// function scrollToSection(event) {
//   console.log(event.target);
// }

// mobileMenu.addEventListener("click", scrollToSection);
// header.addEventListener("click", scrollToSection);
