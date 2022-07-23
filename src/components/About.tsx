import styles from '../styles/components/About.module.css';

export function About() {
  return (
    <section id={styles.about}>
      <p className={styles.greetings}>👋🏼 Oi, eu sou o</p>
      <h1>Alex Faustino</h1>
      <h2>Eu desenvolvo aplicações<br />para web e mobile.</h2>
      <p className={styles.description}>Sou brasileiro 🇧🇷 e desenvolvedor back-end que adora aplicar tecnologia para resolver problemas. Tenho experiência em websites e aplicações, melhores práticas de SEO e metodologia ágil com SCRUM. Sou comunicativo, dedicado e sempre interessado em aprender novas tecnologias e aprimorar minhas habilidades.</p>
    </section>
  )
}