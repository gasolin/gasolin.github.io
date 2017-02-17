import React from 'react';
import presentsSection from './presentsSection';
import data from './presents-data';

function Present() {
  return (
  <div>
      <div className="row">
        <div className="col-md-12">
          <h2>Lectures/Presentations</h2>
        </div>
      </div>
      <div className="row">
      {presentsSection(data)}
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
