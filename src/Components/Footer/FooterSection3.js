import React from "react";

// Components
import { SocialIcons } from "../index";

// Styles
import styles from "./Footer.module.scss";

// provider
import { useLanguageContext } from "../../languages-service/container/Langauge";

function FooterSection3() {
  const { dictionary } = useLanguageContext();
  return (
    <>
      <div>
        <p className={styles.title}>{dictionary?.appShared.contact}</p>
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
          <span>+49 176 23189214</span>
          <br />
          <span>info@globallydent.com</span>
        </p>
        <p className={styles.text}>{dictionary?.appShared.onlineReservation}</p>
        <SocialIcons />
      </div>
    </>
  );
}

export default FooterSection3;
