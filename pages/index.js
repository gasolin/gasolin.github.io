import React from 'react';
import Meta from '../components/meta';
import Header from '../components/header';
import Main from '../components/main';
import Footer from '../components/footer';
import Toolbar from '../components/toolbar';
import Link from 'next/link';

export default () => (
  <div>
    <Meta>
      <title>Home</title>
    </Meta>
    <Header>
      <Toolbar/>
    </Header>
    <Main>
      <table width="400">
        <tbody>
        <tr>
          <td>
            <Link href="/personal/resume"><a><img src="/static/images/resume2.png" alt="Resume (履歷)"/></a></Link>
          </td>
          <td>
            <a href="https://profiles.google.com/gasolin/about"><img src="/static/images/gprofile.png" alt="Profile"/></a>
          </td>
          <td>
            <a href="http://blog.gasolin.idv.tw"><img src="/static/images/blog2.png" alt="Blog"/></a>
          </td>
          <td>
            <a href="http://www.gasolin.idv.tw"><img src="/static/images/gasolin_qrcode.png" alt="web url of http://www.gasolin.idv.tw"/></a>
          </td>
        </tr>
        <tr>
          <td><font size="small">Resume<br/>(履歷)</font>
          </td>
          <td><font size="small">google+<br/>(公開資訊)</font>
          </td>
          <td><font size="small">Blog<br/>(部落格)</font>
          </td>
          <td><font size="small">QR Code</font>
          </td>
        </tr>
        </tbody>
      </table>
      <Footer/>
    </Main>
  </div>
)
