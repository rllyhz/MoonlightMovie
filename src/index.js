// Helpers
import { createElement, appendBody } from './helpers/DomHelpers';
import { initApp, appConfiguration, setTitle } from './helpers/AppHelpers';
import { getNowPlayingMovies } from './networks/Api';
// Styles
import './styles/app.css';
// Components
import TopBar from './components/TopBar';
import SearchBar from './components/SearchBar';
import CardItem from './components/CardItem';

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
        onSubmitCallback: (value) => { console.log(value) }
      }
    }
  })
);

getNowPlayingMovies().then(res => {
  res.data.results.forEach(movie => {
    const movieElem = createElement({
      tagName: CardItem.tagName,
      data: {
        movieData: {
          id: movie.id,
          title: movie.original_title,
          releaseDate: movie.release_date,
          imagePath: movie.backdrop_path,
          clickCallback: (movie) => console.log('clicking movie: ' + movie.title)
        }
      }
    });

    appendBody(movieElem);
  });
});