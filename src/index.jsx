/* globals document  */
import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import 'material-components-web/dist/material-components-web.min.css';
import App from './App';
import './static/js/redirect';
import './static/js/webfont';

const renderApp = () => {
  render(
    <AppContainer>
      <App />
    </AppContainer>,
    document.getElementById('root'),
  );
};

// This is needed for Hot Module Replacement
if (module.hot) {
  module.hot.accept('./App', () => renderApp());
}

renderApp();
