import React from 'react';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <div className={styles.imageContainer}>
          <img src="./img/jyoti_singh_circular.png" alt="your image" className={styles.image} />
        </div>
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}
        </p>
        <div className="email-icon">
  <div className="flap flap-top"></div>
  
  <svg width="50" height="50" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
  <rect x="5" y="5" width="40" height="40" fill="#ddd"/>
  <rect x="10" y="10" width="30" height="30" fill="#fff"/>
  <rect x="10" y="17.5" width="30" height="15" fill="#ddd"/>
  <path d="M16 25H34L25 15L16 25Z" fill="#444"/>
</svg>



  <div className="flap flap-bottom"></div>
</div>

        <div className={styles.buttons}>
          <a href="https://linkedin.com/your-profile" target="_blank" rel="noopener noreferrer">
            <img src="./img/linkedin.gif" alt="LinkedIn Icon" className={styles.icon} />
          </a>
          <a href="mailto:your-email@example.com">
            <img src="./img/mail.gif" alt="Email Icon" className={styles.icon} />
          </a>
          <a href="https://facebook.com/your-profile" target="_blank" rel="noopener noreferrer">
            <img src="./img/facebook.gif" alt="Facebook Icon" className={styles.icon} />
          </a>
          <a href="https://twitter.com/your-profile" target="_blank" rel="noopener noreferrer">
            <img src="./img/twitter.gif" alt="Twitter Icon" className={styles.icon} />
          </a>
        </div>

      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
