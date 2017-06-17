import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import App from './App';
import 'material-components-web/dist/material-components-web.min.css';

const renderApp = () => {
  render(
    <AppContainer>
      <App />
    </AppContainer>,
    document.getElementById('root'),
  );
};

// This script adds the Roboto font to our project. For more detail go to this site:  http://www.google.com/fonts#UsePlace:use/Collection:Roboto:400,300,500 -->
const WebFontConfig = {
  google: {
    families: ['Roboto:400,300,500:latin'],
  },
};

(function () {
  const wf = document.createElement('script');
  wf.src = 'https://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
  wf.type = 'text/javascript';
  wf.async = 'true';
  const s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(wf, s);
}());

// This is needed for Hot Module Replacement
if (module.hot) {
  module.hot.accept('./App', () => renderApp());
}

renderApp();
