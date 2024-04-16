import Header from "./../header";
import Footer from "./../footer";
import styles from "./index.module.css";

export default function App({ children }) {
  return (
    <>
      <Header />
      <main className={styles.container}>{children}</main>
      <Footer />
    </>
  );
}
