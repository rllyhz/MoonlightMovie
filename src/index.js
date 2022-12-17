// Helpers
import { createElement, appendBody, addSpacer, getElem } from './helpers/DomHelpers';
import { initApp, appConfiguration, setTitle } from './helpers/AppHelpers';
import { getNowPlayingMovies, getPopularMovies, getTopRatedMovies } from './networks/Api';
// Data
import Movie from './data/Movie';
// Styles
import './styles/app.css';
// Components
import TopBar from './components/TopBar';
import SearchBar from './components/SearchBar';
import CardList from './components/CardList';

initApp({ name: 'MoonlightMovie' });
setTitle(`${appConfiguration().title} | Home`);

// TopBar
appendBody(
  createElement({
    tagName: TopBar.tagName,
    id: 'my-top-bar',
    data: {
      title: appConfiguration().name
    }
  })
);

// SearchBar
appendBody(
  createElement({
    tagName: SearchBar.tagName,
    id: 'my-search-bar',
    data: {
      searchData: {
        type: 'text',
        placeholderText: 'Search here (Ex. Avatar)',
        submitText: 'Search',
        onSubmitCallback: (value) => { getElem('.container-app').innerHTML = ''; }
      }
    }
  })
);

appendBody(
  createElement({
    tagName: 'div',
    classNames: 'container-app'
  })
);

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
          onItemClickedCallback: (movie) => { console.log(`Clicked on movie: ${movie.title}`); }
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
          onItemClickedCallback: (movie) => { console.log(`Clicked on movie: ${movie.title}`); }
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
          onItemClickedCallback: (movie) => { console.log(`Clicked on movie: ${movie.title}`); }
        }
      }
    })
  );

  addSpacer({orientation: 'vertical', size: '2rem', parent: getElem('.container-app')});
});