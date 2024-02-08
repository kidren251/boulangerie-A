const MenuHamburger = document.querySelector(".menu");
const navlink = document.querySelector(".nav-link");

MenuHamburger.addEventListener("click", () => {
  navlink.classList.toggle("mobile-menu");
});

/**NAV **/
let position = 0;

window.addEventListener("scroll", () => {
  if (window.scrollY < position) {
    navbar.style.top = 0;
  } else {
    navbar.style.top = "-180px";
  }
  position = window.scrollY;
});
