import React from 'react';
import Head from 'next/head'

function Meta(props) {
  return (
    <Head>
      <meta charSet="UTF-8"/>
      <meta name="description" content="Fred Lin(gasolin) is a technique writer and software engineer. This is his personal homepage."/>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <meta httpEquiv="x-ua-compatible" content="ie=edge"/>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/css/bootstrap.min.css"/>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-material-design/0.5.10/css/bootstrap-material-design.min.css"/>
      <link rel="stylesheet" href="/static/styles/pushmenu.css"/>
      <link rel="stylesheet" href="/static/styles/main.css"/>
      <script defer src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
      <script defer src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/js/bootstrap.min.js"></script>
      <script defer src="/static/js/pushmenu.js"></script>
      <script defer src="/static/js/ga.js"></script>
      {props.children}
    </Head>
  );
}

export default Meta;
