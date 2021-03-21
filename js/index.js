AOS.init({
  duration: 1000,
  once: true,
});
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
