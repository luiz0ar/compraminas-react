import React, { useState, useEffect } from 'react';
import styles from './Exhibitors.module.css';
import PageBanner from '../../components/PageBanner/PageBanner.jsx';
import PartnerCard from '../../components/PartnerCard/PartnerCard.jsx';
import api from '../../api/api';

function ExhibitorsPage() {
  const [exhibitors, setExhibitors] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await api.get('/exhibitors');
        setExhibitors(response.data);
      } catch (error) {
        console.error("Erro ao buscar expositores:", error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
  }, []);
  return (
    <>
      <PageBanner title="Expositores" breadcrumb="EXPOSITORES" />
      <main className={styles.exhibitorsList}>
        <div className={styles.container}>
          {isLoading ? (
            <p>Carregando expositores...</p>
          ) : (
            <div className={styles.grid}>
              {exhibitors.map(exhibitor => (
                <PartnerCard
                  key={exhibitor.id}
                  exhibitor={exhibitor}
                />
              ))}
            </div>
          )}
        </div>
      </main>
    </>
  );
}

export default ExhibitorsPage;
