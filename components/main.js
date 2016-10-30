import React from 'react';
import Slogan from './slogan';

function Main(props) {
  return (
    <main className="container">
      <div className="well">
        <Slogan/>
        {props.children}
      </div>
    </main>
  );
}

export default Main;
