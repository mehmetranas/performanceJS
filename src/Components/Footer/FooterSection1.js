import React from "react";

// Styles
import styles from "./Footer.module.scss";

function FooterSection1() {
  return (
    <>
      <div>
        <p className={styles.title}>Vefa Dent</p>
        <p className={styles.text}>
          <a href="#">Über Uns</a>
        </p>
        <p className={styles.text}>
          <a href="#">Unsere Ärzte</a>
        </p>
        <p className={styles.text}>
          <a href="#">Unsere Kliniken</a>
        </p>
        <p className={styles.text}>
          <a href="#">Online Beratung</a>
        </p>
      </div>
    </>
  );
}

export default FooterSection1;
