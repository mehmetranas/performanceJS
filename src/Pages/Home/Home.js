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
  HealthRouteLarge,
  HealthRouteSmall,
} from "../../Components";

// Select
import styles from "./Home.module.scss";

function Home() {
  return (
    <>
      <div className="grid-cols-12 grid">
        <div className="col-span-10 col-start-2">
          <AppSwiper />
        </div>
      </div>
      {/* Section Beratung */}
      <div className=" grid grid-cols-12">
        <div className="col-span-10 col-start-2">
          <div className="grid xl:grid-cols-10">
            <div className="sectionBeratungsText  col-span-10 xl:col-span-3 py-3">
              <SectionBeratungText />
            </div>
            <div className="selectBox col-span-10 md:col-span-7">
              <div className="grid grid-rows-2 items-center h-full xl:gap-0 gap-4">
                <SectionBeratungSelects />
                <SectionBeratungInputs />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Section Unsere Behandlungen */}
      <div className="grid grid-cols-12">
        <div className="xl:col-span-10 col-span-12 xl:col-start-2">
          <div className="grid grid-cols-10">
            <div className="col-span-full md:col-span-4 mt-20 md:col-start-4">
              <SectionTitle
                title="Unsere Behandlungen"
                subTitle="Gesunde Zähne und ein strahlend weißes Lächeln"
              />
            </div>
            <div className="col-span-10 mt-5">
              <EventsSlider />
            </div>
          </div>
        </div>
      </div>

      {/* Section Health Route */}
      <div className="grid grid-cols-12">
        <div className="col-span-10 col-start-2">
          <div className="grid grid-cols-10">
            <div className="col-span-full md:col-span-4 mt-20 md:col-start-4">
              <SectionTitle
                title="Ihre Gesundheitsreise"
                subTitle="Urlaub machen für gesündere Zähne"
              />
            </div>
            <div className="col-span-10 mt-20">
              <div className="md:hidden block">
                <HealthRouteSmall />
              </div>
              <div className="hidden md:block">
                <HealthRouteLarge />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section Staff Slider */}
      <div className="grid grid-cols-12 mt-32">
        <div className="col-span-10 col-start-2">
          <div className="grid grid-cols-10">
            <div className="col-span-full md:col-span-4 mt-20 md:col-start-4">
              <SectionTitle
                title="Unsere Ärzte"
                subTitle="Ein kompetentes Team, was Ihre Wünsche erfüllt"
              />
            </div>
            <div className="col-span-10 mt-5">
              <StaffSlider />
            </div>
          </div>
        </div>
      </div>

      {/* Section Cliniques */}
      <div className="grid grid-cols-12">
        <div className="col-span-10 col-start-2">
          <div className="grid grid-cols-10">
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
        </div>
      </div>
    </>
  );
}

export default Home;
