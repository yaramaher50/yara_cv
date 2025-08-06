const menu = document.querySelector(".ri-menu-line");
const closeMenu = document.querySelector(".ri-close-line");
const navbar = document.querySelector(".navbar");
menu.addEventListener("click", function () {
  menu.style.display = "none";
  closeMenu.style.display = "block";
  navbar.style.display = "block";
});

closeMenu.addEventListener("click", function () {
  menu.style.display = "block";
  closeMenu.style.display = "none";
  navbar.style.display = "none";
});
