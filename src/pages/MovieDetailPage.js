import { appConfiguration, setTitle } from '../helpers/AppHelpers';
import { createElement, addSpacer, getElem } from '../helpers/DomHelpers';
import { getDetailMovieOf } from '../networks/Api';
import Loading from '../components/Loading';
import MovieDetail from '../components/MovieDetail';
import Movie from '../data/Movie';

export default (id = null) => {
  if (id == null || typeof(id) != 'number') {
    Router.navigateUp();
    return;
  }

  setTitle(`${appConfiguration().name} | Movie Detail`);
  getElem('header .back-button').style.visibility = 'visible';
  getElem('.search').style.display = 'none';

  // Loading
  getElem('.container-app').appendChild(
    createElement({
      tagName: Loading.tagName,
    })
  );

  // DetailMovie
  getDetailMovieOf(id).then(res => {
    console.clear();
    getElem('.container-app').innerHTML = '';

    const item = res.data;
    const movie = new Movie(
      item.id,
      item.title,
      item.release_date,
      item.backdrop_path,
      item.genres.map(genre => genre.name),
      item.overview
    );

    getElem('.container-app').appendChild(
      createElement({
        tagName: MovieDetail.tagName,
        data: {
          movie,
        }
      })
    );
  });
};