import React from 'react';
import PageBanner from '../../components/PageBanner/PageBanner';
import ContactInfo from '../../components/ContactInfo/ContactInfo';
import ContactForm from '../../components/ContactForm/ContactForm';
import UnitsSection from '../../components/UnitsSection/UnitsSection';

function Contact() {
  return (
    <div>
      <PageBanner title="Contato" breadcrumb="CONTATO"/>
      <ContactInfo />
      <ContactForm />
      <UnitsSection />
    </div>
  );
}
export default Contact;
