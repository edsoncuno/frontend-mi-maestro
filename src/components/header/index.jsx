"use client";
import styles from "./index.module.css";
import data from "./data.js";
import { useState } from "react";

export default function App() {
  const [showNavigation, setShowNavigation] = useState(false);

  const listSectionsLinks = data.map((item, index) => (
    <li key={"id-section-link-" + index} className={styles.itemLink}>
      <a
        href={item.href}
        onClick={(e) => scrollToSection(e)}
        className={styles.link}
      >
        {item.label}
      </a>
    </li>
  ));

  function scrollToSection(event) {
    event.preventDefault();
    const targetId = event.target.getAttribute("href");
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      const headerHeight = document.querySelector("header")?.offsetHeight || 0;
      const targetPosition =
        targetElement.getBoundingClientRect().top +
        window.scrollY -
        headerHeight;

      window.scrollTo({ top: targetPosition, behavior: "smooth" });
    }

    setShowNavigation(false);
  }
  return (
    <header className={styles.container}>
      <a
        className={styles.logo}
        href={"#section-inicio"}
        onClick={(e) => scrollToSection(e)}
      ></a>
      <nav
        className={styles.navigation}
        style={showNavigation ? { left: 0 } : {}}
      >
        <ul className={styles.listLinks}>
          {listSectionsLinks}
          {showNavigation && (
            <>
              <li className={styles.itemLink}>
                <a
                  className={styles.linkFacebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  href={"https://www.facebook.com/"}
                >
                  <div style={{ marginRight: "1rem" }}>Facebook</div>
                  <div
                    style={{
                      width: "50px",
                      height: "50px",
                      backgroundImage: "url('/icons/facebook.svg')",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                    }}
                  ></div>
                </a>
              </li>
              <li className={styles.itemLink}>
                <a
                  className={styles.linkWhatsApp}
                  target="_blank"
                  rel="noopener noreferrer"
                  href={"https://wa.me/970555161"}
                >
                  <div style={{ marginRight: "1rem" }}>WhatsApp</div>
                  <div
                    style={{
                      width: "3rem",
                      height: "3rem",
                      backgroundImage: "url('/icons/whatsapp.svg')",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                    }}
                  ></div>
                </a>
              </li>
            </>
          )}
        </ul>
      </nav>
      <div
        className={styles.bars}
        onClick={() => {
          setShowNavigation(!showNavigation);
        }}
      ></div>
      <a
        href={"#section-contacto"}
        onClick={(e) => scrollToSection(e)}
        className={styles.solicitarServicio}
      >
        Solicitar servicio
      </a>
    </header>
  );
}
