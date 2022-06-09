const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector("nav");

menuBtn.addEventListener("click", () => {
  nav.classList.toggle("show");
});

const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach((n) => {
  n.addEventListener("click", () => {
    nav.classList.remove("show");
  });
});
