// Helpers
import { createElement, appendBody } from './helpers/DomHelpers';
import { initApp, appConfiguration, setTitle } from './helpers/AppHelpers';
// Styles
import './styles/app.css';
// Components
import TopBar from './components/TopBar';
import SearchBar from './components/SearchBar';

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

// getNowPlayingMovies().then(res => console.log(res.data))