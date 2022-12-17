import { appConfiguration, setTitle } from '../helpers/AppHelpers';
import { createElement, getElem, addSpacer } from '../helpers/DomHelpers';
import { Router } from '../helpers/RouteHelpers';
import { searchMovies } from '../networks/Api';
import CardList from '../components/CardList';
import Movie from '../data/Movie';

export default (query = null) => {
  if (query == null || typeof(query) != 'string') {
    Router.navigateUp();
    return;
  }

  setTitle(`${appConfiguration().name} | Search Result`);
  
  // Loading
  const loadingTextElem = createElement({
    tagName: 'p',
    styles: {
      textAlign: 'center'
    }
  });
  loadingTextElem.innerText = 'Loading...';
  getElem('.container-app').appendChild(loadingTextElem);

  // search query
  searchMovies(query).then(res => {
    console.clear();
    addSpacer({orientation: 'vertical', size: '2rem', parent: getElem('.container-app')});

    const movies = res.data.results.map(
      item => new Movie(item.id, item.title, item.release_date, item.backdrop_path)
    );

    console.log(movies);
    //
  });
};