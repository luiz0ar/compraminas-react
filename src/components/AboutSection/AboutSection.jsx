import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './AboutSection.module.css';
import { IoIosArrowForward } from "react-icons/io";
import aboutImage from '../../assets/07a.-Banner-Carrossel-Compra-Minas-Minasul.png';
import api from '../../api/api';

function AboutSection() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await api.get('/about-section');
        setData(response.data);
      } catch (error) {
        console.error('Erro ao buscar dados da seção Sobre:', error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
  }, []);

  if (isLoading) {
    return <section className={styles.aboutSection}><p>Carregando...</p></section>;
  }

  if (!data) return null;

  return (
    <section className={styles.aboutSection}>
      <div className={styles.container}>
        <div className={styles.titleWrapper}>
          <h2>SOBRE O COMPRA MINAS</h2>
        </div>

        <div className={styles.contentGrid}>
          <div className={styles.textColumn}>
            <p className={styles.contentText}>{data.content}</p>
          </div>
          <div className={styles.imageColumn}>
            <img src={aboutImage} alt="Aminasul e Compra Minas" />
          </div>
        </div>

        <div className={styles.buttonWrapper}>
          <Link to="/about" className={styles.primaryButton}>
            {data.buttonPrimaryText}
          </Link>
          <Link to="/exhibitors" className={styles.secondaryButton}>
            {data.buttonSecondaryText}
            <IoIosArrowForward />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
