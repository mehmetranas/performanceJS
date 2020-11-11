import React from "react";

// Styles
import styles from "./HealthRoute.module.scss";

function Description({ title1, title2, text }) {
  return (
    <>
      <div className="flex flex-col text-primary-1 ">
        <div className={styles.title}>
          <span>{title1}</span>
          <br />
          <strong>{title2}</strong>
        </div>
        <div className={styles.text}>
          <p>{text}</p>
        </div>
      </div>
    </>
  );
}

export default Description;
