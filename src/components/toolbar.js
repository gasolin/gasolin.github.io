import React, { Component, PropTypes } from 'react';
import { menubar } from '../constants';
import {
  Link,
  IndexLink,
} from 'react-router';

// from http://brandonlehr.com/bootstrap-tabs-react-router-and-the-active-class/
// class menuItem extends Component {

//   static propTypes = {
//     to: PropTypes.string,
//     onlyActiveOnIndex: PropTypes.bool,
//     children: PropTypes.node,
//   }

//   // pull in the router context
//   static contextTypes = {
//     router: PropTypes.object.isRequired,
//   };

//   render() {
//     // determine if the route is active, router.isActive function
//     // receives the "to" and onlyActiveOnIndex props
//     const isActive = this.context.router.isActive(this.props.to, this.props.onlyActiveOnIndex);

//     // if onlyActiveOnIndex is passed then IndexLink is used, else just Link
//     const LinkComponent = this.props.onlyActiveOnIndex ? IndexLink : Link;

//     // add the bootstrap active class to the active links containing <li>
//     const className = isActive ? 'active' : '';

//     return (
//       <li className={className} >
//         <LinkComponent to={this.props.to} >{this.props.children}</LinkComponent>
//       </li>
//     );
//   }
// }

function menuItem(props, active = '') {
  const className = (props.name.toLowerCase() === active.toLowerCase()) ? 'active' : '';
  return (
    <li className={className} key={props.name}>
      <Link to={props.path} activeClassName="active">
        <i className={props.icon}></i> {props.name}
      </Link>
    </li>
  );
}

function Toolbar(props) {
  return (
    <ul className="nav navbar-nav">
      {menubar.map(item => menuItem(item, props.active))}
    </ul>
  );
}

export default Toolbar;
