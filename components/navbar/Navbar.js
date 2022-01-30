import React from "react";
import styles from "../../styles/Home.module.css";
import { UilBloggerAlt } from "@iconscout/react-unicons";
import Link from "next/link";

function Navbar(props) {
  return (
    <div className={styles.header}>
      <nav className={styles.navbarContainer}>
        <a href="#" className={styles.logo}>
          <Link href="/">K.O</Link>
        </a>
        <div className={styles.navMenu}>
          <Link href="/blog" passHref>
            <div href="#" className={styles.navLink}>
              <UilBloggerAlt size={32} color={"#fff"} />
              Blog
            </div>
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
