export default class TopBar extends HTMLElement {
  static tagName = 'top-bar';

  connectedCallback() {
    this.render();
  }

  render() {
    const title = this.dataset.title

    this.innerHTML = `
      <header>
        <nav>
          <a href='/'>${title}</a>
        </nav>
      </header>
    `;
  }
}

customElements.define(TopBar.tagName, TopBar);