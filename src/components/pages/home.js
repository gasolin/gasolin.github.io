import React from 'react';

function Home() {
  return (
    <table width="400">
      <tbody>
      <tr>
        <td>
          <a href="/personal/resume"><img src="/static/images/resume2.png" alt="Resume (履歷)"/></a>
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
  );
}

export default Home;
