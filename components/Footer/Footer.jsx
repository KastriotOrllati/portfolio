import React from "react";
import styles from "../../styles/Home.module.css";
import { UilLinkedin, UilGithub, UilDiscord } from "@iconscout/react-unicons";
function Footer(props) {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.footerInfo}>
        <h3>@KastriotOrllati 2022</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing</p>
      </div>

      <ul className={styles.footerContact}>
        <li>
          <a
            href="https://www.linkedin.com/in/kastriot-orllati-13363b1a1/"
            target="_blank"
            rel="noreferrer"
          >
            <UilLinkedin /> KastriotOrllati
          </a>
        </li>
        <li>
          <a
            href="https://github.com/KastriotOrllati"
            target="_blank"
            rel="noreferrer"
          >
            <UilGithub /> KastriotOrllati
          </a>
        </li>
        <li>
          <UilDiscord /> KastriotOrllati#9677
        </li>
      </ul>
    </div>
  );
}

export default Footer;
