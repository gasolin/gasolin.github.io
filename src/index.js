import React from 'react';
import ReactDOM from 'react-dom';
import {
  Router,
  Route,
  IndexRoute,
  browserHistory,
} from 'react-router';
import App from './components/app';
import Home from './components/pages/home';
import Resume from './components/pages/personal/resume';
import Present from './components/pages/personal/present';
import Portfolio from './components/pages/personal/portfolio';
// import './static/js/pushmenu';
// import './static/js/ga.js';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="resume" component={Resume}/>
      <Route path="present" component={Present}/>
      <Route path="portfolio" component={Portfolio}/>
    </Route>
  </Router>
  // <Route path="*" component={NoMatch}/>
  // <App/>
  , document.getElementById('root'));
