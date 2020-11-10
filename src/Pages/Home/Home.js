import React from "react";

// Components
import {
  AppSwiper,
  SectionBeratungText,
  SectionBeratungSelects,
  SectionBeratungInputs,
} from "./Components";

// Select
import styles from "./Home.module.scss";

function Home() {
  return (
    <>
      <AppSwiper />
      <div className="container grid grid-cols-10">
        <div className="sectionBeratungsText col-span-3 py-3">
          <SectionBeratungText />
        </div>
        <div className="selectBox col-span-7">
          <div className="grid grid-rows-2 items-center h-full">
            <SectionBeratungSelects />
            <SectionBeratungInputs />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
