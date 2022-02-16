import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from '../index.module.css';

function LookupHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">DNS Lookup</h1>
        <p className="hero__subtitle">You can look up your DNS Records here. Click on the Button Below to Lookup!</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            href="https://digwebinterface.com">
            Lookup Your DNS Records!
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function DNSLookup() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`DNS Lookup`}
      description="You can look up your DNS Records here. This service is powered by DigWebInterface.com">
      <LookupHeader />
      <main>
      </main>
    </Layout>
  );
}