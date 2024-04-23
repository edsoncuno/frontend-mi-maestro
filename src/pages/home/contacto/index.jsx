"use client";
import styles from "./index.module.css";
import data from "./data.js";

export default function App() {
  const listDatos = data.datos.map((item, index) => {
    return (
      <div
        key={"id-dato-" + index}
        className={styles.dato}
        style={{
          border: `1px solid ${item.color}`,
        }}
      >
        <div
          className={styles.icon}
          style={{
            width: "4rem",
            height: "4rem",
            backgroundImage: `url(${item.imageUrl})`,
            backgroundSize: "80% 80%",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            marginRight: "1rem",
          }}
        ></div>
        <div className={styles.label}>{item.label}</div>
      </div>
    );
  });

  return (
    <section id="section-contacto" className={styles.container}>
      <h2 className={styles.title}>Contáctanos!</h2>
      <p className={styles.paragraph}>{data.lema}</p>
      <iframe
        className={styles.map}
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243.8832355482296!2d-76.93598452363076!3d-12.03444829027043!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c41e76af6963%3A0x30e88e869ed2438f!2sQuiquia%20motors!5e0!3m2!1sen!2spe!4v1690312857820!5m2!1sen!2spe"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      <div className={styles.datos}>{listDatos}</div>
    </section>
  );
}
