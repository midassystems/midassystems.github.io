import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { SiReadthedocs } from "react-icons/si";
import styles from "./socials.module.css";

export default function Socialbar() {
  return (
    <div className={styles.icon_bar}>
      <a href="https://github.com/midassystems">
        <FaGithub />
      </a>
      <a href="https://midastrader.readthedocs.io/en/latest/">
        <SiReadthedocs />
      </a>
      <a href="https://www.linkedin.com/company/midassystems">
        <FaLinkedin />
      </a>
    </div>
  );
}
