import React, { useState, useEffect } from 'react';
import styles from './ContactInfo.module.css';
import InfoCard from '../InfoCard/InfoCard.jsx';
import api from '../../api/api';

import { FaMapMarkerAlt, FaHeadset, FaEnvelope } from 'react-icons/fa';

function ContactInfo() {
  const [contactInfo, setContactInfo] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await api.get('/contact');
        setContactInfo(response.data);
      } catch (error) {
        console.error("Erro ao buscar informações de contato:", error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
  }, []);

  if (isLoading) {
    return (
      <section className={styles.contactSection}>
        <div className={styles.container}>
          <p>Carregando informações de contato...</p>
        </div>
      </section>
    );
  }

  if (!contactInfo) {
    return null;
  }

  const emails = contactInfo.email ? contactInfo.email.split(';').map(e => e.trim()) : [];

  return (
    <section className={styles.contactSection}>
      <div className={styles.container}>
        <div className={styles.infoGrid}>
          <InfoCard icon={<FaMapMarkerAlt />} title="Localização">
            <p><a href={contactInfo.locationUrl} target="_blank" rel="noopener noreferrer">{contactInfo.location}</a></p>
          </InfoCard>
          <InfoCard icon={<FaHeadset />} title="Telefones">
            {contactInfo.fixNumber && <p>Fixo: <a href={`tel:${contactInfo.fixNumber.replace(/\D/g,'')}`}>{contactInfo.fixNumber}</a></p>}
            {contactInfo.phoneNumber && <p>Celular: <a href={`tel:${contactInfo.phoneNumber.replace(/\D/g,'')}`}>{contactInfo.phoneNumber}</a></p>}
          </InfoCard>
          <InfoCard icon={<FaEnvelope />} title="E-mail">
            {emails.map((email, index) => (
              <p key={index}><a href={`mailto:${email}`}>{email}</a></p>
            ))}
          </InfoCard>

        </div>

        <div className={styles.formTitleWrapper}>
          <p>PARA MAIS INFORMAÇÕES</p>
          <h2>PREENCHA OS CAMPOS ABAIXO</h2>
        </div>
      </div>
    </section>
  );
}

export default ContactInfo;
