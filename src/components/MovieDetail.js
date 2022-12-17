import { imageBaseUrl } from "../networks/Api";
import { formatDate, splitDateString } from "../helpers/DataHelpers";

export default class MovieDetail extends HTMLElement {
  static tagName = 'movie-detail'

  constructor() {
    super()
    this._shadowRoot = this.attachShadow({ mode: 'open' });
  }

  set movie(newMovie) {
    this._movie = newMovie;
    this.render();
  }

  render() {
    const { id, title, imagePath, releaseDate, genres, overview } = this._movie;
    const imageSrc = `${imageBaseUrl}${imagePath.replace('/', '')}`;
    const genresText = genres.join(', ');

    this._shadowRoot.innerHTML = `
      <style>
        .detail-container {
          display: flex;
          justify-content: space-between;
          padding: 1rem;
          gap: 1.5rem;
        }
        .detail-container > .poster-container {
          flex: 1 0 420px;
          overflow: hidden;
          border-radius: 8px;
          box-shadow: 2px 2px 8px rgba(120,120,120,.3);
        }
        .detail-container > .poster-container img {
          width: 100%;
          height: 100%;
          object-fit: fill;
          background-color: grey;
        }
        .detail-container > .detail-data-container {
          flex: 1 1 auto;
        }
        .detail-container > .detail-data-container .genres > span,
        .detail-container > .detail-data-container .date > span {
          font-style: italic;
          color: grey;
        }
        .detail-container > .detail-data-container .overview-title {
          margin-top: 2.25rem;
          font-weight: 400;
        }
        @media screen and (max-width: 920px) {
          .detail-container {
            display: block;
          }
          .detail-container > .poster-container {
            width: 100%;
            height: calc(100% - 1rem);
          }
          .detail-container > .detail-data-container {
            margin-top: 2rem;
          }
        }
      </style>

      <div class='detail-container' data-id='${id}'>
        <div class='poster-container'>
          <img src='${imageSrc}' alt='${title}' />
        </div>
        <div class='detail-data-container'>
          <h3 class='title'>${title} (${splitDateString(releaseDate)[0]})</h3>
          <p class='genres'>Genres: <span>${genresText}</span></p>
          <p class='date'>Release Date: <span>${formatDate(releaseDate)}</span><p>
          <p class='overview-title'>Overview:</p>
          <p class='overview'>${overview}</p>
        </div>
      </div>
    `;
  }
}

customElements.define(MovieDetail.tagName, MovieDetail);