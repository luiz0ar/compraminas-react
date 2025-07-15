import React from 'react';
import styles from './PartnerCard.module.css';
import { FaGlobe, FaPhone } from 'react-icons/fa';
import api from '../../api/api';
const API_URL = api.defaults.baseURL;

function PartnerCard({ exhibitor }) {
  const logoSrc = exhibitor.logoUrl ? `${API_URL}${exhibitor.logoUrl}` : '/placeholder-logo.png';

  return (
    <div className={styles.card}>
      <div className={styles.logoContainer}>
        <img src={logoSrc} alt={`Logo de ${exhibitor.name}`} className={styles.logo} />
      </div>
      <div className={styles.cardContent}>
        <h3 className={styles.name}>{exhibitor.name}</h3>
        <div className={styles.infoItem}>
          <FaPhone />
          <span>{exhibitor.contact}</span>
        </div>
        {exhibitor.websiteUrl && (
          <div className={styles.infoItem}>
            <FaGlobe />
            <a href={exhibitor.websiteUrl} target="_blank" rel="noopener noreferrer">
              Visitar site
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

export default PartnerCard;
