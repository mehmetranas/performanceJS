import React from "react";

// Components
import {
  AppSwiper,
  SectionBeratungText,
  SectionBeratungSelects,
  SectionBeratungInputs,
} from "./Components";

import { UnsereBehandlungen, UnsereBehandlungenSlider } from "../../Components";

// Select
import styles from "./Home.module.scss";

function Home() {
  return (
    <>
      <AppSwiper />
      <div className="container grid grid-cols-10">
        {/* Section Beratung */}
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
      {/* Section Unsere Behandlungen */}
      <div className="container grid grid-cols-10">
        <div className="col-span-4 mt-20 col-start-4">
          <UnsereBehandlungen />
        </div>
        <div className="col-span-8 col-start-2 mt-5">
          <UnsereBehandlungenSlider />
        </div>
      </div>
    </>
  );
}

export default Home;
