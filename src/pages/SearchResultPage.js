import { appConfiguration, setTitle } from '../helpers/AppHelpers';
import { createElement, getElem, addSpacer } from '../helpers/DomHelpers';
import { Router } from '../helpers/RouteHelpers';
import { searchMovies } from '../networks/Api';
import Loading from '../components/Loading';
import SearchResult from '../components/SearchResult';
import Movie from '../data/Movie';

export default (query = null) => {
  if (query == null || typeof(query) != 'string') {
    Router.navigateUp();
    return;
  }

  setTitle(`${appConfiguration().name} | Search Result`);
  getElem('header .back-button').style.visibility = 'visible';
  
  // Loading
  getElem('.container-app').appendChild(
    createElement({
      tagName: Loading.tagName,
    })
  );

  // search query
  searchMovies(query).then(res => {
    console.clear();
    getElem('.container-app').innerHTML = '';

    if (res.data.results.length <= 0) {
      getElem('.container-app').appendChild(
        createElement({
          tagName: 'div',
          styles: {
            textAlign: 'center'
          },
          innerText: 'Movie not found!'
        })
      );
      return;
    }

    addSpacer({orientation: 'vertical', size: '2rem', parent: getElem('.container-app')});

    const movies = res.data.results.map(
      item => new Movie(item.id, item.title, item.release_date, item.backdrop_path)
    );
    //
    getElem('.container-app').appendChild(
      createElement({
        tagName: SearchResult.tagName,
        data: {
          adapterData: {
            listItem: movies,
            onItemClickedCallback: (movie) => { console.log('clicked result movie: ' + movie.title); }
          }
        }
      })
    );
  });
};