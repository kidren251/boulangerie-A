const MenuHamburger = document.querySelector(".menu");
const navlink = document.querySelector(".nav-link");

MenuHamburger.addEventListener("click", () => {
  navlink.classList.toggle("mobile-menu");
});
