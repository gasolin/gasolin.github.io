import React from 'react';
import { Grid, Cell } from 'react-mdc-web/lib/Grid';
import { Link } from 'react-router-dom';
import Slogan from './slogan';

const GridStyle = {
  textAlign: 'center',
};

const Home = () => (<div><Slogan />
  <p>I'm an open source contributor and web engineer. Previously worked on Mozilla as a 🔥🦊<a href="https://wiki.mozilla.org/index.php?title=Modules%2FFirefox&diff=1177818&oldid=1163663"> Firefox</a> and 👨‍💻<a href="http://firefox-dev.tools/">Devtools</a> module peer.
  I'm one of the early <a href="https://www.facebook.com/groups/1614248835348810/?fref=ts">GDG Taipei</a> organizers, which align to my interests of <a href="http://gasolin.idv.tw/portfolio">trying</a> and <a href="http://gasolin.idv.tw/present">sharing</a> emerging web and mobile technologies.
  In 2011, I published a best selling Android development book in Taiwan. I created plenty of open source project. The most popular one is <a href="https://github.com/BlocklyDuino/BlocklyDuino">BlocklyDuino</a>,
  which has been used by several <a href="https://github.com/MediaTek-Labs/BlocklyDuino-for-LinkIt">Arduino-compatible boards</a> and STEM projects.
  </p>
  <Grid style={GridStyle}>
    <Cell col={2}>
      <Link to="/resume"><img alt="link to gasolin's resume" src="static/images/resume2.png" /></Link><br/>Resume<br/>(履歷)
    </Cell>
    <Cell col={2}>
      <a href="http://blog.gasolin.idv.tw/"><img alt="link to gasolin's blog" src="static/images/blog2.png" /></a><br/>Blog<br/>(部落格)
    </Cell>
    <Cell col={2}>
      <a href="http://www.gasolin.idv.tw/"><img alt="QRCode for gasolin's home page" width="80px" height="80px" src="static/images/gasolin_qrcode.png" /></a><br/>QRCode
    </Cell>
  </Grid>
</div>);

export default Home;
