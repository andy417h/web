const btnMenu = document.getElementById("js-btn-menu");
const gnav = document.querySelector(".gnav");

btnMenu.addEventListener("click", () => {
  btnMenu.classList.toggle("active");
  gnav.classList.toggle("open");
});
