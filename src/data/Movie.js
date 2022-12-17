export default class Movie {
  id
  title
  releaseDate
  imagePath

  constructor(id, title, releaseDate, imagePath) {
    this.id = id;
    this.title = title;
    this.releaseDate = releaseDate;
    this.imagePath = imagePath;
  }
}