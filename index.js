const menuBar = document.getElementById("menu-bar");
const navLinks = document.getElementById("nav-links");

menuBar?.addEventListener("click", () => {
  // const mq = window.matchMedia("max-width: 700px");
  // if (mq.matches) {
    navLinks.style.display =
      navLinks.style.display === "none" ? "flex" : "none";
});
