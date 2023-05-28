class FooterElement extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <style>
        footer {
          width: 100%;
          height: auto;
          background-color: #0a2647;
          color: #e0e7f7;
          text-align: center;
          padding: 15px;
          font-size: 14px;
          font-weight: 300;
        }

        @media (max-width: 576px) {
          footer {
            font-size: 12px;
          }
        }
      </style>

      <footer>
        <p>&copy; copyright 2023 || built with <span></span> by Vicky Pratama</p>
      </footer>
    `;
  }
}

customElements.define("footer-element", FooterElement);
