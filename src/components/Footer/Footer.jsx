import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Footer.module.css';
import api from '../../api/api'
import { FaPhoneAlt, FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn } from 'react-icons/fa';

function Footer() {
  const currentYear = new Date().getFullYear();
  const [footerData, setFooterData] = useState(null);

  useEffect(() => {
    async function fetchFooterData() {
      try {
        const response = await api.get('/footer');
        setFooterData(response.data);
      } catch (error) {
        console.error('Erro ao buscar dados do rodapé:', error);
      }
    }
    fetchFooterData();
  }, []);

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
            <li><NavLink to="/about">Sobre</NavLink></li>
            <li><NavLink to="/exhibitors">Expositores</NavLink></li>
            <li><NavLink to="/press">Imprensa</NavLink></li>
          </ul>
        </div>
        <div className={styles.linksColumn}>
          <h3 className={styles.footerHeading}>Contato</h3>
          <ul className={styles.footerList}>
            {footerData?.telefone_contato && (
              <li>
                <a href={`tel:${footerData.telefone_contato.replace(/\D/g, '')}`}>
                  <FaPhoneAlt /> {footerData.telefone_contato}
                </a>
              </li>
            )}
            <li><a href="https://minasul.com.br/politica">Política de Privacidade</a></li>
            <li><a href="/contact">Fale Conosco</a></li>
          </ul>
        </div>
      </div>
      <div className={styles.bottomBar}>
        <p className={styles.copyright}>&copy; {currentYear} Compra Minas. Todos os direitos reservados.</p>
        <div className={styles.socialLinks}>
          {footerData?.link_facebook && (
            <a href={footerData.link_facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FaFacebookF />
            </a>
          )}
          {footerData?.link_instagram && (
            <a href={footerData.link_instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram />
            </a>
          )}
          {footerData?.link_youtube && (
            <a href={footerData.link_youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube">
              <FaYoutube />
            </a>
          )}
          {footerData?.link_linkedin && (
            <a href={footerData.link_linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedinIn />
            </a>
          )}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
