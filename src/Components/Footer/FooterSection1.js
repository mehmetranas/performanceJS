import React from "react";
import { HashLink } from "react-router-hash-link";

// Styles
import styles from "./Footer.module.scss";

function FooterSection1() {
  return (
    <>
      <div>
        <p className={styles.title}>
          <HashLink smooth to="/#home">
            Globally Dent
          </HashLink>
          ,
        </p>
        <p className={styles.text}>
          <HashLink smooth to="/#uber">
            Über Uns
          </HashLink>
        </p>
        <p className={styles.text}>
          <HashLink smooth to="/#staff">
            Unsere Ärzte
          </HashLink>
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
