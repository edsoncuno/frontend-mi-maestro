import styles from "./index.module.css";
import data from "./data.js";
import Carousel from "../../../components/carousel";

export default function App() {
  return (
    <section id="section-nosotros" className={styles.container}>
      <div className={styles.image}>
        <Carousel images={data.urlImages} />
      </div>
      <div className={styles.text}>
        <h2 className={styles.title}>Nosotros</h2>
        <p className={styles.paragraph}>
          "Somos un equipo de expertos en construcción y renovación de hogares
          comprometidos a brindarte una experiencia única y satisfactoria. Desde
          pequeñas reparaciones hasta proyectos de construcción personalizados,
          trabajamos incansablemente para convertir tus ideas en realidad y
          lograr un resultado que eleve la belleza y funcionalidad de tu hogar a
          nuevas alturas."
        </p>
      </div>
    </section>
  );
}
