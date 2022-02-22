import React from 'react';
import Layout from '@theme/Layout';

const Resume = () => {
  return (
    <Layout title="Resume">
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '50vh',
          fontSize: '20px',
        }}>
          <main>
            <p>
              Edit <code>pages/helloReact.js</code> and save to reload.
            </p>
          </main>
      </div>
    </Layout>
  )
}

export default Resume;
