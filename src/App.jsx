import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Elevation from 'react-mdc-web/lib/Elevation';

import Header from './components/header';
import Footer from './components/footer';
import AsyncHome from './components/AsyncHome';
import AsyncResume from './components/AsyncResume';
import AsyncPresents from './components/AsyncPresents';
import AsyncProjects from './components/AsyncProjects';
import './App.css';

const paperStyle = {
  padding: '19px',
  backgroundColor: '#fff',
};

const App = () => (
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
  </main>);

export default App;
