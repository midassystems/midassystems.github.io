import Image from "next/image";
import styles from "./page.module.css";
import Socialbar from "./ui/socials";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Algorithimica tradon made simple.</h1>
        <h3>
          Whether you are a seasoned professional or a beginner the Midas System
          provide s eveyrhtign uou nee to build & strategies
        </h3>
        <Socialbar />
        <a href="https://midastrader.readthedocs.io/en/latest/">
          <button> Get Started</button>
        </a>
      </main>
    </div>
  );
}
