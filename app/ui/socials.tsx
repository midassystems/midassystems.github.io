import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaMedium } from "react-icons/fa6";
import { SiReadthedocs } from "react-icons/si";
import styles from "./socials.module.css";

export default function Socialbar() {
  return (
    <div className={styles.icon_bar}>
      <a href="https://github.com/anthonyb8">
        <FaGithub />
      </a>
      <a href="https://www.linkedin.com/in/anthonybax">
        <FaLinkedin />
      </a>
      <a href="https://medium.com/@anthonybaxter819">
        <SiReadthedocs />
      </a>
    </div>
  );
}
