import React from 'react';
import styles from './HeroSection.module.css';

function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.infoColumn}>
          <h1>COMPRA MINAS: compra certa, resultado garantido!</h1>
          <div className={styles.details}>
            <p>De 12 a 14 de Março, das 7h às 18h, no Complexo Operacional Minasul!</p>
          </div>
          <a href="https://www.instagram.com/minasulcooperativa/" target="_blank" rel="noopener noreferrer" className={styles.instagramCta}>
            CLIQUE AQUI E ACOMPANHE AS NOVIDADES EM NOSSO INSTAGRAM
          </a>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
