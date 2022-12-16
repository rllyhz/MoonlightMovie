export default class SearchBar extends HTMLElement {
  static tagName = 'search-bar'

  set searchData(newData) {
    this._data = newData;
    this.render();
  }

  render() {
    const {type, placeholderText, submitText, onSubmitCallback} = this._data;

    this.innerHTML = `
      <div class='search'>
        <input class='search-input' type='${type}' placeholder='${placeholderText}' />
        <button class='search-button' type='button'>${submitText}</button>
      </div>
    `;

    this.querySelector('.search-button').addEventListener('click', (e) => {
      const currentValue = this.querySelector('.search-input').value;
      onSubmitCallback(currentValue, e);
    });
  }
}

customElements.define(SearchBar.tagName, SearchBar);