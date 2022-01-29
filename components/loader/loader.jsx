import React from "react";
import styles from "../../styles/Loader.module.css";

function loader(props) {
  return (
    <div className={styles.loaderContainer}>
      <div className={styles.hexBorder}>
        <div className={styles.hexagons}>
          <div className={styles.hexagon}></div>
          <div className={styles.hexagon}></div>
          <div className={styles.hexagon}></div>
          <div className={styles.hexagon}></div>
          <div className={styles.hexagon}></div>
          <div className={styles.hexagon}></div>
          <div className={styles.hexagon}></div>
        </div>
      </div>
    </div>
  );
}

export default loader;
