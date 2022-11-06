const menuBar = document.getElementById("menu-bar");
const navLinks = document.getElementById("links");

menuBar?.addEventListener("click", () => {
  // const mq = window.matchMedia( "max-width: 700px" );
  // if(document.media)
  (navLinks as HTMLElement).style.display =
    (navLinks as HTMLElement).style.display === "none" ? "flex" : "none";
});
