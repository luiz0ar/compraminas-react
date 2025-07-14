import React from 'react';
import styles from './InfoCard.module.css';

function InfoCard({ icon, title, children }) {
  return (
    <div className={styles.card}>
      <div className={styles.iconWrapper}>
        {icon}
      </div>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.content}>
        {children}
      </div>
    </div>
  );
}

export default InfoCard;
