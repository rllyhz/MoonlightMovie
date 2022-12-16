// Helpers
import { createElement, appendBody } from './helpers/DomHelpers';
// Styles
import './styles/app.css';
// Components
import TopBar from './components/TopBar';

// TopBar
appendBody(
  createElement({
    tagName: TopBar.tagName,
    id: 'my-top-bar',
    data: {
      title: 'MoonlightMovie'
    }
  })
);