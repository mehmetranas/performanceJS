import React from "react";
import { HashLink } from "react-router-hash-link";

// Styles
import styles from "./Footer.module.scss";

// provider
import { useLanguageContext } from "../../languages-service/container/Langauge";

function FooterSection1() {
  const { dictionary } = useLanguageContext();
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
            {dictionary?.appShared.aboutUs}
          </HashLink>
        </p>
        <p className={styles.text}>
          <HashLink smooth to="/#staff">
            {dictionary?.appShared.staff}
          </HashLink>
        </p>
        <p className={styles.text}>
          <a href="#">{dictionary?.appShared.ourClinics}</a>
        </p>
        <p className={styles.text}>
          <a href="#">{dictionary?.appShared.onlineReservation}</a>
        </p>
      </div>
    </>
  );
}

export default FooterSection1;
