class Header extends HTMLElement {
  constructor() {
    super();
    window.onload = () => {
      const menuBar = document.getElementById("menu-bar");
      const navLinks = document.getElementById("nav-links");
      menuBar?.addEventListener("click", () => {
          navLinks.style.display =
            navLinks.style.display === "none" ? "flex" : "none";
      });
    }
  }
  connectedCallback() {
    this.innerHTML = `
    <div id="header">
    <nav>
      <div id="brand">
        <a href="/index.html">
          <img src="assets/branding.svg" alt="">
        </a>
      </div>
      <div id="links">
        <div id="nav-links">
          <a href="/index.html">Home</a>
          <a href="/index.html#about">About</a>
          <a href="/index.html#services">Services</a>
          <a href="">
            <img src="assets/contact-us-btn.svg" alt="">
          </a>
        </div> 
      </div>
      <img id="menu-bar" src="assets/mobile/ham-burger.svg"></div>
    </nav>
  </div>
  `;
  }
}

customElements.define("header-component", Header);
