const burger = document.querySelector("#burger");
const menuResponsive = document.querySelector(".menu-responsive");
const ancre = document.querySelectorAll(".ancre");

// bouton burger responsive
burger.addEventListener("click", function () {
  menuResponsive.classList.toggle("display-none");
});

// ferme le menu quand clique sur ancre
ancre.forEach(function (item) {
  item.addEventListener("click", function () {
    menuResponsive.classList.toggle("display-none");
    // console.log("click ancre");
  });
});
