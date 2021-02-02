import React from "react";

// Styles
import styles from "./UnsereBehandlungenItem.module.scss";

function UnsereBehandlungenItem(event) {
  const { image, content, title } = event;
  return (
    <>
      <div className={`grid grid-rows-3 ${styles.container}`}>
        <div className="row-span-1 p-4 flex items-center justify-evenly">
          <img src={image} alt="" />
          <p className={`${styles.cardTitle} text-left mb-0 pl-2`}>{title}</p>
        </div>
        <div className={`row-span-2 flex items-center ${styles.content}`}>
          <p className="mb-0">{content}</p>
        </div>
      </div>
    </>
  );
}

export default UnsereBehandlungenItem;
