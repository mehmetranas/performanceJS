import React from "react";

// Styles
import styles from "./UnsereBehandlungen.module.scss";

function UnsereBehandlungen() {
  return (
    <>
      <div className={`${styles.title}`}>
        <p className="mb-0">Unsere Behandlungen</p>
      </div>
      <div className={`${styles.subTitle} mt-3`}>
        <p className="mb-0">Gesunde Zähne und ein strahlend weißes Lächeln</p>
      </div>
    </>
  );
}

export default UnsereBehandlungen;
