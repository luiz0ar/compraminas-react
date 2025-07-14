import React from 'react';
import styles from './ContactInfo.module.css';
import InfoCard from '../InfoCard/InfoCard.jsx';

// Ícones para os cards
import { FaMapMarkerAlt, FaHeadset, FaEnvelope } from 'react-icons/fa';

function ContactInfo() {
  return (
    <section className={styles.contactSection}>
      <div className={styles.container}>
        <div className={styles.infoGrid}>
          <InfoCard icon={<FaMapMarkerAlt />} title="Localização">
            <p> <a href="https://maps.app.goo.gl/hFiaiBZf5DBxCKh38" >Complexo Minasul, Av. Ciarita,<br/>Nº 1, Industrial, Varginha - MG </a></p>
          </InfoCard>

          <InfoCard icon={<FaHeadset />} title="Telefones">
            <p>Fixo: <a href="tel:+553532193001">(35) 3219-3001</a></p>
            <p>Celular: <a href="tel:+5535991276006">(35) 99127-6006</a></p>
          </InfoCard>

          <InfoCard icon={<FaEnvelope />} title="E-mail">
            <p><a href="mailto:vendas@minasul.com.br">vendas@minasul.com.br</a></p>
            <p><a href="mailto:comunicacao@minasul.com.br">comunicacao@minasul.com.br</a></p>
          </InfoCard>
        </div>

        {/* Título do Formulário */}
        <div className={styles.formTitleWrapper}>
          <p>PARA MAIS INFORMAÇÕES</p>
          <h2>PREENCHA OS CAMPOS ABAIXO</h2>
        </div>
      </div>
    </section>
  );
}

export default ContactInfo;
