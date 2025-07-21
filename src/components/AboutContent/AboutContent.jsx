import React, { useState, useEffect } from 'react';
import styles from './AboutContent.module.css';
import aboutMainImage from '../../assets/Conceito-1920x1080-1.png';
import api from '../../api/api';

function AboutContent() {
  const [pageData, setPageData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await api.get('/about-page');
        setPageData(response.data);
      } catch (error) {
        console.error("Erro ao buscar conteúdo da página Sobre:", error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
  }, []);

  if (isLoading || !pageData) {
    return (
      <section className={styles.aboutContent}>
        <div className={styles.container}>
          <p>Carregando conteúdo...</p>
        </div>
      </section>
    );
  }

  return (
    <section className={styles.aboutContent}>
      <div className={styles.container}>
        <div className={styles.textColumn}>
          <div className={styles.imageWrapper}>
            <img src={aboutMainImage} alt="Visão geral do evento Compra Minas" />
          </div>
          <p className={styles.mainContent}>{pageData.content}</p>
          <h4>Serviço</h4>
          <p className={styles.serviceInfo}>{pageData.informations}</p>
        </div>
      </div>
    </section>
  );
}

export default AboutContent;
