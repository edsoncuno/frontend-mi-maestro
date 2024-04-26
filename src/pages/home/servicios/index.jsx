import styles from "./index.module.css";
import data from "./data.js";
import Card from "./card";

export default function App() {
  const listCards = data.servicios.map((item, index) => {
    return (
      <li key={"id-servicio-" + index} className={styles.itemCards}>
        <Card data={item} />
      </li>
    );
  });

  return (
    <section id="section-servicios" className={styles.container}>
      <div className={styles.title}>{data.titulo}</div>
      <ul className={styles.listCards}>{listCards}</ul>
    </section>
  );
}
