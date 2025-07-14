import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Footer.module.css';
import { FaPhoneAlt, FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn } from 'react-icons/fa';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.siteFooter}>
      <div className={styles.footerContainer}>
        <div className={styles.logoColumn}>
          <p>A sua plataforma de compras governamentais em Minas Gerais, conectando oportunidades.</p>
        </div>
        <div className={styles.linksColumn}>
          <h3 className={styles.footerHeading}>Navegação</h3>
          <ul className={styles.footerList}>
            <li><NavLink to="/">Início</NavLink></li>
            <li><NavLink to="/sobre">Sobre</NavLink></li>
            <li><NavLink to="/expositores">Expositores</NavLink></li>
            <li><NavLink to="/imprensa">Imprensa</NavLink></li>
          </ul>
        </div>
        <div className={styles.linksColumn}>
          <h3 className={styles.footerHeading}>Contato</h3>
          <ul className={styles.footerList}>
            <li><a href="tel:+5535991276006"><FaPhoneAlt /> (35) 99127-6006</a></li>
            <li><a href="/politica-de-privacidade">Política de Privacidade</a></li>
            <li><a href="/contato">Fale Conosco</a></li>
          </ul>
        </div>
      </div>
      <div className={styles.bottomBar}>
        <p className={styles.copyright}>&copy; {currentYear} Compra Minas. Todos os direitos reservados.</p>
        <div className={styles.socialLinks}>
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FaFacebookF /></a>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram /></a>
          <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" aria-label="YouTube"><FaYoutube /></a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedinIn /></a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
