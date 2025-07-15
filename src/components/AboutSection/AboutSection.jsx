import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './AboutSection.module.css';
import { IoIosArrowForward } from "react-icons/io";
import aboutImage from '../../assets/07a.-Banner-Carrossel-Compra-Minas-Minasul.png';
import api from '../../api/api';

function AboutSection() {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await api.get('/about-section');
        setData(response.data);
      } catch (error) {
        console.error('Erro ao buscar dados da seção Sobre:', error);
      }
    }
    fetchData();
  }, []);
  if (!data) {
    return <p className={styles.error}>Não foi possível carregar os dados da seção.</p>;
  }

  return (
    <section className={styles.aboutSection}>
      <div className={styles.container}>
        <div className={styles.titleWrapper}>
          <h2>SOBRE O COMPRA MINAS</h2>
        </div>

        <div className={styles.contentGrid}>
          <div className={styles.textColumn}>
            {data.content.split('\n\n').map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
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
