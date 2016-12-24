import React from 'react';
import Header from './header';
import Main from './main';
import Toolbar from './toolbar';
import Footer from './footer';

function App(props) {
  return (
    <div>
      <Header>
        <Toolbar/>
      </Header>
      <Main>
        {props.children}
        <Footer/>
      </Main>
    </div>
  );
}

export default App;
