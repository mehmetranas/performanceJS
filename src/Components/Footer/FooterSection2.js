import React from "react";
import { HashLink } from "react-router-hash-link";

// Styles
import styles from "./Footer.module.scss";

function FooterSection2() {
  return (
    <>
      <div>
        <p className={styles.title}>
          <HashLink smooth to="/#behandlungen">
            Behandlungen
          </HashLink>
        </p>
        <p className={styles.text}>
          <HashLink smooth to="/#behandlungen">
            Zahnbleaching
          </HashLink>
        </p>
        <p className={styles.text}>
          <HashLink smooth to="/#behandlungen">
            Zahnimplantate
          </HashLink>
        </p>
        <p className={styles.text}>
          <HashLink smooth to="/#behandlungen">
            Kieferorthopädie
          </HashLink>
        </p>
        <p className={styles.text}>
          <HashLink smooth to="/#behandlungen">
            Wurzelkanalbehandlung
          </HashLink>
        </p>
        <p className={styles.text}>
          <HashLink smooth to="/#behandlungen">
            Und vieles mehr...
          </HashLink>
        </p>
      </div>
    </>
  );
}

export default FooterSection2;
