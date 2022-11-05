class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <header>
    <nav>
      <div id="brand">
        <a href="/index.html">
          <img src="assets/branding.svg" alt="">
        </a>
      </div>
      <div id="links">
        <div>
          <a href="/index.html">Home</a>
          <a href="/index.html#about">About</a>
          <a href="/index.html#services">Services</a>
          <a href="">
            <img src="assets/contact-us-btn.svg" alt="">
          </a>
        </div> 
      </div>
    </nav>
  </header>`;
  }
}

customElements.define("header-component", Header);
