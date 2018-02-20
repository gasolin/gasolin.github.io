import React from 'react';
import { Grid, Cell } from 'react-mdc-web/lib/Grid';
// import Milestone from './Milestone';

const Resume = () => (<Grid>
  <Cell col={12}>
    <h2>Resume</h2>
    <a href="https://www.linkedin.com/in/fredglin/"><img src="/static/images/btn_myprofile_160x33.gif" alt="link to my linkedin profile" /></a>
  </Cell>
  <Cell col={12}>
    <h3>Personal Information</h3>
    <ul>
      <li>Nick Name: gasolin (蓋索林)</li>
      <li>🎂 Birth Year: 1981</li>
      <li>️️✉️ Email: <img src="/static/images/mail.gif" className="email" alt="gasolin at gmail dot com" /></li>
    </ul>
  </Cell>
  {/* <Cell  col={12}>
    <Milestone></Milestone>
  </Cell> */}
  <Cell col={12}>
    <h3>Education and Certification</h3>
    <ul>
      <li>🎫 TOEIC: <span className="label label-gold">890</span> (Gold), 2014</li>
      <li>🎓 M.S., National Dong-Hwa University, Electrical Engineering. 2005.
        {/* <ul>
          <li>Thesis: Hybrid-LAN Network Mobility with Distributed Home Agents</li>
        </ul> */}
      </li>
      <li>🎓 B.S., National Dong-Hwa University, Electrical Engineering. 2003.</li>
    </ul>
  </Cell>
  <Cell col={12}>
    <h3>Publication / Lecture / Events </h3>
    <ul>
      <li></li>
    </ul>
  </Cell>
  <Cell col={12}>
    <h3>Experience</h3>
    <ul>
      <li>👨‍💻 Senior Software engineer, <a href="http://www.mozilla.com.tw/">Mozilla Taiwan</a>, 2013/2 ~ 2018/1<br/>
        . As <a href="https://www.oxymoronical.com/blog/2017/08/New-Firefox-and-Toolkit-module-peers-in-Taipei">Firefox module peer</a>, development Firefox onboarding experience from v56<br/>
        . As Devtools module peer, completly refactor <a href="https://github.com/mozilla/gecko-dev/tree/master/devtools/client/netmonitor">Network Monitor</a> with React & Redux<br/>
        . As Firefox OS Settings app peer, development Firefox OS frontend system and apps (GAIA)
          via emerging web technologies.<br/>
        . all works are opensourced <a href="https://github.com/gasolin">on GitHub</a>
      </li>
      <li>🤹‍ Organizer, <a href="http://taipei-gtug.org/">GDG Taipei</a>, 2011 ~ present:<br/>
          . (was Taipei GTUG, Taipei Google Technology User Group)<br/>
          . Organize the people who are interested in Google's technology
          for discussion, hacking, and learning.<br/>
          . <a href="www.taipei-gtug.org/meetings/meeting2011">Invite talks and hold hackathons for over 50 meetups</a>.
      </li>
      <li>👨‍💻 Senior Software Design Engineer, <a href="http://www.delta.com.tw/">Delta Electronics</a>, 2010 ~ 2013<br/>
      . Paperless environment related research and development<br/>
      . Architect and implement education related services, include web frontend,
          API, and mobile clients.<br/>
      . Architect and Lead teams to develop Web Service and Android client.<br/>
      . Designed, coded and tested e-publish system with
          digital right management (DRM) support.<br/>
      . Develop multiple DRM clients (with Java/C/Qt)
          applicable for win/mac/linux/embedded OS.<br/>
      . Trained and submitted an Intellectual Property(IP) claim.<br/>
      . Develop web user interface of Cloud Storage Backend.
      </li>
      <li>👨‍💻 Software Design Engineer, <a href="http://www.dninetworks.com/">Delta Network(DNI)</a>, 2005~2010:<br/>
      . Made wire and wireless router firmware development from
          backend to frontend (system build/porting, iptable routing,
          user space application, web GUI).<br/>
      . Designed, coded, ported and tested on linux-based home networking
          ODM products for JP and US customers.<br/>
      . Researched and ported emerging network protocols
          (such as IPv6 6to4, Tunnel Broker(OCN), DTCP(Feel6),
          Microsoft LLTD and some private protocols) onto embedded CPE devices.
      </li>
      <li>Open Source Committer, <a href="http://turbogears.org/">TurboGears</a>, 2006~2008:<br/>
      . Designed, developed, and maintain TGCrud,
          a customizable editor/crud interface generator based on the Object Model.<br/>
      . Contribute several TurboGears 1.x plugins,
          such as genshiquickstart(adopted in TurboGears 1.1), tgmigrate.<br/>
      {/* . Help breeding TG2 in its early stage,
          ex. Porting paster commands for TurboGears 2,
          and facilitating the docs migration from wiki to sphinx doc system.<br/> */}
      </li>
      {/* <li>Intern, YuDong Tech, 2004 Spring</li>
      <li>T. A. (Networking Lab), <a href="www.ee.ndhu.edu.tw">Dept of EE in NDHU</a>, 2003 fall</li>
      <li>T. A. (Computer Programming), <a href="http://www.im.ndhu.edu.tw/">Dept of IM in NDHU</a>, 2003 fall </li> */}
      <li>Web developer, National Dong-Hwa University, Electrical Engineering. 2000~2004:<br/>
      . Design & maintain the department homepage<br/>
      . Apply ASP for department news update since 2001<br/>
      </li>
    </ul>
  </Cell>
  <Cell col={12}>
    <h3>Honors/Awards</h3>
    <ul>
    <li>🗣 6 times Coscup Speaker <a href="present">since 2009</a> with variety of open source related topics
      </li>
      <li>📗 Top 5 yearly best seller in books.com.tw language&programming category,
          Android programming entry book 4ed. 2011
      </li>
      <li>📗 Top 2 in TenLong's Best Tech Book Seller Billboard,
          Android programming entry book 1st~3ed. 2009~2011
      </li>
      <li>📙 Honorable Mention, introductory the book 'Google App Engine in Practice'
          (Google 應用服務引擎開發實戰 , 上官林傑), 2009
      </li>
      <li>Honorable Mention, listed as zxing contributor for the pattern of using
          barcode scanner, 2009
      </li>
      <li>🎗 SLAT(Software Liberty Association of Taiwan) voting
          Best Educational Promoter award (自由軟體傑出教育推廣獎),2008
      </li>
      <li>🎗Entry the final of Communication Application Integration Contest
          (將RFID及P2P整合於家庭網路－實現商品防仿冒和自動取得商品附加價值之服務系統,
          通訊應用整合競賽入選), 2004
      </li>
      <li>🎗Microsoft sponsor honor of IPv6 Creativity Contest(個人內容分散式網路-利用 IPv6 特性的
          P2P 節點搜尋機制與應用, IPv6 創意競賽 Microsoft 企業贊助獎), 2003
      </li>
      <li>⚽️ Honorable Mention, Champion of Eagle Cup 2001 (soccer) (老鷹盃公開組11人制足球賽, 冠軍), 2001</li>
    </ul>
  </Cell>
  <Cell col={12}>
    <h3>Specialty</h3>
    <h4>Programming languages</h4>
    <ul>
      <li>Javascript: 5/5</li>
      <li>Python: 3/5</li>
      <li>Java/C: 2/5</li>
    </ul>
  </Cell>
  <Cell col={12}>
    <h4>Web development</h4>
    <ul>
      <li>Frontend: HTML, CSS, JavaScript, React, Bootstrap</li>
      <li>Backend: Node.js (express),
          Python (Django, TurboGears, Google App Engine),
          Java (Play! Framework)</li>
      <li>Web design and programming: Involved in 2 open source web frameworks
      development(TurboGears, GAEO) for bootstraping,
      user experience enhancement, and plugin development.</li>
    </ul>
  </Cell>
  <Cell col={12}>
    <h4>Mobile development</h4>
    <ul>
      <li>Firefox OS Settings App peer, <a href="https://github.com/mozilla-b2g/gaia/graphs/contributors">top 20 contributor</a> of gaia project</li>
      <li><a href="portfolio#mobile">Android and Mobile Web App design and programming</a></li>
      <li>Android & Mobile Web App Continue Integration (Auto-build, Profiling and Testing)</li>
      <li>Android & FirefoxOS Programing Book Author</li>
    </ul>
  </Cell>
  <Cell col={12}>
    <h4>Project Management:</h4>
    <ul>
      <li>Contribute and lead several <a href="portfolio#opensource">Open Source projects</a>.</li>
      <li>Organize <a href="http://taipei-gtug.org">GDG Taipei</a> meetups and events since 2011.</li>
      <li>Daily Scrum during Devtools and Firefox development, cowork across countries and timezone in daily basis.</li>
      {/* <li>Lead a team to develop web-based content platform and Device(specially Android) cooperated products.</li> */}
    </ul>
  </Cell>
  <Cell col={12}>
    <h4>Domain Knowledge</h4>
    <ul>
      <li>Server-Client/Mobile Service architect, design and integration:
          Cooperated to deliver 500M+
          download Android app (aTrackDog) with web service.
      </li>
      <li>Network Protocols & System Integration: Designed, coded,
          ported and tested on linux-based home networking ODM products for
          JP and US customers.
      </li>
      <li>Cross Platform design: Designed, coded and tested digital right
          management(OMA-like) system through c and java with Qt,
          Android, and server involved integration.
      </li>
      <li>User Experience in concern: Make easy to use bootstraping procedures
          for TurboGears and GAEO web frameworks, my published
          mobile apps, books and documents.
      </li>
      <li>Publish Speaking: Elaborated technical topics (Web framework, Python,
          Android, Mercurial) in public with passion.
      </li>
      <li>Intellectual Property(IP): trained and submitted IP claim in US/TW</li>
      <li>Organize and Facilitation: Introduced productive tools such as
          version control, tracking system to working groups.
      </li>
      <li>Open Source: Involved in multiple open source projects and use them
          in daily work. Organize over 50 developer meetups and activities.
      </li>
    </ul>
  </Cell>
  {/* <Cell col={6}>
      <h5>System administration</h5>
      <ul>
        <li>Mac, Linux (Ubuntu), Windows</li>
        <li>Version Control (git, svn)</li>
        <li>Issue Tracking (Bugzilla, RedMine, Trac)</li>
        <li>Continue Integration (Travis, Jenkins)</li>
      </ul>
  </Cell> */}
  {/* <Cell col={12}>
    <h3>Interests</h3>
    <ul>
      <li>Reading & Writing</li>
      <li>Web and Mobile development</li>
      <li>Chinese medicine and astrology</li>
      <li>Soccer</li>
    </ul>
  </Cell> */}
</Grid>);
export default Resume;
