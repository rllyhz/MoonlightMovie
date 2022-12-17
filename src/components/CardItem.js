import { imageBaseUrl } from "../networks/Api";
import { formatDate, splitDateString } from "../helpers/DataHelpers";
import Movie from "../data/Movie";

export default class CardItem extends HTMLElement {
  static tagName = 'card-item'

  set movieData(newData) {
    this._data = newData;
    this.render();
  }

  render() {
    const {id, title, imagePath, releaseDate, clickCallback} = this._data;
    const imageSrc = `${imageBaseUrl}${imagePath}`;

    this.innerHTML = `
      <div class='card-content' data-id='${id}'>
        <div class='card-image'>
          <img src='${imageSrc}' alt='${title}' />
        </div>
        <div class='card-detail'>
          <p>${formatDate(releaseDate)}<p>
          <h3>${title} (${splitDateString(releaseDate)[0]})</h3>
        </div>
      </div>
    `;

    this.querySelector('.card-content').addEventListener('click', event => {
      clickCallback(
        new Movie(id, title, releaseDate, imagePath),
        event
      );
    });
  }
}

customElements.define(CardItem.tagName, CardItem);