import React from 'react';
import styles from './PageBanner.module.css';
import { Link } from 'react-router-dom';

function PageBanner({ title, breadcrumb }) {
  return (
    <section className={styles.banner}>
      <div className={styles.container}>
        <h1 className={styles.title}>{title}</h1>
        <div className={styles.breadcrumb}>
          <Link to="/">INÍCIO</Link>
          <span>&gt;</span>
          <p>{breadcrumb}</p>
        </div>
      </div>
    </section>
  );
}

export default PageBanner;
