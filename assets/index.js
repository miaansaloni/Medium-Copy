const navBar = document.querySelector("nav");
const button = document.querySelector(".getStarted");

window.addEventListener("scroll", function () {
  if (window.scrollY > 0) {
    navBar.classList.add("scrolled");
    button.classList.add("scrolled");
  } else {
    navBar.classList.remove("scrolled");
    button.classList.remove("scrolled");
  }
});
