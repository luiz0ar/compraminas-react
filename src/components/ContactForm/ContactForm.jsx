import React, { useState, useEffect } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import api from '../../api/api';
import styles from './ContactForm.module.css';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    subject: '',
    email: '',
    phone: '',
    message: '',
  });

  const [recaptchaToken, setRecaptchaToken] = useState(null);
  const [recaptchaSiteKey, setRecaptchaSiteKey] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  useEffect(() => {
    api.get('/contact-settings')
      .then(response => {
        if (response.data.recaptcha_site_key) {
          setRecaptchaSiteKey(response.data.recaptcha_site_key);
        }
      })
      .catch(err => console.error("Error loading settings:", err))
      .finally(() => setIsLoading(false));
  }, []);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmitMessage('');

    if (!recaptchaToken) {
      setSubmitMessage("Por favor, complete o reCAPTCHA.");
      return;
    }

    setIsSubmitting(true);

    try {
      await api.post('/send-contact-email', { ...formData, recaptchaToken });
      setSubmitMessage("Mensagem enviada com sucesso! Obrigado.");
      setFormData({ name: '', subject: '', email: '', phone: '', message: '' });
    } catch (error) {
      const errorMessage = error.response?.data?.message || "Ocorreu um erro. Tente novamente.";
      setSubmitMessage(errorMessage);
      console.error("Erro no envio:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className={styles.formSection}>
      <div className={styles.container}>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor="name">Seu nome</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} required />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="subject">Assunto</label>
            <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleInputChange} required />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">E-mail</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} required />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="phone">Telefone</label>
            <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleInputChange} />
          </div>
          <div className={`${styles.formGroup} ${styles.fullWidth}`}>
            <label htmlFor="message">Digite sua mensagem</label>
            <textarea id="message" name="message" rows="6" value={formData.message} onChange={handleInputChange} required></textarea>
          </div>

          <div className={`${styles.formGroup} ${styles.fullWidth}`}>
            {isLoading ? (
              <p>Carregando verificação...</p>
            ) : (
              recaptchaSiteKey && (
                <ReCAPTCHA
                  sitekey={recaptchaSiteKey}
                  onChange={(token) => setRecaptchaToken(token)}
                  onExpired={() => setRecaptchaToken(null)}
                />
              )
            )}
          </div>

          <div className={`${styles.formGroup} ${styles.fullWidth}`}>
            <button type="submit" className={styles.submitButton} disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : 'ENVIAR'}
            </button>
          </div>

          {submitMessage && <p className={styles.submitMessage}>{submitMessage}</p>}
        </form>
      </div>
    </section>
  );
}

export default ContactForm;
