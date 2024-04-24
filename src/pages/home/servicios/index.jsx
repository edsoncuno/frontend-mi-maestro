import styles from "./index.module.css";
import data from "./data.js";

export default function App() {
  return (
    <section id="section-servicios" className={styles.container}>
      <div className={styles.title}>{data.titulo}</div>
    </section>
  );
}
