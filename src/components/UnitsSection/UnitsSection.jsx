import React from 'react';
import { Link } from 'react-router-dom';
import styles from './UnitsSection.module.css';

// Importando os dados das unidades
import { unitsData } from '../../api/mock';

function UnitsSection() {
  return (
    <section className={styles.unitsSection}>
      <div className={styles.container}>
        <div className={styles.titleWrapper}>
          <h2>UNIDADES</h2>
        </div>
        <div className={styles.listWrapper}>
          <ul className={styles.unitsList}>
            {unitsData.map(unit => (
              <li key={unit.id} className={styles.unitItem}>
                <span className={styles.unitName}>{unit.name}</span>
                <Link to={unit.link} className={styles.moreInfoButton}>
                  Mais informações
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default UnitsSection;