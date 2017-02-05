import React from 'react';

const data = [
  {
    year: 2016,
    presents: [
      {
        title: '聊天機器人，不加咖啡',
        date: '2016/8/21',
        place: 'Coscup',
        link: 'http://blog.gasolin.idv.tw/2016/08/blog-post.html',
        time: '20min',
      },
      {
        title: '好孩子的第一次挑戰 WebVR 就快快樂樂上手',
        date: '2016/5/19',
        place: 'workshop at MozTw',
        link: 'http://moztw.kktix.cc/events/91d7bca0',
        time: '30min',
      },
    ],
  },
  {
    year: 2015,
    presents: [
      {
        title: 'Javascript,征服世界是可能的嗎？ (Javascript, world domanation)',
        date: '2015/5/19',
        place: 'Modern Web',
        link: 'http://www.slideshare.net/gasolin/javascript-48212668',
        time: '30min',
      },
    ],
  },
];

function presentsList(presents) {
  return presents.map(item => (
    <li><a href="{item.link}">{item.title}</a> ({item.time}), {item.place} {item.date}</li>
  ));
}

function presentsSection() {
  return data.map(yearly => (
    <div className="col-md-6">
      <h3 id="{yearly.year}">{yearly.year}</h3>
      <ul>
        {presentsList(yearly.presents)}
      </ul>
    </div>
  ));
}

function Present() {
  return (
  <div>
      <div className="row">
        <div className="col-md-12">
          <h2>Lectures/Presentations</h2>
        </div>
      </div>
      <div className="row">
      {presentsSection()}
      <div className="col-md-6">
        <h3 id="2014">2014</h3>
        <ul>
          <li><a href="http://www.slideshare.net/gasolin/firefox-os-how-large-open-source-project-works">Firefox OS - How Large Open Source Project works</a> (30min), COSCUP 14, 2014/7/19</li>
          <li>All about Web Component, GDG Taipei, 2014/5/7</li>
        </ul>
      </div>
      <div className="col-md-6">
        <h3 id="2013">2013</h3>
        <ul>
          <li><a href="http://www.slideshare.net/gasolin/chrome-apps-and-firefox-webapp">Capable Web: Chrome Apps & Firefox WebApp</a>, GDG Taipei, 2013/12/18</li>
          <li><a href="http://www.slideshare.net/gasolin/develop-firefox-os1-28348187">Developing FirefoxOS(2hr)</a>, NCTU CSIE, 2013/11/13</li>
          <li>FirefoxOS Overview & Contribution(3hr), NCU CSIE, 2013/10/28</li>
          <li><a href="http://www.slideshare.net/gasolin/steps-to-contribute-to-firefox-os-2">Steps to contribute to firefox os (gaia)</a> (30min), COSCUP, 2013/7/27</li>
          <li><a href="http://registrano.com/events/coscup-2013-hands-on-gasolin">Hands on offline web app (3hr)</a>, COSCUP lecture, 2013/7/20</li>
          <li><a href="http://www.slideshare.net/gasolin/make-web-as-webapp">Make web as webapp (1hr)</a>, GTUG Taipei, 2013/5/8</li>
          <li><a href="http://www.slideshare.net/gasolin/firefox-os-overview-17792569">FirefoxOS Overview (3hr)</a>, NCKU CSIE, 2013/3/27</li>
        </ul>
      </div>
      <div className="col-md-6">
        <h3 id="2012">2012</h3>
        <ul>
          <li><a href="http://www.youtube.com/watch?v=hlu_TeBRpQA">Youtube for developers (30min)</a>, GTUG Taipei, 2012/10/25</li>
          <li><a href="http://www.youtube.com/watch?v=HEW39KXn0a4">Does everybody can program? (25min)</a>, Coscup, 2012/8/19</li>
          <li><a href="http://www.youtube.com/watch?v=Xd2KiDunRxc">Developer can make beautiful web - Introduction of JQuery Mobile/Twitter Bootstrap (1hr)</a>, GTUG Taipei, 2012/6/6</li>
          <li><a href="http://www.youtube.com/watch?v=KnPKLuz6qpQ">Android UI Design Guide & Tips</a> (30min), Taipei GTUG, 2012/2/15</li>
        </ul>
      </div>
      <div className="col-md-6">
        <h3 id="2011">2011</h3>
        <ul>
          <li><a href="http://www.youtube.com/watch?v=pQqs-8kyq88">zhpy lightening talk</a>, 2011/12/3</li>
          <li>gFolder demo, (5min), Taipei Android Developer Lab, 2011/12/2</li>
          <li><a href="http://www.youtube.com/watch?v=PoKxf1xCDn0&feature=feedu">Android Icecream Sandwich(ICS) sharing</a> (30min), Taipei GTUG, 2011/11/9</li>
          <li><a href="http://www.youtube.com/watch?v=vVwGuXuma-k">Android Continue Integration with Jenkins</a> (25min), Coscup, 2011/8/20</li>
          <li><a href="http://www.youtube.com/watch?v=Ujd_wJBAd1k&feature=channel_video_title">Introduction of AppInventor</a> (30min), Taipei GTUG, 2011/8/17</li>
          <li><a href="http://www.youtube.com/watch?v=Z0EYjejXcnY&feature=channel_video_title">Play framework on Google App Engine</a> (1hr), Taipei GTUG, 2011/7/20</li>
          <li><a href="http://www.youtube.com/watch?v=fYgmsBjLnfE&feature=channel_video_title">Share 3 Google I/O admob & analytics related speech</a> (1hr), Taipei GTUG, 2011/7/6</li>
          <li>Google I/O Recap of Android (30min), Engadget, 2011/5/28</li>
          <li>Beyond Android, (3hr), III, 2011/5/24</li>
          <li>Aside for Google I/O Extended Keynote (1hr), Taipei GTUG, 2011/5/11</li>
          <li><a href="http://www.youtube.com/watch?v=1wRlJ5KTAwE&feature=channel_video_title">Aside for Google Movie Day</a> (1hr), Taipei GTUG, 2011/3/30</li>
        </ul>
      </div>
      <div className="col-md-6">
        <h3 id="2010">2010</h3>
        <ul>
          <li>Introduction of Google App Engine (1hr), Taipei GTUG, 2010/12/7</li>
          <li><a href="http://www.slideshare.net/gasolin/introduction-of-distributed-version-control-system">Introduction of Mercurial, the Distributed Version Control System (1hr)</a>, TWJUG, 2010/12/4</li>
          <li>Android Programming(Android 應用程式設計, 12hr),
              Chong-Hwa Telecom Training Center, 2010/3/13~3/14</li>
          <li>Introduction of GoogleCode and Mercurial (1hr), Taipei GTUG, 2010/02/03</li>
        </ul>
      </div>
      <div className="col-md-6">
        <h3 id="2009">2009</h3>
        <ul>
          <li>Navigation of Chrome OS (Chrome OS 導讀, 20 min), Taipei GTUG, 2009/11/25</li>
          <li><a href="http://www.openfoundry.org/workshop/details/61-kalug--android-">Introduction of Android Application development</a>(KaLug! Android 應用程式設計入門, 6 hr, OSSF in Kaushung, 2009/11/22</li>
          <li><a href="http://www.youtube.com/watch?v=rq4VyXntpBI">Introduction of Android Scripting Environment (Android Scripting Environment 簡介, 30 min)</a>, Coscup 09, 2009/8/16</li>
          <li>The basis of Android application development(Android 應用程式開發基礎, 3 hr),
              Dept of IM in Nanya Institude of Technology(南亞資管系), 2009/5/21</li>
          <li>The difference of Android Programming (comparing with other OS)
              (Android 應用程式設計大不同, 2 hr), Tossug 2009/4/7</li>
        </ul>
      </div>
      <div className="col-md-6">
        <h3 id="2008">2008</h3>
        <ul>
          <li>GAEO+Facebook Plugin (15 min), Happy Designer 4 2008/11/15</li>
          <li>GAEO+Facebook (15 min), Tossug 2008/11/4</li>
          <li><a href="http://www.slideshare.net/gasolin/python-zhpy">Programming by Python and ZHPY for dummies (英文不太好, 也能第一次學程式語言就上手 -- 使用 Python 與周蟒, 2 hr)</a>, Tossug 2008/1/8</li>
          <li><a href="http://www.slideshare.net/gasolin/python-24815415">Howto Maintain and Share an Python Project -- Take ZHPY for example (維護和分享 python 程式專案 -- 以周蟒中文 python 語言為例, 30 min)</a>, OSDC.tw 2008 4/12</li>
        </ul>
      </div>
      <div className="col-md-6">
        <h3 id="2007">2007</h3>
        <ul>
          <li>Introduction of ZHPY (周蟒簡介, 5 min), Lightening talk on Coscup 07 2007/11/3</li>
          <li>Test-Driven Python for dummies (Test-Driven Python 懶人包, 30 min), OSDC.tw 07</li>
          <li>Introduction of TurboGears Web Mega-Framework (TurboGears 入門, 2 hr),
              Tossug, 2007/5/22</li>
        </ul>
      </div>
      </div>
  </div>
  );
}

export default Present;
