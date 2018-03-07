import React from 'react';
import { Grid, Cell } from 'react-mdc-web/lib/Grid';
import { Link } from 'react-router-dom';
import Slogan from './slogan';

const GridStyle = {
  textAlign: 'center',
};

const Home = () => (<div><Slogan />
  <div id="summary">
    <p>I have been an open source contributor and web engineer for 10+ years.
    I consistently explore web/mobile technologies and improvement of every aspect of <a href="http://gasolin.idv.tw/portfolio">bootstrapping</a> and <a href="http://gasolin.idv.tw/present">onboarding</a> process.
    In doing so, I can encourage developers and users by providing a user engaging interface, well-document or crafted presentation. Currently I'm working on  an eBook about <a href="https://gasolin.gitbooks.io/learn-ethereum-dapp/">Programming Smart Contract and DApp</a>.</p>
    <p>Previously worked in Mozilla as a 🔥🦊<a href="https://wiki.mozilla.org/index.php?title=Modules%2FFirefox&diff=1177818&oldid=1163663"> Firefox</a> and 👨‍💻<a href="http://firefox-dev.tools/">Devtools</a> module peer for 5 years, be a volunteer organizer in <a href="https://www.facebook.com/groups/1614248835348810/?fref=ts">GDG Taipei</a> for 8 years, and published <a href="portfolio#books">a best selling Android development book</a> in 2011.</p>
    <p>The most popular open source project I created is <a href="https://github.com/BlocklyDuino/BlocklyDuino">BlocklyDuino</a>,
    which has been used by several <a href="https://github.com/MediaTek-Labs/BlocklyDuino-for-LinkIt">Arduino-compatible boards</a> and STEM projects.
    </p>
  </div>
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
