import { createElement } from '../helpers/DomHelpers';
import CardItem from '../components/CardItem';

export default class SearchResult extends HTMLElement {
  static tagName = 'search-result';

  set adapterData(newAdapter) {
    this._items = newAdapter.listItem;
    this._onItemClickedCallback = newAdapter.onItemClickedCallback;
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class='search-items'></div>
    `;

    this._items.forEach(movie => {
      this.querySelector('.search-items').appendChild(
        createElement({
          tagName: CardItem.tagName,
          data: {
            movieData: {
              id: movie.id,
              title: movie.title,
              imagePath: movie.imagePath,
              releaseDate: movie.releaseDate,
              clickCallback: (item) => { this._onItemClickedCallback(item); }
            }
          }
        })
      );
    });
  }
}

customElements.define(SearchResult.tagName, SearchResult);