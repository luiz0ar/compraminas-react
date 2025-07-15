import React, { useState, useEffect } from 'react';
import styles from './Exhibitors.module.css';
import PageBanner from '../../components/PageBanner/PageBanner.jsx';
import PartnerCard from '../../components/PartnerCard/PartnerCard.jsx';
import api from '../../api/api'; // Usando o serviço da API

function ExhibitorsPage() {
  // 1. Estados para guardar os expositores e controlar o carregamento
  const [exhibitors, setExhibitors] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // 2. Busca os dados da API quando a página é montada
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
  }, []); // O array vazio garante que a busca só acontece uma vez

  return (
    <>
      <PageBanner title="Expositores" breadcrumb="EXPOSITORES" />
      <main className={styles.exhibitorsList}>
        <div className={styles.container}>
          {/* 3. Lógica de renderização: ou mostra "Carregando" ou os cards */}
          {isLoading ? (
            <p>Carregando expositores...</p>
          ) : (
            <div className={styles.grid}>
              {exhibitors.map(exhibitor => (
                <PartnerCard
                  key={exhibitor.id}
                  exhibitor={exhibitor} // Passa o objeto inteiro para o card
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
