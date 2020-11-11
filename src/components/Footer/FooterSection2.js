import React from "react";

// Styles
import styles from "./Footer.module.scss";

function FooterSection2() {
  return (
    <>
      <div>
        <p className={styles.title}>
          <a href="#">Behandlungen</a>
        </p>
        <p className={styles.text}>
          <a href="#">Zahnbleaching</a>
        </p>
        <p className={styles.text}>
          <a href="#">Zahnimplantate</a>
        </p>
        <p className={styles.text}>
          <a href="#">Kieferorthopädie</a>
        </p>
        <p className={styles.text}>
          <a href="#">Wurzelkanalbehandlung</a>
        </p>
        <p className={styles.text}>
          <a href="#">Und vieles mehr...</a>
        </p>
      </div>
    </>
  );
}

export default FooterSection2;
