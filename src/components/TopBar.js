export default class TopBar extends HTMLElement {
  static tagName = 'top-bar';

  set title(value) {
    this._title = value;
    this.render();
  }

  render() {
    this.innerHTML = `
      <header>
        <nav>
          <a href='/'>${this._title}</a>
        </nav>
      </header>
    `;
  }
}

customElements.define(TopBar.tagName, TopBar);