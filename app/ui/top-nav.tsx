import styles from "@/app/ui/top-nav.module.css";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaMedium } from "react-icons/fa6";

export default function TopNav() {
  return (
    <div className={styles.top_nav}>
      <div className={styles.nav_logo}>
        <img src="white_logo.png" />
        <h1>idas</h1>
      </div>
      <nav className={styles.nav}>
        <a href="#about" className={styles.top_nav_icons}>
          About
        </a>
        <a href="#experience" className={styles.top_nav_icons}>
          Experience
        </a>
        <a href="#projects" className={styles.top_nav_icons}>
          Projects
        </a>
        <a href="#contact" className={styles.top_nav_icons}>
          Contact
        </a>
      </nav>
    </div>
  );
}
