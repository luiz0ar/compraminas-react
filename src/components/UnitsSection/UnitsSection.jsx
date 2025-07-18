import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './UnitsSection.module.css';
import api from '../../api/api';

function UnitsSection() {
  const [unities, setUnities] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    async function fetchUnities() {
      try {
        const response = await api.get('/unities');
        setUnities(response.data);
      } catch (error) {
        console.error("Erro ao buscar unidades:", error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchUnities();
  }, []);

  return (
    <section className={styles.unitsSection}>
      <div className={styles.container}>
        <div className={styles.titleWrapper}>
          <h2>UNIDADES</h2>
        </div>
        <div className={styles.listWrapper}>
          <ul className={styles.unitsList}>
            {isLoading ? (
              <p>Carregando unidades...</p>
            ) : (
              unities.map(unit => (
                <li key={unit.id} className={styles.unitItem}>
                  <span className={styles.unitName}>{unit.name}</span>
                  <Link to={unit.unityUrl || '#'} className={styles.moreInfoButton}>
                    Mais informações
                  </Link>
                </li>
              ))
            )}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default UnitsSection;
