import React, { useState, useEffect } from 'react';
import styles from './LocationSection.module.css';
import api from '../../api/api';

function LocationSection() {
  const [mapUrl, setMapUrl] = useState('');

  useEffect(() => {
    api.get('/press-content')
      .then(response => {
        if (response.data && response.data.mapsUrl) {
          setMapUrl(response.data.mapsUrl);
        }
      })
      .catch(error => console.error("Erro ao buscar URL do mapa:", error));
  }, []);

  if (!mapUrl) {
    return <section className={styles.locationSection}><p>Carregando mapa...</p></section>;
  }

  return (
    <section className={styles.locationSection}>
      <div className={styles.container}>
        <div className={styles.titleWrapper}>
          <h2>LOCAL</h2>
        </div>
        <div className={styles.mapWrapper}>
          <iframe
            src={mapUrl}
            className={styles.mapFrame}
            allowFullScreen
            loading="lazy"
            title="Mapa da localização da Minasul"
            referrerPolicy="no-referrer-when-downgrade">
          </iframe>
        </div>
      </div>
    </section>
  );
}

export default LocationSection;
