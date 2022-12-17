export default class Loading extends HTMLElement {
  static tagName = 'loading-ui'

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class='loading-wrapper'>
        <div class='loading'></div>
      </div>
    `;
  }
}

customElements.define(Loading.tagName, Loading);