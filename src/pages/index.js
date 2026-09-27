import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import MetroGrid from '../components/MetroGrid';
import styles from './index.module.css';

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Web3 Engineer and Tech writer portfolio">
      <main className={styles.landingMain}>
        <div className={styles.ambientGlowTop} aria-hidden="true" />
        <div className={styles.ambientGlowBottom} aria-hidden="true" />
        <MetroGrid />
      </main>
    </Layout>
  );
}
