import styles from "./index.module.css";
import data from "./data.js";
import SocialNetwork from "../../../components/social-network";

export default function App() {
  const listRedesSociales = data.redesSociales.map((item, index) => (
    <li key={"id-redes-sociales" + index} className={styles.itemRedesSociales}>
      <SocialNetwork data={item} />
    </li>
  ));
  return (
    <section id="section-inicio" className={styles.container}>
      <div className={styles.shadow}>
        <div className={styles.content}>
          <div className={styles.logo}></div>
          <div className={styles.titulo}>{data.titulo}</div>
          <div className={styles.lema}>{data.lema}</div>
          <ul className={styles.listRedesSociales}>{listRedesSociales}</ul>
        </div>
      </div>
    </section>
  );
}
