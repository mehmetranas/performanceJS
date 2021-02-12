import React from "react";

// Components
import { Selects } from "../index";

// Styles
import styles from "./SectionBeratungText.module.scss";

//provider
import { useLanguageContext } from "../../../../languages-service/container/Langauge";

function SectionBeratungText() {
  const { dictionary } = useLanguageContext();
  return (
    <>
      <div className={`${styles.text} col-span-4`}>
        <p className="my-0 px-2 md:text-left text-center">
          {dictionary?.sectionBeratungText}
        </p>
      </div>
    </>
  );
}

export default SectionBeratungText;
