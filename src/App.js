import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Elevation } from 'react-mdc-web';

import Header from './components/header';
import Footer from './components/footer';
import asyncComponent from './components/asyncComponent';
import './App.css';

const Resume = asyncComponent(() => import('./components/Resume')
  .then(module => module.default), { name: 'Resume' });
const Projects = asyncComponent(() => import('./components/Projects')
  .then(module => module.default), { name: 'Projects' });
const Presents = asyncComponent(() => import('./components/Presents')
  .then(module => module.default), { name: 'Presents' });
const Home = asyncComponent(() => import('./components/Home')
  .then(module => module.default), { name: 'Home' });

const paperStyle = {
  padding: '19px',
  backgroundColor: '#fff',
};

const App = () => (<Router>
  <main>
    <Header />
    <Elevation z={4} style={paperStyle}>
      <Route exact path="/" component={Home}/>
      <Route path="/resume" component={Resume} />
      <Route path="/portfolio" component={Projects} />
      <Route path="/present" component={Presents} />
      <Footer />
    </Elevation>
  </main>
</Router>);

export default App;
