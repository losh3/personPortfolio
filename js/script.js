const hamburgerBtn = document.getElementById("hamburger-btn");
const sideMenu = document.getElementById("side-menu");

hamburgerBtn.addEventListener("click", () => {
  sideMenu.classList.toggle("show");
});
