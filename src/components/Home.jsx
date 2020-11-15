import React from 'react';
import { Grid, Cell } from 'react-mdc-web/lib/Grid';
import { Link } from 'react-router-dom';
import Slogan from './slogan';

const GridStyle = {
  textAlign: 'center',
};

const Home = () => (
<div>
  <Slogan />
  <div id="summary">
    <p>Web engineer and open source contributor with 10+ years of experience. As frontend, mobile app, backend developer, network system integration engineer with 12+ years in Internet industry.</p>
    <p>While maintaining and refactoring the large code base like Gecko (Mozilla Firefox) and Firefox OS frontend as a module peer, self motivated attitude helps me cross the border and have tracked records to create a project from ideas to reality (Android app aTrackDog notify app updates in early Android days and have >86k downloads. Web based visual programming tool BlocklyDuino is adopted by several STEM projects). </p>
    <p>The multi-position experience helps me put myself in other&apos;s shoes and make cross-functional cooperation smoothly (with UI designer, backend engineer).</p>
  </div>
  <Grid style={GridStyle}>
    <Cell col={2}>
      <Link to="/resume"><img alt="link to gasolin's resume" src="static/images/resume2.png" /></Link><br />Resume<br />(履歷)
    </Cell>
    <Cell col={2}>
      <a href="http://blog.gasolin.idv.tw/"><img alt="link to gasolin's blog" src="static/images/blog2.png" /></a><br />Blog<br />(部落格)
    </Cell>
    <Cell col={2}>
      <a href="http://www.gasolin.idv.tw/"><img alt="QRCode for gasolin's home page" width="80px" height="80px" src="static/images/gasolin_qrcode.png" /></a><br />QRCode
    </Cell>
  </Grid>
</div>
);

export default Home;
