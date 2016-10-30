import React from 'react';
import Link from 'next/link';

function Header(props) {
  return (
    <header className="container">
        <div className="navbar navbar-inverse navbar-material-indigo shadow-z-2" role="navigation" id="slide-nav">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle" data-target=".navbar-responsive-collapse">
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <Link href="/"><a className="navbar-brand">Gasolin</a></Link>
          </div>
          <div id="slidemenu">
            {props.children}
          </div>
        </div>
    </header>
  );
}

export default Header;
