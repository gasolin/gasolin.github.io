import React from 'react';
import { Tab, Tabbar, Toolbar, ToolbarRow, ToolbarSection, ToolbarTitle } from 'react-mdc-web';
import { Link } from 'react-router-dom';

const tabStyle = {
  height: 24,
};

const linkStyle = {
  color: 'inherit',
  textDecoration: 'inherit',
}

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
    };
  }

  handleChange(evt) {
    let value = evt.target.dataset.value;
    this.setState({
      value,
    });
  }

  /*render() {
    return (<Tabs value={this.state.value} onChange={this.handleChange.bind(this)}>
      <Tab value={0} label="Gasolin" containerElement={<Link to="/"/>} />
      <Tab value={1} label="Resume" containerElement={<Link to="/resume"/>}/>
      <Tab value={2} label="Projects" containerElement={<Link to="/portfolio"/>} />
      <Tab value={3} label="Presentations" containerElement={<Link to="/present"/>} />
    </Tabs>);
  }*/

 render() {
    return (<Toolbar z={4}>
      <ToolbarRow>
        <ToolbarSection align='start'>
          <ToolbarTitle value={0} onClick={this.handleChange.bind(this)}>
            <Link to='/' style={linkStyle}>gasolin</Link></ToolbarTitle>
          <Tabbar style={tabStyle} onClick={this.handleChange.bind(this)}>
            <Tab active={this.state.value===1} data-value={1}>
              <Link to='/resume' style={linkStyle}>Resume</Link></Tab>
            <Tab active={this.state.value===2}  data-value={2}>
              <Link to='/portfolio' style={linkStyle}>Projects</Link></Tab>
            <Tab active={this.state.value===3}  data-value={3}>
              <Link to='/present' style={linkStyle}>Presentations</Link></Tab>
          </Tabbar>
        </ToolbarSection>
      </ToolbarRow>
    </Toolbar>);
  }
}

export default Header;
