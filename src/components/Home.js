import React from 'react';
import { Grid, Cell } from 'react-mdc-web';
import { Link } from 'react-router-dom';
import Slogan from './slogan';

const GridStyle = {
  textAlign: 'center',
};

const Home = () => (<div><Slogan />
  <Grid style={GridStyle}>
    <Cell col={2}>
      <Link to='/resume'><img src='static/images/resume2.png' /></Link><br/>Resume<br/>(履歷)
    </Cell>
    <Cell col={2}>
      <a href='http://blog.gasolin.idv.tw/'><img src='static/images/blog2.png' /></a><br/>Blog<br/>(部落格)
    </Cell>
    <Cell col={2}>
      <a href='http://www.gasolin.idv.tw/'><img width='80px' height='80px' src='static/images/gasolin_qrcode.png' /></a><br/>QRCode
    </Cell>
  </Grid>
</div>);

export default Home;
