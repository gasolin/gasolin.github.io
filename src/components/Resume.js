import React from 'react';
import { Grid, Cell } from 'react-mdc-web/lib/Grid';

const Resume = props => (<Grid>
  <Cell col={12}>
    <h2>Resume</h2>
    <a href="https://www.linkedin.com/in/fredglin/"><img src="/static/images/btn_myprofile_160x33.gif" alt="link to my linkedin profile"/></a>
  </Cell>
  <Cell col={6}>
    <h3>Personal Information</h3>
    <ul>
      <li>Nick Name: gasolin (蓋索林)</li>
      <li>Birth Year: 1981</li>
      <li>Email: <img src="/static/images/mail.gif" className="email" alt="gasolin at gmail dot com"/></li>
    </ul>
  </Cell>
  <Cell col={6}>
    <h3>Education</h3>
    <ul>
      <li>M.S., National Dong-Hwa University 2005. Electrical Engineering.
      <ul>
        <li>Thesis: Hybrid-LAN Network Mobility with Distributed Home Agents</li>
      </ul>
      </li>
      <li>B.S., National Dong-Hwa University 2003. Electrical Engineering.</li>
    </ul>
  </Cell>
  <Cell col={12}>
      <h3>Certificate</h3>
      <ul>
          <li>TOEIC(Test of English for International Communication): <span className="label label-gold">890</span> (Gold), 2014</li>
      </ul>
  </Cell>
  <Cell col={12}>
    <h3>Experience</h3>
    <font color="darkblue">(Details are available upon request)</font>
          <ul>
        <li>Senior Software engineer, <a href="http://www.mozilla.com.tw/">Mozilla Taiwan</a>, 2013 ~ present:<br/>
         . <a href="https://www.oxymoronical.com/blog/2017/08/New-Firefox-and-Toolkit-module-peers-in-Taipei">Firefox and toolkit module peer</a><br/>
         .. development Firefox onboarding experience from v56<br/>
         . Network Monitor(Devtools) module peer<br/>
         .. development Firefox <a href="https://github.com/mozilla/gecko-dev/tree/master/devtools/client/netmonitor">Network Monitor</a> with React and Redux<br/>
         . Firefox OS Settings app peer
         .. development Firefox OS frontend system and apps (GAIA)
           via emerging web technologies.<br/>
         . all works are opensourced <a href="https://github.com/gasolin">on GitHub</a>
         </li>
        <br/>
        <li>Organizer, <a href="http://taipei-gtug.org/">Taipei Google Technology User Group</a>, 2011 ~ present:<br/>
         . Organize the people who are interested in Google's technology
           for discussion, hacking, and learning.<br/>
         . <a href="www.taipei-gtug.org/meetings/meeting2011">Invite talks and hold hackathons for over 50 meetups</a>.
         </li>
        <br/>
        <li>Senior Software Design Engineer, <a href="http://www.delta.com.tw/">Delta Electronics</a>, 2010 ~ 2013<br/>
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
        <br/>
        <li>Software Design Engineer, <a href="http://www.dninetworks.com/">Delta Network(DNI)</a>, 2005~2010:<br/>
        . Made wire and wireless router firmware development from
          backend to frontend (system build/porting, iptable routing,
          user space application, web GUI).<br/>
        . Designed, coded, ported and tested on linux-based home networking
          ODM products for JP and US customers.<br/>
        . Researched and ported emerging network protocols
          (such as IPv6 6to4, Tunnel Broker(OCN), DTCP(Feel6),
          Microsoft LLTD and some private protocols) onto embedded CPE devices.</li>
        <br/>
        <li>Committer, <a href="http://turbogears.org//">TurboGears</a>, 2006~2008:<br/>
        . Designed, developed, and maintain TGCrud,
          a customizable editor/crud interface generator based on Model.<br/>
        . Contribute several TurboGears 1.x plugins,
          such as genshiquickstart(adopted in TurboGears 1.1), tgmigrate.<br/>
        . Help breeding TG2 in its early stage,
          ex. Porting paster commands for TurboGears 2,
          and facilitating the docs migration from wiki to sphinx doc system.<br/>
        </li>
        <li>Intern, YuDong Tech, 2004 Spring</li>
        <li>T. A. (Networking Lab), <a href="www.ee.ndhu.edu.tw">Dept of EE in NDHU</a>, 2003 fall</li>
        <li>T. A. (Computer Programming), <a href="http://www.im.ndhu.edu.tw/">Dept of IM in NDHU</a>, 2003 fall </li>
      </ul>
  </Cell>
  <Cell col={12}>
    <h3>Specialty</h3>
  </Cell>
  <Cell col={6}>
    <h4>1. Tech writing and presentation.</h4>
      <ul>
          <li>Reading: <a href="http://books.gasolin.idv.tw">read 100+ books/year</a> in various domains.</li>
          <li>Writing: <a href="http://android.gasolin.idv.tw/Home/androidentry3">Published an Android book</a>;
              Translated 3 books (1 digital).</li>
          <li>Presentation: Held 2 day course in CHT traning center;
              Had sessions in OSDC.tw over 200 audiences</li>
      </ul>
  </Cell>
  <Cell col={6}>
    <h4>2. Project Management:</h4>
      <ul>
          <li>Contribute and lead several <a href="portforlio#opensource">Open Source projects</a>.</li>
          <li>Organize <a href="http://taipei-gtug.org">Taipei-GTUG</a> meetups and events since 2011.</li>
          <li>Lead a team to develop web-based content platform and Device(specially Android)
              cooperated products.</li>
      </ul>
  </Cell>
  <Cell col={12}>
    <h4>3. Cross Platform integration</h4> which includes:
  </Cell>
  <Cell col={6}>
     <h5>Domain Knowledge</h5>
      <ul>
          <li>Server-Client/Mobile Service architect, design and integration:
              Cooperated to deliver 500M+
              download Android app (aTrackDog) with web service.</li>
          <li>Network Protocols & System Integration: Designed, coded,
              ported and tested on linux-based home networking ODM products for
              JP and US customers.</li>
          <li>Cross Platform design: Designed, coded and tested digital right
              management(OMA-like) system through c and java with Qt,
              Android, and server involved integration.</li>
          <li>User Experience in concern: Make easy to use bootstraping procedures
              for TurboGears and GAEO web frameworks, my published
              mobile apps, books and documents.</li>
          <li>Publish Speaking: Elaborated technical topics (Web framework, Python,
              Android, Mercurial) in public with passion.</li>
          <li>Intellectual Property(IP): trained and submitted IP claim in US/TW</li>
          <li>Organize and Facilitation: Introduced productive tools such as
              version control, tracking system to working groups.</li>
          <li>Open Source: Involved in multiple open source projects and use them
              in daily work. Organize over 50 developer meetups and activities.</li>
      </ul>
  </Cell>
  <Cell col={6}>
      <h5>Web development</h5>
      <ul>
        <li>Web design and programming: Involved in 2 open source web frameworks
            development(TurboGears, GAEO) for bootstraping,
            user experience enhancement, and plugin development.</li>
        <li>Backend: Node.js (express),
            Python (TurboGears, Google App Engine),
            Java (Play! Framework)</li>
        <li>Frontend: HTML, CSS, JavaScript.</li>
      </ul>
  </Cell>
  <Cell col={6}>
      <h5>Mobile development</h5>
      <ul>
          <li>Firefox OS Settings App peer, <a href="https://github.com/mozilla-b2g/gaia/graphs/contributors">top 20 contributor</a> of gaia project</li>
          <li><a href="portfolio#mobile">Android and Firefox OS Mobile Web App design and programming</a></li>
          <li>Android & Mobile Web App Continue Integration (Auto-build, Profiling and Testing)</li>
          <li>Android & FirefoxOS Programing Book Author</li>
      </ul>
  </Cell>
  <Cell col={6}>
    <h5>Programming languages</h5>
      <ul>
       <li>C: Network Protocols on *nix and firmware-update-wizard installer
           on windows(C + MFC + NSIS)</li>
       <li>Java: Web and Android-related development</li>
       <li>Python: Personal daily utility and hosted several python open source
           projects</li>
       <li>Unit testing and Refactoring</li>
      </ul>
  </Cell>
  <Cell col={6}>
      <h5>System administration</h5>
      <ul>
          <li>Mac, Linux (Ubuntu), Windows</li>
          <li>Version Control (git, hg, svn)</li>
          <li>Issue Tracking (Bugzilla, RedMine, Trac)</li>
          <li>Continue Integration (Travis, Jenkins)</li>
      </ul>
  </Cell>
  <Cell col={12}>
      <h3>Honors/Awards</h3>
      <ul>
         <li>Top 5 yearly best seller in books.com.tw language&programming category,
             Android programming entry book 4ed. 2011</li>
         <li>Top 2 in TenLong's Best Tech Book Seller Billboard,
             Android programming entry book 1st~3ed. 2009~2011</li>
         <li>Honorable Mention, introductory the book 'Google App Engine in Practice'
             (Google 應用服務引擎開發實戰 , 上官林傑), 2009</li>
         <li>Honorable Mention, listed as zxing contributor for the pattern of using
             barcode scanner, 2009</li>
         <li>SLAT(Software Liberty Association of Taiwan) voting
             Best Educational Promoter award (自由軟體傑出教育推廣獎),2008</li>
         <li>Entry the final of Communication Application Integration Contest
            (將RFID及P2P整合於家庭網路－實現商品防仿冒和自動取得商品附加價值之服務系統,
            通訊應用整合競賽入選), 2004</li>
         <li>Microsoft sponsor honor of IPv6 Creativity Contest(個人內容分散式網路-利用 IPv6 特性的
             P2P 節點搜尋機制與應用, IPv6 創意競賽 Microsoft 企業贊助獎), 2003</li>
         <li>Honorable Mention, Champion of Eagle Cup 2001 (soccer) (老鷹盃公開組11人制足球賽, 冠軍), 2001</li>
      </ul>
  </Cell>
  <Cell col={12}>
    <h3>Interests</h3>
    <ul>
      <li>Reading</li>
      <li>Web and Mobile development</li>
      <li>Soccer</li>
      <li>Chinese medicine and astrology</li>
      </ul>
  </Cell>
</Grid>);
export default Resume;
