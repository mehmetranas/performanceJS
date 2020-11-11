import React from "react";

// Components
import {
  AppSwiper,
  SectionBeratungText,
  SectionBeratungSelects,
  SectionBeratungInputs,
} from "./Components";

import {
  SectionTitle,
  EventsSlider,
  StaffSlider,
  LocationMap,
  CliniquesLocationMap,
} from "../../Components";

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
          <SectionTitle
            title="Unsere Behandlungen"
            subTitle="Gesunde Zähne und ein strahlend weißes Lächeln"
          />
        </div>
        <div className="col-span-10 mt-5">
          <EventsSlider />
        </div>
        <div className="col-span-4 mt-20 col-start-4">
          <SectionTitle
            title="Unsere Ärzte"
            subTitle="Ein kompetentes Team, was Ihre Wünsche erfüllt"
          />
        </div>
        <div className="col-span-10 mt-5">
          <StaffSlider />
        </div>
        <div className="col-span-4 mt-20 col-start-4">
          <SectionTitle
            title="Unsere Kliniken"
            subTitle="Modernste klinische Ausstattung mit professionellem Team"
          />
        </div>
        <div className="col-span-10 mt-5">
          <CliniquesLocationMap />
        </div>
      </div>
    </>
  );
}

export default Home;
