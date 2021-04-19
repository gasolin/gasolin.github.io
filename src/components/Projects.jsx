import React from 'react';
import { Grid, Cell } from 'react-mdc-web/lib/Grid';

const Portfolio = () => (<Grid>
  <Cell col={12}>
    <h2>Publication, Projects and Apps</h2>
  </Cell>
  <Cell col={6}>
    <h3 id="mobile">Mobile Applications</h3>
    <a href="https://play.google.com/store/apps/developer?id=gasolin">
      <img
        alt="Android app on Google Play"
        src="https://developer.android.com/images/brand/en_app_rgb_wo_45.png"
      />
    </a>
    <ul>
      <li><a href="https://marketplace.firefox.com/app/qrcode-1/">FoxQR</a> : <br/>
          Firefox OS QRCode reader via WebRTC
      </li>
      <li><a href="https://play.google.com/store/apps/details?id=com.a0soft.gphone.aTrackDog">aTrackDog</a>, downloads >860k</li>
      <li><a href="https://play.google.com/store/apps/details?id=com.a0soft.gphone.aWatchDog">aTrackDog(SD)</a>, downloads >500k</li>
      <li><a href="https://play.google.com/store/apps/details?id=com.gasolin.android.metro.taipei">台北捷運地圖(TaipeiMetro)</a>, downloads 260k</li>
      <li><a href="https://play.google.com/store/apps/details?id=com.gasolin.android.wuxing">五行生剋表(Wu Xing Table)</a>, downloads >80k</li>
      <li><a href="https://play.google.com/store/apps/details?id=com.gasolin.android.jingluo">經絡對應表(JingLuo Table)</a>, downloads >60k</li>
      <li><a href="https://play.google.com/store/apps/details?id=com.gasolin.android.attachemail">AttachEmail</a>, downloads >60k</li>
      <li><a href="https://play.google.com/store/apps/details?id=com.gasolin.android.barcodecalorie">BarcodeCalorie</a>, downloads >30k</li>
      <li><a href="https://play.google.com/store/apps/details?id=com.gasolin.android.anobiit">aNobiit</a>, downloads >25k</li>
      <li><a href="https://play.google.com/store/apps/details?id=com.gasolin.android.TwGirlTimer">GirlTimer(TW)</a>, downloads >25k</li>
    </ul>
  </Cell>
  <Cell col={6}>
    <h3 id="web">Web Services</h3>
    <ul>
      <li><a href="http://gasolin.idv.tw/ethhole/">ETH Hole</a> : <br/>
        On-chain analytics of how tokens flow through the Layer 2 and sidechain from Ethereum. (Creator, 2021)
      </li>
      <li><a href="http://stakerwat.ch/">Stakerwat.ch</a> : <br/>
        Web UI to show cross chain balances. (Creator, 2021)
      </li>
      <li><a href="https://crosslink.taipei/">CrossLink Conference Website</a>: <br/>Ethereum Conference Page</li>
      <li><a href="http://letshow.me">LetShow Music (closed)</a>: <br/>Jukebox for android users in a place to share music with dropbox.</li>
      <li><a href="https://blockly-demo.appspot.com/static/apps/code/index.html?lang=zh-hant">周蟒積木版</a>: <br/>Chinese version of Blockly, the web-based visual programming editor.</li>
      <li><a href="https://github.com/BlocklyDuino/BlocklyDuino">BlocklyDuino</a>: <br/>web-based visual programming editor for arduino.</li>
      <li><a href="https://marketplace.firefox.com/app/ui-demos/">Firefox OS UI demos</a>: <br/>(Web App)Firefox OS UI Demos.(obsolete)</li>
      <li><a href="http://letsmeeting.herokuapp.com">LetsMeeting</a> : <br/>
        Mobile First Web Meeting Utility. (Creator, 2013~)(obsolete)
      </li>
      <li><a href="http://gasolin.github.io/bgzla">bgzla monitor</a> : <br/>Bugzilla Monitor for gaia project.(obsolete)</li>
    </ul>
  </Cell>
  <Cell col={4}>
    <h3 id="opensource">Open-source Projects</h3>
    <a href="http://stackoverflow.com/users/669084/gasolin">
      <img src="http://stackoverflow.com/users/flair/669084.png?theme=clean" width="208" height="58" alt="profile for gasolin at Stack Overflow, Q&A for professional and enthusiast programmers" title="profile for gasolin at Stack Overflow, Q&A for professional and enthusiast programmers"/>
    </a>
  </Cell>
  <Cell col={4}>
    <h4>Web</h4>
    <ul>
      <li><a href="http://gasolin.idv.tw/eth-milestone/">Ethereum Milestone</a> : <br/>
      Present Ethereum milestones as git-like diagram. (Creator, 2021)
      </li>
      <li><a href="https://github.com/gasolin/generator-360-photo">generator-360-photo</a> : <br/>
      Generator to create a web based 360 photo skeleton with aframe. (Creator, 2016)
      </li>
      <li><a href="https://github.com/gasolin/saihubot">Saihubot</a> : <br/>
      Chat bot framework runs in the Browser. (Creator, 2016~)
      </li>
      <li><a href="https://github.com/gasolin/foxbox">FoxBox</a> : <br/>
      Auto-configured FirefoxOS build environment in VM. (Creator, 2014)
      </li>
      <li><a href="https://github.com/webapplate/webapplate">webapplate</a> : <br/>
      A Mobile First Web App fromework that help you quickly start
      the mobile web app development. (Creator, 2013~2016)
      </li>
      <li><a href="http://code.google.com/p/blockly/">Gaia</a> : <br/>
      Web-based system platform of Firefox OS. (Commiter, 2013~)
      </li>
      <li><a href="https://github.com/google/blockly">Blockly</a> : <br/>
      Web-based, graphical programming editor. (Commiter, 2012~2013)
      </li>
      <li><a href="https://github.com/BlocklyDuino/BlocklyDuino">BlocklyDuino</a> : <br/>
      BlocklyDuino is a web-based visual programming editor for arduino. (Creator, 2012~)
      </li>
    </ul>
  </Cell>
  <Cell col={4}>
    <h4>Node</h4>
    <ul>
      <li><a href="https://github.com/gasolin/stakerwatch">Stakerwat.ch</a> : Utilities for Ethereum staker (Creator, 2020) </li>
      <li><a href="https://github.com/gasolin/saihubot">Saihubot</a> : cross-platform (web + cli) client-side chatbot framework inspired by hubot (Creator, 2020) </li>
      <li><a href="https://github.com/gasolin/webbybot">Webbybot</a> : chatterbot written in es6 (es2015), compatible with hubot (Creator, 2016) </li>
      <li><a href="https://github.com/gasolin/webbymouse">WebbyMouse</a> : <br/>
      Turn your mobile phone into Air Mouse and touchpad with full web technology.
      (Creator, 2015)
      </li>
    </ul>
  </Cell>
  <Cell col={4}>
    <h4>Python</h4>
    <ul>
      <li><a href="http://zhpy.googlecode.com">ZHPY(周蟒)</a> : <br/>
      Designed and evangelized the Python Language in Chinese.
      (中文版Python程式語言)(Creator, 2007~2013):
      </li>
      <li><a href="http://www.turbogears.org/">TurboGears</a> : <br/>
      The rapid web development megaframework. (Committer & doc site editor, 2005~2007):
      Designed, developed, and maintain TGCrud,
      a customizable editor/crud interface generator based on Model.

Contribute several TurboGears 1.x plugins,
such as genshiquickstart(adopted in TurboGears 1.1), tgmigrate.

Help breeding TG2 in its early stage,
ex. Porting paster commands for TurboGears 2,
and facilitating the docs migration from wiki to sphinx doc system.
      </li>
      <li><a href="http://code.google.com/p/google-app-engine-oil/">google-app-engine-oil</a> : <br/>
      Yet another web framework on App Engine(Committer, 2008~2010)
      </li>
    </ul>
  </Cell>
  <Cell col={4}>
    <h4>Android</h4>
    <ul>
      <li><a href="http://androidbmi.googlecode.com">androidbmi</a> : <br/>
      Android ebook and examples. (Creator, 2008~2013)
      </li>
      <li><a href="http://code.google.com/p/rterm/">rTerm</a> : <br/>
      BBS terminal for Android. (Committer, 2009~2010)
      </li>
      <li><a href="http://code.google.com/p/pycontw2012/">PyCon.tw 2012 Schedule App</a> : <br/>
      Conference Schedule App for Android. (Creator, 2012)
      </li>
    </ul>
  </Cell>
  <Cell col={4}>
    <h4>Other</h4>
    <ul>
      <li><a href="https://github.com/gasolin/typemethod123/">一二三輸入法</a></li>
    </ul>
  </Cell>
  <Cell col={12}>
    <h3>Publications</h3>
  </Cell>
  <Cell col={6}>
    <h4 id="books">Books</h4>
    <ol>
      <li><a href="https://www.gitbook.com/book/gasolin/learn-ethereum-dapp/details">Ethereum區塊鏈！智能合約(Smart Contract)與分散式網頁應用(DApp)入門</a>, (2018/1)</li>
      <li>Android BSP 與系統移植開發 9789572242469, 翻譯正體中文版 (2014/4)</li>
      <li><a href="http://leanpub.com/gaiafromabove">Beyond Web and Firefox OS - GAIA FROM ABOVE</a>, (2014/2)</li>
      <li>Google! Android 手機應用程式設計入門(第五版) 9789572241578, (2013/5)</li>
      <li><font color="grey">Google! Android 3 手機應用程式設計入門(第四版) 9789572239346, (2011/8)</font></li>
      <li><font color="grey">Google Android 2 手机应用程序设计入门第3版 9787894764973, (2010/11)</font></li>
      <li><a href="http://code.google.com/p/smartquestions/">提問的智慧(How To Ask Questions The Smart Way)</a> 翻譯正體中文版, (2010/10)</li>
      <li><font color="grey">Google! Android 2 手機應用程式設計入門(第三版) 9789866382970, (2010/1)</font></li>
      <li><font color="grey">Google Android 开发入门指南 7115213941, (2009/11)</font></li>
      <li><font color="grey">Google! Android 手機應用程式設計入門(第二版) 9789866382185, (2009/8)</font></li>
      <li><font color="grey">Google! Android 手機應用程式設計入門 9789866482274, (2009/3)</font></li>
      <li><a href="http://code.google.com/p/androidbmi/wiki/DiveIntoAndroid">深入淺出 Android -- Google 手持設備應用程式設計入門 電子書(2008~2013)</a></li>
      <li><a href="http://code.google.com/p/zhpy/wiki/ByteOfZhpy">咬一口 Python 電子書 (2006)</a></li>
    </ol>
  </Cell>
  <Cell col={6}>
    <h4 id="media">Media Exposion</h4>
    <ul>
      <li><a href="http://tech.mozilla.com.tw/posts/5987/%e4%bd%bf%e7%94%a8-github-%e9%96%8b%e7%99%bc%e6%88%91%e7%9a%84%e7%ac%ac%e4%b8%80%e5%80%8b%e7%b6%b2%e9%a0%81%e6%87%89%e7%94%a8%e7%a8%8b%e5%bc%8f-%ef%bc%88web-app%ef%bc%89">使用 Github 開發我的第一個網頁應用程式 （Web App）</a>,謀智台客, 2015/1</li>
      <li><a href="https://hacks.mozilla.org/2014/09/webapplate-maintainable-web-app-template-for-firefox-os-and-chrome-apps/">Webapplate – Maintainable web app template for Firefox OS and Chrome Apps</a>, Mozilla Hacks, 2014/9</li>
      <li><a href="http://tech.mozilla.com.tw/posts/4803/%e5%83%8f%e5%8e%9f%e7%94%9f%e6%87%89%e7%94%a8%e7%a8%8b%e5%bc%8f%e4%b8%80%e6%a8%a3%e7%9a%84-webapp%ef%bc%9f%e8%b6%95%e5%bf%ab%e5%ad%b8%e8%b5%b7%e4%be%86%ef%bc%81/">像原生應用程式一樣的 WebApp？趕快學起來！</a>, 謀智台客, 2014/7</li>
      <li><a href="https://www.youtube.com/watch?v=rQdCFgi_5nA">謀智台客編輯群訪談 - 蓋索林 Gasolin</a>, 2014/7</li>
      <li>BlocklyDuino is used to program a kickstarter funded project <a href="blocklyduino is mentioned in kickstarter project https://www.kickstarter.com/projects/1607857757/lilbot-the-little-robot-that-could">Lil’Bot, the Arduino-compatible balancing robot for learning, hacking and delight.</a>, 2014/6</li>
      <li><a href="http://tech.mozilla.com.tw/posts/2862/%e4%b8%80%e5%80%8b%e6%89%93%e5%8d%81%e5%80%8b-%e8%ae%93-gaia-%e7%b6%b2%e9%a0%81%e6%87%89%e7%94%a8%ef%bc%88webapp%ef%bc%89%e6%94%af%e6%8f%b4%e5%a4%9a%e9%87%8d%e8%a8%ad%e5%82%99%ef%bc%88%e4%ba%8c">一個打十個 – 讓 Gaia 網頁應用（webapp）支援多重設備（二：螢幕大小）</a>, 謀智台客, 2013/10</li>
      <li><a href="http://tech.mozilla.com.tw/posts/2835/%e4%b8%80%e5%80%8b%e6%89%93%e5%8d%81%e5%80%8b-%e8%ae%93-gaia-%e7%b6%b2%e9%a0%81%e6%87%89%e7%94%a8%ef%bc%88webapp%ef%bc%89%e6%94%af%e6%8f%b4%e5%a4%9a%e9%87%8d%e8%a8%ad%e5%82%99%ef%bc%88%e4%b8%80">一個打十個 – 讓 Gaia 網頁應用（webapp）支援多重設備（一：像素密度）</a>, 謀智台客, 2013/10</li>
      <li><a href="http://www.ithome.com.tw/itadm/article.php?c=72359">IT人甘苦談：用中文也能寫Python程式</a>, IThome, 2012/2/25</li>
    </ul>
  </Cell>
  <Cell col={6}>
    <h4 id="journals">Journals</h4>
    <ol>
      <li>Major Lee, Fred Lin, and Han-Chieh Chao, Routing Optimization over
          Network Mobility with Distributed Home Agents
          as the Cross Layer Considerationon, TCS, 2008
      </li>
      <li>Yun-Sheng Yen, Fred Lin, and Han-Chieh Chao, Residential Gateway with
          RFID and P2P Community
          at Transaction, Comsumer Electronics, 2005
      </li>
    </ol>
  </Cell>
  <Cell col={6}>
    <h4 id="papers">Papers</h4>
    <ol>
      <li>Fred Lin, Andrew Chang, and Han-Chieh Chao, Hybrid LAN Network Mobility
          with Distributed Home Agents, wcc05
      </li>
      <li>Yun-Sheng Yen, Chia-Chang Hsu, Fred Lin, Han-Chieh Chao, Global Dynamic
          Home Agent Discovery on Mobile IPv6, wcc05
      </li>
      <li>Simba Yen , Fred Lin, and Han-Chieh Chao , Integrated Residential
          Gateway: Easy IA management with P2P Community Using RFID, ICACT2005
      </li>
      <li>Fred Lin, Crota Chen and Han-Chieh Chao, Personal Internetworking
          Using P2P Architecture over IPv6 (ICACT2005 conditionally accepted)
      </li>
      <li>Fred Lin and Han-Chieh Chao, Security Impact of the emerging IPv6
          network (新世代網路IPv6的安全衝擊), TANET, 2004
      </li>
    </ol>
  </Cell>
</Grid>);

export default Portfolio;
