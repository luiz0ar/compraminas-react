import React, { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import styles from './ContactForm.module.css';

function ContactForm() {
  const [name, setName] = useState('');
  const [subject, setSubject] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [consent, setConsent] = useState(false);

  const [recaptchaToken, setRecaptchaToken] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!recaptchaToken) {
      alert("Por favor, complete o reCAPTCHA.");
      return;
    }

    alert("Mensagem enviada com sucesso!");
    setName('');
    setSubject('');
  };

  return (
    <section className={styles.formSection}>
      <div className={styles.container}>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor="name">Seu nome</label>
            <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="subject">Assunto</label>
            <input type="text" id="subject" value={subject} onChange={(e) => setSubject(e.target.value)} required />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">E-mail</label>
            <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="phone">Telefone</label>
            <input type="tel" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
          </div>
          <div className={`${styles.formGroup} ${styles.fullWidth}`}>
            <label htmlFor="message">Digite sua mensagem</label>
            <textarea id="message" rows="6" value={message} onChange={(e) => setMessage(e.target.value)} required></textarea>
          </div>
          <div className={`${styles.formGroup} ${styles.fullWidth} ${styles.checkboxGroup}`}>
            <input type="checkbox" id="consent" checked={consent} onChange={(e) => setConsent(e.target.checked)} required />
            <label htmlFor="consent">
              Li e de acordo em fornecer os meus dados para que a Minasul possa realizar o meu atendimento e autorizo a notificação dos dados para envio de e-mail marketing e mensagens via aplicativos dos serviços prestados pela Minasul. <a href="https://minasul.com.br/politica">Política de Privacidade</a>
            </label>
          </div>
          <div className={`${styles.formGroup} ${styles.fullWidth}`}>
            <ReCAPTCHA
              sitekey="6LesyX4rAAAAAA9J0AzxCYvIdST7GxPxg1_PGgbY"
              onChange={(token) => setRecaptchaToken(token)}
            />
          </div>
          <div className={`${styles.formGroup} ${styles.fullWidth}`}>
            <button type="submit" className={styles.submitButton}>ENVIAR</button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default ContactForm;
