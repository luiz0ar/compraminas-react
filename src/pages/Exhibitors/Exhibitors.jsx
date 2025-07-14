import React from 'react';
import styles from './Exhibitors.module.css';
import PageBanner from '../../components/PageBanner/PageBanner.jsx';
import PartnerCard from '../../components/PartnerCard/PartnerCard.jsx';
import { partnersData } from '../../api/mock.js';

function ExhibitorsPage() {
  return (
    <>
      <PageBanner title="Expositores" breadcrumb="EXPOSITORES" />
      <main className={styles.exhibitorsList}>
        <div className={styles.container}>
          <div className={styles.grid}>
            {partnersData.map(partner => (
              <PartnerCard
                key={partner.id}
                logo={partner.logo}
                name={partner.name}
                phone={partner.phone}
                website={partner.website}
                moreInfoLink={partner.moreInfoLink}
              />
            ))}
            {partnersData.map(partner => (
              <PartnerCard
                key={`${partner.id}-clone`}
                logo={partner.logo}
                name={partner.name}
                phone={partner.phone}
                website={partner.website}
                moreInfoLink={partner.moreInfoLink}
              />
            ))}
          </div>
        </div>
      </main>
    </>
  );
}

export default ExhibitorsPage;
