import Header from "./../header";
import styles from "./index.module.css";

export default function App({ children }) {
  return (
    <>
      <Header/>
      <main className={styles.container}>{children}</main>
    </>
  );
}