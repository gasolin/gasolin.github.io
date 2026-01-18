import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import MetroGrid from '../components/MetroGrid';

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Web3 Engineer and Tech writer portfolio">
      <main style={{ minHeight: 'calc(100vh - 120px)', background: 'var(--ifm-background-color)' }}>
        <MetroGrid />
      </main>
    </Layout>
  );
}
