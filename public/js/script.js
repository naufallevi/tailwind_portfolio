// NAVBAR FIXED
window.onscroll = function () {
  const header = document.querySelector("#navbar");
  const navbarFixed = header.offsetTop;
  // Scroll To Top Button
  const scrollToTop = document.querySelector("#scrollToTop");

  if (window.pageYOffset > navbarFixed) {
    header.classList.remove("absolute");
    header.classList.remove("bg-transparent");
    header.classList.add("navbar-fixed");
    // Scroll To Top Button
    scrollToTop.classList.add("bottom-5");
    scrollToTop.classList.remove("-bottom-50");

  } else {
    header.classList.add("absolute");
    header.classList.add("bg-transparent");
    header.classList.remove("navbar-fixed");
    // Scroll To Top Button
    scrollToTop.classList.remove("bottom-5");
    scrollToTop.classList.add("-bottom-50");

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

// FORM TO SHEET
window.addEventListener("load", function () {
  const form = document.getElementById("form-sheet");
  const btnSubmit = document.getElementById("btn-submit");
  const btnLoading = document.getElementById("btn-loading");
  const alertForm = document.getElementById("alert-form");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    btnSubmit.classList.add("hidden");
    btnLoading.classList.remove("hidden");
    const data = new FormData(form);
    const action = e.target.action;
    fetch(action, {
      method: "POST",
      body: data,
    }).then(() => {
      btnSubmit.classList.remove("hidden");
      btnLoading.classList.add("hidden");
      form.reset();
      alertForm.classList.remove("hidden");
      setTimeout(() => {
        alertForm.classList.add("hidden");
      }, 10000);
    });
  });
});

// YEAR AUTO UPDATE
document.getElementById("year").textContent = new Date().getFullYear();
