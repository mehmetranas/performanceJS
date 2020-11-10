import React from "react";

// Styles
import styles from "./UnsereBehandlungenItem.module.scss";

function UnsereBehandlungenItem({ image }) {
  return (
    <>
      <div className={`grid grid-rows-3 ${styles.container}`}>
        <div className="row-span-1 p-4 flex items-center justify-center">
          <img src={image} alt="" />
          <p className={`${styles.cardTitle} text-left mb-0 px-4`}>
            Zahn-Bleaching
          </p>
        </div>
        <div className={`row-span-2 flex items-center ${styles.content}`}>
          <p className="mb-0">
            Wenn unschöne Zahnverfärbungen das eigene ästhetische Empfinden
            trüben, kann ein Bleaching Abhilfe schaffen. Dabei können Sie
            einzelne Zähne, aber auch das ganze Gebiss bleichen lassen – ganz
            nach Bedarf.
          </p>
        </div>
      </div>
    </>
  );
}

export default UnsereBehandlungenItem;
