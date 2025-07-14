import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import styles from './Header.module.css';
import logo from '../../assets/logo-compraminas.png';

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link to="/">
          <img src={logo} alt="Logo Compra Minas" className={styles.logo} />
        </Link>
        <nav className={styles.nav}>
          <ul>
            <li><NavLink to="/" className={({ isActive }) => isActive ? styles.active : ''}>Início</NavLink></li>
            <li><NavLink to="/about" className={({ isActive }) => isActive ? styles.active : ''}>Sobre</NavLink></li>
            <li><NavLink to="/exhibitors" className={({ isActive }) => isActive ? styles.active : ''}>Expositores</NavLink></li>
            <li><NavLink to="/press" className={({ isActive }) => isActive ? styles.active : ''}>Imprensa</NavLink></li>
            <li><NavLink to="/contact" className={({ isActive }) => isActive ? styles.active : ''}>Contato</NavLink></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
