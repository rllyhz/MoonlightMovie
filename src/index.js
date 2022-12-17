// Helpers
import { Router, PATH } from './helpers/RouteHelpers';
import { createElement, appendBody, getElem } from './helpers/DomHelpers';
import { initApp, appConfiguration } from './helpers/AppHelpers';
// Styles
import './styles/app.css';
// Components
import TopBar from './components/TopBar';
import SearchBar from './components/SearchBar';
import HomePage from './pages/HomePage';
import SearchResultPage from './pages/SearchResultPage';

initApp({ name: 'MoonlightMovie' });

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
        onSubmitCallback: (value) => { 
          if (value.length > 0) {
            Router.navigateTo(PATH.search, value);
          } else {
            if (Router.getActivePath() == PATH.search) {
              Router.navigateUp();
            } else {
              alert('Please insert you query!');
            }
          }
        }
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

// Router init
Router.onPreReload(() => {
  getElem('.container-app').innerHTML = '';
});

Router.onReload((path, data) => {
  if (path == PATH.home) {
    HomePage();
  } else if (path == PATH.search) {
    SearchResultPage(data);
  } else {
    alert('Page not found!');
    Router.navigateTo(PATH.home);
  }
});

Router.load({ initialPath: PATH.home });
