// NAVBAR FIXED
window.onscroll = function () {
  const header = document.querySelector("#navbar");
  const navbarFixed = header.offsetTop;

  if (window.pageYOffset > navbarFixed) {
    header.classList.remove("absolute");
    header.classList.remove("bg-transparent");
    header.classList.add("navbar-fixed");
  } else {
    header.classList.add("absolute");
    header.classList.add("bg-transparent");
    header.classList.remove("navbar-fixed");
  }
};

// HAMBURGER TOGGLE
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
  // navMenu.classList.toggle("hidden");
  navMenu.classList.toggle("nav-menu-active");
  navMenu.classList.toggle("opacity-0");
});
