const burger = document.querySelector("#burger");
const menuResponsive = document.querySelector(".menu-responsive");

burger.addEventListener("click", function () {
  menuResponsive.classList.toggle("display-none");
});
