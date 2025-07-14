import React from 'react';
import { Link } from 'react-router-dom';
import styles from './AboutSection.module.css';
import { IoIosArrowForward } from "react-icons/io";
import aboutImage from '../../assets/07a.-Banner-Carrossel-Compra-Minas-Minasul.png';


function AboutSection() {
  return (
    <section className={styles.aboutSection}>
      <div className={styles.container}>
        <div className={styles.titleWrapper}>
          <h2>SOBRE O COMPRA MINAS</h2>
        </div>

        <div className={styles.contentGrid}>
          <div className={styles.textColumn}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam id velit ornare, bibendum velit eget, laoreet quam. Vestibulum sit amet tortor placerat, suscipit nunc quis, interdum mi. Suspendisse in suscipit mauris. Vestibulum et ullamcorper massa. Vivamus vitae malesuada augue, vel rutrum sem. In hac habitasse platea dictumst. Quisque vel tempus magna. Suspendisse tempus mauris at turpis sodales, a ultricies arcu viverra.
            </p>
            <p>
              Suspendisse ut lobortis massa. Mauris porta, enim id consequat gravida, lacus est lacinia velit, in accumsan nulla tortor tempor nulla. Phasellus sed sollicitudin nulla. Aenean in dapibus elit. Ut consequat, mauris in sodales consectetur, turpis orci dictum ligula, porta semper erat erat eu libero. Aliquam varius turpis vitae mauris pulvinar, nec maximus nulla condimentum. Duis lacinia mi quis dui pretium commodo. Mauris nec ipsum non dolor faucibus lacinia ut at nunc. Duis vel scelerisque urna. Duis dignissim, odio sit amet suscipit gravida, augue arcu semper lectus, eget semper odio diam eget felis. Aenean venenatis fringilla dui eget tempor. Donec iaculis vel nisi ac iaculis. Suspendisse a facilisis ipsum. Proin efficitur tristique ligula a molestie.
            </p>
          </div>
          <div className={styles.imageColumn}>
            <img src={aboutImage} alt="Aminasul e Compra Minas" />
          </div>
        </div>

        <div className={styles.buttonWrapper}>
          <Link to="/about" className={styles.primaryButton}>
            CONHEÇA MAIS SOBRE O EVENTO
          </Link>
          <Link to="/exhibitors" className={styles.secondaryButton}>
            CONHEÇA OS EXPOSITORES
            <IoIosArrowForward />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
