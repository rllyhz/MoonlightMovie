// Helpers
import { createElement, appendBody } from './helpers/DomHelpers';
import { initApp, appConfiguration } from './helpers/AppHelpers';
// Styles
import './styles/app.css';
// Components
import TopBar from './components/TopBar';

initApp({ title: 'MoonlightMovie' })

// TopBar
appendBody(
  createElement({
    tagName: TopBar.tagName,
    id: 'my-top-bar',
    data: {
      title: appConfiguration().titleApp
    }
  })
);