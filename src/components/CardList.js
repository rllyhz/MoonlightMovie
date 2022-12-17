import { createElement } from '../helpers/DomHelpers';
import CardItem from '../components/CardItem';

export default class CardList extends HTMLElement {
  static tagName = 'card-list'

  set adapterData(newAdapter) {
    this._items = newAdapter.listItem;
    this._onItemClickedCallback = newAdapter.onItemClickedCallback;
    this.render();
  }

  render() {
    const title = this.dataset.title;

    this.innerHTML = `
      <div class='card-list'>
        <h2>${title}</h2>
        <div class='card-list-items'></div>
      </div>
    `;

    this._items.forEach(movie => {
      this.querySelector('.card-list-items').appendChild(
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

customElements.define(CardList.tagName, CardList);