import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Resume',
    Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Web3 engineer and open source contributor. As mobile app team lead in crypto industry from 2019.
        <div className={styles.callForAction}>
          <Link
            className="button button--secondary button--lg"
            to="/resume">
            Resume
          </Link>
        </div>
      </>
    ),
  },
  {
    title: 'Projects',
    Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Publication, Projects and Apps.
        <div className={styles.callForAction}>
          <Link
            className="button button--secondary button--lg"
            to="/portfolio">
            Projects
          </Link>
        </div>
      </>
    ),
  },
  {
    title: 'Presentations',
    Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Lectures, Hackthon, and Presentations.
        <div className={styles.callForAction}>
          <Link
            className="button button--secondary button--lg"
            to="/present">
            Presentations
          </Link>
        </div>
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
