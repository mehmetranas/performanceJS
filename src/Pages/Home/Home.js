import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

// Components
import {
  AppSwiper,
  SectionBeratungText,
  SectionBeratungInputs,
} from "./Components";

import {
  SectionTitle,
  EventsSlider,
  StaffSlider,
  CliniquesLocationMap,
  HealthRouteLarge,
  HealthRouteSmall,
  AboutUs,
} from "../../Components";

// providers
import { useLanguageContext } from "../../languages-service/container/Langauge";

function Home() {
  const { dictionary } = useLanguageContext();
  const { id } = useParams();

  const scrollToSection = (id) => {
    const target = document.getElementById(id);

    if (target) {
      let offsetTop = target.offsetTop;
      window.scrollTo({
        top: offsetTop - 100,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    if (id) {
      scrollToSection(id);
    }
  }, [id]);

  return (
    <>
      <div className="grid-cols-12 grid" id="home">
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
            <div className="selectBox grid items-center col-span-10 md:col-span-7">
              <SectionBeratungInputs />
            </div>
          </div>
        </div>
      </div>
      {/* Section Unsere Behandlungen */}
      <div className="grid grid-cols-12" id="behandlungen">
        <div className="xl:col-span-10 col-span-12 xl:col-start-2">
          <div className="grid grid-cols-10">
            <div className="col-span-8 col-start-2 md:col-span-4 md:mt-20 mt-10 md:col-start-4">
              <SectionTitle
                title={dictionary?.home.behandlung.title}
                subTitle={dictionary?.home.behandlung.subTitle}
              />
            </div>
            <div className="col-span-10 md:mt-5">
              <EventsSlider />
            </div>
          </div>
        </div>
      </div>

      {/* Section Health Route */}
      <div className="grid grid-cols-12">
        <div className="col-span-10 col-start-2">
          <div className="grid grid-cols-10">
            <div className="col-span-8 col-start-2 md:col-span-4 md:mt-20 md:col-start-4">
              <SectionTitle
                title={dictionary?.home.healthRoute.title}
                subTitle={dictionary?.home.healthRoute.subTitle}
              />
            </div>
            <div className="col-span-10 md:mt-20 mt-5">
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
      <div className="grid grid-cols-12 md:mt-32" id="staff">
        <div className="col-span-10 col-start-2">
          <div className="grid grid-cols-10">
            <div className="col-span-8 col-start-2 md:col-span-4 mt-20 md:col-start-4">
              <SectionTitle
                title={dictionary?.home.staff.title}
                subTitle={dictionary?.home.staff.subTitle}
              />
            </div>
            <div className="col-span-10 md:mt-5">
              <StaffSlider />
            </div>
          </div>
        </div>
      </div>

      {/* Section Uber Us */}
      <div className="grid grid-cols-12 md:mt-32" id="uberuns">
        <div className="col-span-10 col-start-2">
          <div className="grid grid-cols-10">
            <div className="col-span-8 col-start-2 md:col-span-4 mt-20 md:col-start-4">
              <SectionTitle
                title={dictionary?.home.aboutUs.title}
                subTitle={dictionary?.home.aboutUs.subTitle}
              />
            </div>
            <div className="col-span-10 md:mt-5">
              <AboutUs />
            </div>
          </div>
        </div>
      </div>

      {/* Section Cliniques */}
      <div className="grid grid-cols-12" id="contact">
        <div className="col-span-10 col-start-2">
          <div className="grid grid-cols-10">
            <div className="col-span-8 col-start-2 md:col-span-4  md:mt-20 md:col-start-4">
              <SectionTitle
                title={dictionary?.home.clinics.title}
                subTitle={dictionary?.home.clinics.subTitle}
              />
            </div>
            <div className="col-span-10 md:mt-5">
              <CliniquesLocationMap />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
