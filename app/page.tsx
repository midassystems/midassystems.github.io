import styles from "./page.module.css";
import Socialbar from "./ui/socials";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Algorithmic trading made simple.</h1>
        <h3>
          Whether you are a seasoned professional or a beginner the Midas System
          provides everything you need to build & deploy strategies.
        </h3>
        <Socialbar />
        <div className={styles.button_container}>
          <a href="https://midastrader.readthedocs.io/en/latest/">
            <button> Get Started</button>
          </a>
        </div>
      </main>
    </div>
  );
}
