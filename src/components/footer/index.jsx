import styles from "./index.module.css";
import data from "./data.js";
import { useState, useEffect } from "react";
import RedSocial from "./red-social";

export default function App() {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    setNow(new Date());
  }, []);

  const listEnlacesInternos = data.enlacesInternos.map((item, index) => (
    <li
      key={"id-enlaces-internos-footer-" + index}
      className={styles.itemEnlacesInternos}
    >
      <a className={styles.linkEnlacesInternos} href={item.href}>
        {item.label}
      </a>
    </li>
  ));

  const listInformacionDeContacto = data.informacionDeContacto.map(
    (item, index) => (
      <li
        key={"id-informacion-de-contacto-footer-" + index}
        className={styles.itemInformacionDeContacto}
      >
        {item.name}: {item.value}
      </li>
    )
  );

  const listRedesSociales = data.redesSociales.map((item, index) => (
    <li
      key={"id-redes-sociales-footer-" + index}
      className={styles.itemRedesSociales}
    >
      <RedSocial data={item} />
    </li>
  ));
  return (
    <footer className={styles.container}>
      <div className={styles.enlacesInternos}>
        <h3 className={styles.title}>Navegación</h3>
        <ul className={styles.listEnlacesInternos}>{listEnlacesInternos}</ul>
      </div>
      <div className={styles.informacionDeContacto}>
        <h3 className={styles.title}>Información de Contacto</h3>
        <ul className={styles.listInformacionDeContacto}>
          {listInformacionDeContacto}
        </ul>
      </div>
      <div className={styles.redesSociales}>
        <h3 className={styles.title}>Redes Sociales</h3>
        <ul className={styles.listRedesSociales}>{listRedesSociales}</ul>
      </div>
      <div className={styles.copyright}>
        <p>
          Derechos de autor &copy; {now.getFullYear()} . Todos los derechos
          reservados.
        </p>
      </div>
    </footer>
  );
}
