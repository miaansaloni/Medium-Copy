window.addEventListener("scroll", function () {
  const nav = document.querySelector("nav");
  const button = document.querySelector(".getStarted");
  const height = document.querySelector(".startReading");
  const heightPoint = height.getBoundingClientRect().top;
  const navHeight = nav.offsetHeight;

  if (heightPoint < navHeight) {
    nav.classList.add("scrolled");
    button.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
    button.classList.remove("scrolled");
  }
});
