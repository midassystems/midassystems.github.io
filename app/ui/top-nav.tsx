import styles from "@/app/ui/top-nav.module.css";

export default function TopNav() {
  return (
    <div className={styles.top_nav}>
      <div className={styles.nav_logo}>
        <img src="white_logo.png" />
        <h1>idas</h1>
      </div>
      <nav className={styles.nav}>
        <a
          href="https://midastrader.readthedocs.io/en/latest/"
          className={styles.top_nav_icons}
        >
          Documentation
        </a>
      </nav>
    </div>
  );
}
