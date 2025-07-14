import React from 'react';
import styles from './LocationSection.module.css';

function LocationSection() {
  return (
    <section className={styles.locationSection}>
      <div className={styles.container}>
        <div className={styles.titleWrapper}>
          <h2>LOCAL</h2>
        </div>
        <div className={styles.mapWrapper}>
         <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4434.756974360143!2d-45.44841312403223!3d-21.581102580210054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ca9269aaaaaaab%3A0x698b1eed06b27907!2sMINASUL!5e1!3m2!1spt-BR!2sbr!4v1752506858634!5m2!1spt-BR!2sbr" 
         className={styles.mapFrame}
         allowfullscreen
         loading="lazy" 
         title="Mapa da localização da Minasul"
         referrerpolicy="no-referrer-when-downgrade">
         </iframe>
        </div>
      </div>
    </section>
  );
}

export default LocationSection;
