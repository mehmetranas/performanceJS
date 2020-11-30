import React from "react";

// Styles
import styles from "./SectionTitle.module.scss";

function SectionTitle({ title, subTitle }) {
  return (
    <>
      <div className="divide-y">
        <div className={`${styles.title} py-2`}>
          <p className="mb-0">{title}</p>
        </div>
        <div
          className={`${styles.subTitle} py-2`}
          style={{ borderColor: "#36A0FC" }}
        >
          <p className="mb-0">{subTitle}</p>
        </div>
      </div>
    </>
  );
}

export default SectionTitle;
