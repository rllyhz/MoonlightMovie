export default class SearchBar extends HTMLElement {
  static tagName = 'search-bar'

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = ``;
  }
}

customElements.define(SearchBar.tagName, SearchBar);