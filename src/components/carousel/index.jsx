"use client";
import styles from "./index.module.css";
import { useEffect, useRef } from "react";

export default function App(props) {
  const sliderRef = useRef(null);

  const mover = () => {
    const slider = sliderRef.current;
    slider.style.transition = "all 1s";
    slider.style.marginLeft = "-100%";

    setTimeout(() => {
      slider.appendChild(slider.firstElementChild);
      slider.style.transition = "all 0s";
      slider.style.marginLeft = "unset";
    }, 1000);
  };

  useEffect(() => {
    const intervalId = setInterval(mover, 3000);
    return () => clearInterval(intervalId);
  }, []);

  const slides = props.images.map((item, index) => (
    <div
      key={"id-slide-" + index}
      style={{
        width: "100%",
        height: "25rem",
        backgroundImage: `url(${item})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    ></div>
  ));

  return (
    <div className={styles.carousel}>
      <div className={styles.slider} ref={sliderRef}>
        {slides}
      </div>
    </div>
  );
}

/*

"use client";
import { useEffect, useRef } from "react";

export default function App(props) {
  const sliderRef = useRef(null);

  const mover = () => {
    const slider = sliderRef.current;
    slider.style.transition = "all 1s";
    slider.style.marginLeft = "-100%";

    setTimeout(() => {
      slider.appendChild(slider.firstElementChild);
      slider.style.transition = "all 0s";
      slider.style.marginLeft = "unset";
    }, 1000);
  };

  useEffect(() => {
    const intervalId = setInterval(mover, 2500);
    return () => clearInterval(intervalId);
  }, []);

  const slides = props.images.map((item) => (
    <div
      key={"id_" + item}
      style={{
        width: "100%",
        height: "25rem",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundImage: `url(${item})`,
      }}
    ></div>
  ));

  return (
    <div style={{ width: "100%", overflow: "hidden" }}>
      <div
        ref={sliderRef}
        style={{
          width: `calc(${"100%"} * ${props.images.length})`,
          display: "flex",
        }}
      >
        {slides}
      </div>
    </div>
  );
}

*/
