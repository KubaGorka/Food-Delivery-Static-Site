AOS.init({
  duration: 1000,
  once: true,
});
// open/close menu on mobile
let burger = document.querySelector(".burger");
let menu = document.querySelector(".menu");
let menuItems = document.querySelectorAll(".menu-item");

burger.addEventListener("click", () => {
  menu.classList.toggle("menu-hidden");
});

menuItems.forEach((item) => {
  item.addEventListener("click", () => {
    menu.classList.toggle("menu-hidden");
  });
});
// hide menu on scroll
let nav = document.querySelector(".nav");
let prev = window.pageYOffset;
window.onscroll = () => {
  let curr = window.pageYOffset;
  prev > curr ? (nav.style.top = "0") : (nav.style.top = "-100%");
  prev = curr;
};
