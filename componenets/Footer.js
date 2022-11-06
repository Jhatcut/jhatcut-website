class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <footer>
    <div id="footer-div">
    <div id="brand">
      <a href="/index.html"><img src="assets/JHATCUT.svg" height="50%" alt=""></a>
      <p>An app that helps you to book salon seat , and saves your precious time</p>
    </div>
    <div id="first" class="links-div">
      <a href="/index.html#about">About</a>
      <a href="/index.html#services">Services</a>
      <a href="">Contact US</a>
    </div>
    <!-- <div class="seaprator" style="left: 50%;"></div> -->
    <div id="second" class="links-div">
      <a href="/privacy-policy.html">Privacy Policy</a>
      <a href="t&c.html">Terms & Conditions</a>
      <a href="">Partnership Details</a>
    </div>
    <!-- <div class="seaprator" style="left: 75%;"></div> -->
    <div id="last" class="links-div">
      <h1>Follow us on : </h1>
      <div style="display: flex; 
      justify-content: center;
      align-items: center;
      column-gap: 10%;
      ">
        <a href=""><img src="assets/icons/ant-design_instagram-filled.svg" alt=""></a>
        <a href=""><img src="assets/icons/akar-icons_linkedin-box-fill.svg" alt=""></a>
        <a href=""><img src="assets/icons/brandico_facebook-rect.svg" alt=""></a>
        <a href=""><img src="assets/icons/akar-icons_youtube-fill.svg" alt=""></a>
      </div>
    </div>
    </div>
  </footer>`;
  }
}

customElements.define("footer-component", Footer);
