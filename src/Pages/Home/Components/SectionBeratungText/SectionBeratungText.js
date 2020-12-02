import React from "react";

// Components
import { Selects } from "../index";

// Styles
import styles from "./SectionBeratungText.module.scss";

function SectionBeratungText() {
  return (
    <>
      <div className={`${styles.text} col-span-4`}>
        <p className="my-0 px-2 md:text-left text-center">
          Jetzt einen Termin vereinbaren.
        </p>
      </div>
    </>
  );
}

export default SectionBeratungText;
