import React from 'react';
import styles from './PartnerCard.module.css';

import { FaPhoneAlt, FaGlobe, FaPlusCircle } from 'react-icons/fa';
function PartnerCard({ logo, name, phone, website, moreInfoLink }) {
  return (
    <div className={styles.card}>
      <div className={styles.logoWrapper}>
        <img src={logo} alt={`Logo ${name}`} className={styles.logo} />
      </div>
      <div className={styles.infoWrapper}>
        <h3 className={styles.partnerName}>{name}</h3>
        <ul className={styles.detailsList}>
          {phone && (
            <li>
              <FaPhoneAlt />
              <span>Telefone: {phone}</span>
            </li>
          )}
          {website && (
            <li>
              <FaGlobe />
              <a href={website} target="_blank" rel="noopener noreferrer">
                {website.replace(/^(https?:\/\/)?(www\.)?/, '')}
              </a>
            </li>
          )}
        </ul>
        <a href={moreInfoLink} className={styles.moreInfoLink}>
          <FaPlusCircle />
          <span>Mais informações</span>
        </a>
      </div>
    </div>
  );
}

export default PartnerCard;
