import React from "react";
import { HashLink } from "react-router-hash-link";

// Styles
import styles from "./Footer.module.scss";

// providers
import { useLanguageContext } from "../../languages-service/container/Langauge";

function FooterSection2() {
  const { dictionary } = useLanguageContext();
  return (
    <>
      <div>
        <p className={styles.title}>
          <HashLink smooth to="/#behandlungen">
            {dictionary?.appShared.treatments}
          </HashLink>
        </p>
        <p className={styles.text}>
          <HashLink smooth to="/#behandlungen">
            {dictionary?.appShared.service1}
          </HashLink>
        </p>
        <p className={styles.text}>
          <HashLink smooth to="/#behandlungen">
            {dictionary?.appShared.service2}
          </HashLink>
        </p>
        <p className={styles.text}>
          <HashLink smooth to="/#behandlungen">
            {dictionary?.appShared.service3}
          </HashLink>
        </p>
        <p className={styles.text}>
          <HashLink smooth to="/#behandlungen">
            {dictionary?.appShared.service4}
          </HashLink>
        </p>
        <p className={styles.text}>
          <HashLink smooth to="/#behandlungen">
            {dictionary?.appShared.service5}
          </HashLink>
        </p>
      </div>
    </>
  );
}

export default FooterSection2;
