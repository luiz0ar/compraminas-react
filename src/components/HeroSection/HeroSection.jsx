import React, { useEffect, useState } from 'react'
import styles from './HeroSection.module.css'
import api from '../../api/api'

function HeroSection() {
  const [data, setData] = useState(null)

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await api.get('/start')
        setData(response.data)
      } catch (error) {
        console.error('Erro ao buscar dados da seção inicial:', error)
      }
    }

    fetchData()
  }, [])

  if (!data) return null

  return (
    <section className={styles.hero}>
      <div className={styles.heroContainer}>
        <div className={styles.infoColumn}>
          <h1>COMPRA MINAS: compra certa, resultado garantido!</h1>
          <div className={styles.details}>
            <p>{data.firstMessage}</p>
          </div>
          <a
            href={data.linkButton}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.instagramCta}
          >
            {data.textButton}
          </a>
        </div>
        <div className={styles.imageColumn}>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
