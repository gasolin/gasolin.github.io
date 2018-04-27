import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { asyncComponent } from 'react-async-component';
import Elevation from 'react-mdc-web/lib/Elevation';

import Header from './components/header';
import Footer from './components/footer';
import './App.css';

const paperStyle = {
  padding: '19px',
  backgroundColor: '#fff',
};

const AsyncHome = asyncComponent({
  resolve: () => import('./components/Home'),
  ErrorComponent: ({ error }) => <div>{error.message}</div>,
});

const  AsyncResume = asyncComponent({
  resolve: () => import('./components/Resume'),
  ErrorComponent: ({ error }) => <div>{error.message}</div>,
});

const AsyncPresents = asyncComponent({
  resolve: () => import('./components/Presents'),
  ErrorComponent: ({ error }) => <div>{error.message}</div>,
});

const AsyncProjects = asyncComponent({
  resolve: () => import('./components/Projects'),
  ErrorComponent: ({ error }) => <div>{error.message}</div>,
});

const App = () => (
  <Router>
    <main>
      <Header />
      <Elevation z={4} style={paperStyle}>
        <Switch>
          <Route exact path="/" component={AsyncHome} />
          <Route path="/resume" component={AsyncResume} />
          <Route path="/portfolio" component={AsyncProjects} />
          <Route path="/present" component={AsyncPresents} />
        </Switch>
        <Footer />
      </Elevation>
    </main>
  </Router>
);

export default App;
