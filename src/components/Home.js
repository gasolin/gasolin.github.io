import React from 'react';
import { Grid, Cell } from 'react-mdc-web/lib/Grid';
import { Link } from 'react-router-dom';
import Slogan from './slogan';

const GridStyle = {
  textAlign: 'center',
};

const Home = () => (<div><Slogan />
  <p>I'm an open source supporter, currently work on Mozilla as a <a href="https://wiki.mozilla.org/index.php?title=Modules%2FFirefox&diff=1177818&oldid=1163663"> Firefox module peer</a>.
Before join Mozilla, I published a best selling Android development book (in Taiwan) and I'm also the organizer of <a href="https://www.facebook.com/groups/1614248835348810/?fref=ts">GDG Taipei</a>.
<br/>
I like to <a href="http://gasolin.idv.tw/portfolio">try</a> and <a href="http://gasolin.idv.tw/present">share</a> emerging web and mobile technologies.<br/>
The most popular open source project I created is <a href="https://github.com/BlocklyDuino/BlocklyDuino">BlocklyDuino</a>,
which has been used by several <a href="https://github.com/MediaTek-Labs/BlocklyDuino-for-LinkIt">arduino-compatible board</a> and STEM projects.
</p>
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
