import React from 'react';
import Link from 'next/link';
import {menubar} from '../constants';

function MenuItem(props, active = '') {
  let className = (props.name.toLowerCase() === active.toLowerCase()) ? 'active' : '';
  return (
    <li className={className} key={props.name}>
      <Link href={props.path}>
        <a><i className={props.icon}></i> {props.name}</a>
      </Link>
    </li>
  );
}

function Toolbar(props) {
  return (
    <ul className="nav navbar-nav">
      {menubar.map(item => MenuItem(item, props.active))}
    </ul>
  );
}

export default Toolbar;
