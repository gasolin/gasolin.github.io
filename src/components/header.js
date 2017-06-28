import React from 'react';
import { Tab, Tabbar } from 'react-mdc-web/lib/Tabs';
import { Toolbar, ToolbarRow, ToolbarSection, ToolbarTitle } from 'react-mdc-web/lib/Toolbar';
import { Link } from 'react-router-dom';

const linkStyle = {
  color: 'inherit',
  textDecoration: 'inherit',
};

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
    };
  }

  handleClick(evt) {
    const value = evt.target.dataset.value;
    this.setState({
      value,
    });
  }

  render() {
    return (<Toolbar z={4}>
      <ToolbarRow>
        <ToolbarSection align='start'>
          <ToolbarTitle value={0} onClick={this.handleClick.bind(this)}>
            <Link to='/' style={linkStyle}>gasolin</Link></ToolbarTitle>
          <Tabbar onClick={this.handleClick.bind(this)}>
            <Tab active={this.state.value === 1} data-value={1}>
              <Link to='/resume' style={linkStyle}>Resume</Link></Tab>
            <Tab active={this.state.value === 2} data-value={2}>
              <Link to='/portfolio' style={linkStyle}>Projects</Link></Tab>
            <Tab active={this.state.value === 3} data-value={3}>
              <Link to='/present' style={linkStyle}>Presentations</Link></Tab>
          </Tabbar>
        </ToolbarSection>
      </ToolbarRow>
    </Toolbar>);
  }
}

export default Header;
