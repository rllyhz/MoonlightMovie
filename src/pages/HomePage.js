import { appConfiguration, setTitle } from '../helpers/AppHelpers';
import { Router, PATH } from '../helpers/RouteHelpers';
import { createElement, addSpacer, getElem } from '../helpers/DomHelpers';
import { getNowPlayingMovies, getPopularMovies, getTopRatedMovies } from '../networks/Api';
import CardList from '../components/CardList';
import Movie from '../data/Movie';

export default (data = null) => {
  setTitle(`${appConfiguration().name} | Home`);
  getElem('header .back-button').style.visibility = 'hidden';
  getElem('.search').style.display = 'flex';
  getElem('.search-input').value = '';

  // NowPlayingMovies
  getNowPlayingMovies().then(res => {
    console.clear();
    addSpacer({orientation: 'vertical', size: '2rem', parent: getElem('.container-app')});

    const movies = res.data.results.map(
      item => new Movie(item.id, item.title, item.release_date, item.backdrop_path)
    );

    getElem('.container-app').appendChild(
      createElement({
        tagName: CardList.tagName,
        dataset: {
          title: 'Now Playing Movies'
        },
        data: {
          adapterData: {
            listItem: movies,
            onItemClickedCallback: (movie) => { Router.navigateTo(PATH.detail, movie.id); }
          }
        }
      })
    );
  });

  // PopularMovies
  getPopularMovies().then(res => {
    console.clear();
    addSpacer({orientation: 'vertical', size: '2rem', parent: getElem('.container-app')});

    const movies = res.data.results.map(
      item => new Movie(item.id, item.title, item.release_date, item.backdrop_path)
    );

    getElem('.container-app').appendChild(
      createElement({
        tagName: CardList.tagName,
        dataset: {
          title: 'Popular Movies'
        },
        data: {
          adapterData: {
            listItem: movies,
            onItemClickedCallback: (movie) => { Router.navigateTo(PATH.detail, movie.id); }
          }
        }
      })
    );
  });

  // TopRatedMovies
  getTopRatedMovies().then(res => {
    console.clear();
    addSpacer({orientation: 'vertical', size: '2rem', parent: getElem('.container-app')});

    const movies = res.data.results.map(
      item => new Movie(item.id, item.title, item.release_date, item.backdrop_path)
    );

    getElem('.container-app').appendChild(
      createElement({
        tagName: CardList.tagName,
        dataset: {
          title: 'Top Rated Movies'
        },
        data: {
          adapterData: {
            listItem: movies,
            onItemClickedCallback: (movie) => { Router.navigateTo(PATH.detail, movie.id); }
          }
        }
      })
    );

    addSpacer({orientation: 'vertical', size: '2rem', parent: getElem('.container-app')});
  });
};