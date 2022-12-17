export default class Spacer extends HTMLElement {
  static tagName = 'custom-spacer'

  set config(newConfig) {
    this._orientation = newConfig.orientation;
    this._size = newConfig.size;
    this.render();
  }

  isHorizontal() {
    return this._orientation == 'horizontal';
  }

  render() {
    const space = this.isHorizontal() ? `margin-left: ${this._size}` : `margin-top: ${this._size}`;

    this.innerHTML = `
      <div style='${space}'></div>
    `;
  }
}

customElements.define(Spacer.tagName, Spacer);