import React from 'react';
import styles from './AboutContent.module.css';
import aboutMainImage from '../../assets/Conceito-1920x1080-1.png';

function AboutContent() {
  return (
    <section className={styles.aboutContent}>
      <div className={styles.container}>
          <div className={styles.textColumn}>
            <div className={styles.imageWrapper}>
              <img src={aboutMainImage} alt="Visão geral do evento Compra Minas" />
            </div>
            <p>
              A força de vendas da Minasul alinhou a estratégia de trabalho para a 22ª Edição da Compra Minas. A feira de negócios, que será realizada nos dias 12, 13 e 14 de março trará opções de produtos e preços para seus cooperados.
            </p>
            <p>
             Nesta edição da Compra Minas, o produtor encontrará produtos como insumos, sementes, maquinários, implementos e tratores Mahindra com opções de preço, prazo e até condições de barter.
            </p>
            <p>
Em 2024, a Minasul chega aos 66 anos de vida, com foco no crescimento, rentabilidade, saúde financeira, boa atuação no mercado, produtividade e sobretudo a confiança dos seus cooperados, fortalecendo ainda mais o compromisso com a comunidade em que atua, criando soluções e opções para o fortalecimento da cadeia.
            </p>
            <p>
              Todas essas campanhas e eventos que a Minasul promove ao longo do ano são para facilitar a vida do produtor e dar opções para que ele possa fazer seu planejamento agrícola com segurança financeira. “Como sempre, a cooperativa proporciona as melhores opções que o mercado oferece quanto a fabricantes de implementos para o cafeicultor. Além disso, na linha agro, trazemos os tratores Mahindra, robustos e com excelente custo x benefício para o produtor rural”, explicou o Diretor Técnico e de Desenvolvimento, Bernardo Paiva.
            </p>
            <p>
              Com unidades de atendimento em 17 municípios, a Minasul é uma das mais importantes cooperativas do setor de agronegócios de Minas Gerais. O Compra Minas acontecerá na sede do Complexo Operacional, localizado em Varginha.
            </p>
            <p>
              Os cooperados que forem à Feira ainda terão toda as orientações que precisam na hora de efetuar as compras. Tudo com a garantia de entrega e qualidade asseguradas pela Minasul.
            </p>
            <p>
              O Compra Minas é uma realização da Minasul, em parceria de: Adama, Café Brasil, Syngenta, Basf, Bayer, Rovensa Next, Yara, Agro CP, Ihara, Mosaic, Giro Agro, Wiser, Quimifol, Miac e Corteva. Apoio Institucional: Minasul SustentAgro, Legacy, Minasul Specialty Coffee, S.P.A Saúde, Perfetto Grano e Mahindra Tratores. Presença da equipe da Rádio Minas FM, a rádio oficial do Compra Minas.
            </p>
            <h4>Serviço</h4>
            <p>
              20ª Edição do Compra Minas<br/>
              Data: 12 a 14 de Março<br/>
              Horário: das 7h às 18h<br/>
              Local: Complexo Operacional Minasul
            </p>
          </div>
        </div>
    </section>
  );
}

export default AboutContent;
