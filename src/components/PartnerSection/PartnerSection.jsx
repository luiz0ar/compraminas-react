import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './PartnersSection.module.css';
import PartnerCard from '../PartnerCard/PartnerCard.jsx';
import api from '../../api/api';

function PartnersSection() {
  const [partners, setPartners] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchPartners() {
      try {
        const response = await api.get('/exhibitors');
        const firstThreePartners = response.data.slice(0, 3);
        setPartners(firstThreePartners);
      } catch (error) {
        console.error("Erro ao buscar parceiros:", error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchPartners();
  }, []);

  return (
    <section className={styles.partnersSection}>
      <div className={styles.container}>
        <div className={styles.titleWrapper}>
          <p>CONHEÇA NOSSOS</p>
          <h2>PARCEIROS</h2>
        </div>
        <div className={styles.partnersGrid}>
          {isLoading ? (
            <p>Carregando parceiros...</p>
          ) : (
            partners.map(partner => (
              <PartnerCard
                key={partner.id}
                exhibitor={partner}
              />
            ))
          )}
        </div>
        <div className={styles.buttonWrapper}>
          <Link to="/exhibitors" className={styles.mainButton}>
            VEJA TODOS OS EXPOSITORES →
          </Link>
        </div>
      </div>
    </section>
  );
}

export default PartnersSection;
