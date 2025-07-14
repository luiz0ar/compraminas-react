import React from 'react';
import styles from './PressSection.module.css';
import { FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';

function PressSection({ article }) {
  const articleUrl = window.location.href;
  const paragraphs = article.content.split('\n\n');

  return (
    <article className={styles.articleLayout}>
      <div className={styles.container}>
        <header className={styles.articleHeader}>
          <h1>{article.title}</h1>
          <div className={styles.metaInfo}>
            <span>Publicado em {article.publishDate}</span>
            <div className={styles.shareLinks}>
              <span>Compartilhe:</span>
              <a href={`https://www.facebook.com/sharer/sharer.php?u=${articleUrl}`} target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
              <a href={`https://twitter.com/intent/tweet?url=${articleUrl}&text=${article.title}`} target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
              <a href={`https://api.whatsapp.com/send?text=${article.title} ${articleUrl}`} target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
            </div>
          </div>
        </header>
        <div className={styles.featuredImage}>
          <img src={article.featuredImage} alt={article.title} />
        </div>
        <div className={styles.articleBody}>
          {paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>
    </article>
  );
}

export default PressSection;
