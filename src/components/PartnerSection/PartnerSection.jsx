import React from 'react';
import { Link } from 'react-router-dom';
import styles from './PartnersSection.module.css';
import PartnerCard from '../PartnerCard/PartnerCard.jsx';
import logoMahindra from '../../assets/partners/MahindraRise.png';
// import logoMinasul from '../../assets/partners/minasul.png';
// import logoPerfetto from '../../assets/partners/perfetto.png';

const mockPartners = [
  { id: 1, name: 'Mahindra Tratores', logo: logoMahindra, phone: '(35) 3229-3030', website: 'http://mahindratratores.com.br', moreInfoLink: '#' },
  { id: 2, name: 'Minasul SustentAgro', phone: '(35) 3262-6700', website: 'http://minasul.com.br', moreInfoLink: '#' },
  { id: 3, name: 'Perfetto Grano', phone: '(35) 3219-3001', website: 'http://perfettoparticipacoes.com.br', moreInfoLink: '#' },

];

function PartnersSection() {
  return (
    <section className={styles.partnersSection}>
      <div className={styles.container}>
        <div className={styles.titleWrapper}>
          <p>CONHEÇA NOSSOS</p>
          <h2>PARCEIROS</h2>
        </div>

        <div className={styles.partnersGrid}>
          {mockPartners.map(partner => (
            <PartnerCard
              key={partner.id}
              logo={partner.logo}
              name={partner.name}
              phone={partner.phone}
              website={partner.website}
              moreInfoLink={partner.moreInfoLink}
            />
          ))}
        </div>

        <div className={styles.buttonWrapper}>
          <Link to="/expositores" className={styles.mainButton}>
            VEJA TODOS OS EXPOSITORES →
          </Link>
        </div>
      </div>
    </section>
  );
}

export default PartnersSection;
