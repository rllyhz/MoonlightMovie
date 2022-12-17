export default class Movie {
  id
  title
  releaseDate
  imagePath
  genres
  overview

  constructor(id, title, releaseDate, imagePath, genres = [], overview = '') {
    this.id = id;
    this.title = title;
    this.releaseDate = releaseDate;
    this.imagePath = imagePath;
    this.genres = genres;
    this.overview = overview;
  }
}