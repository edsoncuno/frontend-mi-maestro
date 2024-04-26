import styles from "./index.module.css";

export default function App(props) {
  return (
    <article className={styles.container}>
      <div
        className={styles.img}
        style={{
          backgroundImage: `url("${props.data.url}")`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      ></div>
      <div className={styles.text}>
        <div className={styles.title}>{props.data.title}</div>
      </div>
    </article>
  );
}
