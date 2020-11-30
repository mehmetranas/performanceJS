import React from "react";

// Components
import { SocialIcons } from "../index";

// Styles
import styles from "./Footer.module.scss";

function FooterSection3() {
  return (
    <>
      <div>
        <p className={styles.title}>Kontakt</p>
        <p className={styles.text}>
          <strong>ATAKENT</strong>
          <br />
          <span>Atakent Mahallesi Mithat Paşa Caddesi No:74, Kat:1/A</span>
        </p>
        <p className={styles.text}>
          <strong>ÇAMLICA</strong>
          <br />
          <span>
            Namık Kemal Mahallesi Sütçü İmam Caddesi Savaş Sokak No:2/5
          </span>
        </p>
        <p className={styles.text}>
          <span>+90 216 344 01 34</span>
          <br />
          <span>info@vefadent.com.tr</span>
        </p>
        <p className={styles.text}>Online Beratung</p>
        <SocialIcons />
      </div>
    </>
  );
}

export default FooterSection3;
