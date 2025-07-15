import React from 'react';
import styles from './PartnerCard.module.css';
import api from '../../api/api';
import { FaPhoneAlt, FaGlobe, FaPlusCircle } from 'react-icons/fa';
import placeholderLogo from '../../assets/logo-Placeholder.jpg';

function PartnerCard({ exhibitor }) {
  if (!exhibitor) {
    return null;
  }

  const logoSrc = exhibitor.logoUrl
    ? `${api.defaults.baseURL}${exhibitor.logoUrl}`
    : placeholderLogo;

  return (
    <div className={styles.card}>
      <div className={styles.logoWrapper}>
        <img src={logoSrc} alt={`Logo ${exhibitor.name}`} className={styles.logo} />
      </div>
      <div className={styles.infoWrapper}>
        <h3 className={styles.partnerName}>{exhibitor.name}</h3>
        <ul className={styles.detailsList}>
          {exhibitor.contact && (
            <li>
              <FaPhoneAlt />
              <span>Telefone: {exhibitor.contact}</span>
            </li>
          )}
          {exhibitor.websiteUrl && (
            <li>
              <FaGlobe />
              <a href={exhibitor.websiteUrl} target="_blank" rel="noopener noreferrer">
                {exhibitor.websiteUrl.replace(/^(https?:\/\/)?(www\.)?/, '')}
              </a>
            </li>
          )}
        </ul>
        {exhibitor.websiteUrl &&
          <a href={exhibitor.websiteUrl} className={styles.moreInfoLink}>
            <FaPlusCircle />
            <span>Mais informações</span>
          </a>
        }
      </div>
    </div>
  );
}

export default PartnerCard;
