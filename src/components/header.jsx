import React from 'react';
import { Tab, Tabbar } from 'react-mdc-web/lib/Tabs';
import { Toolbar, ToolbarRow, ToolbarSection, ToolbarTitle } from 'react-mdc-web/lib/Toolbar';
import { Link } from 'react-router-dom';

const tabStyle = {
  marginTop: '3px',
};

const toolbarStyle = {
  minHeight: '48px',
};

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
    this.setState({
      value: evt.target.dataset.value,
    });
  }

  render() {
    let handleClick = this.handleClick.bind(this);
    return (<Toolbar z={4}>
      <ToolbarRow style={toolbarStyle}>
        <ToolbarSection align="start">
          <ToolbarTitle value={0} onClick={handleClick}>
            <Link to="/" style={linkStyle}>gasolin</Link>
          </ToolbarTitle>
          <Tabbar style={tabStyle} onClick={handleClick}>
            <Tab active={this.state.value === 1} data-value={1}>
              <Link to="/resume" style={linkStyle}>Resume</Link>
            </Tab>
            <Tab active={this.state.value === 2} data-value={2}>
              <Link to="/portfolio" style={linkStyle}>Projects</Link>
            </Tab>
            <Tab active={this.state.value === 3} data-value={3}>
              <Link to="/present" style={linkStyle}>Presentations</Link>
            </Tab>
          </Tabbar>
        </ToolbarSection>
      </ToolbarRow>
    </Toolbar>);
  }
}

export default Header;
