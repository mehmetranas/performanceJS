import React from "react";

// Components
import {
  AppSwiper,
  SectionBeratungText,
  SectionBeratungSelects,
} from "./Components";

// Select
import styles from "./Home.module.scss";

function Home() {
  return (
    <>
      <AppSwiper />
      <div className="container grid grid-cols-12">
        <div className="sectionBeratungsText col-span-4">
          <SectionBeratungText />
        </div>
        <div className="selectBox col-span-6">
          <div className="grid grid-rows-2 items-center h-full">
            <div className={styles.shadowBox}>
              <SectionBeratungSelects />
            </div>
            <div className={styles.shadowBox}>
              <SectionBeratungSelects />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
