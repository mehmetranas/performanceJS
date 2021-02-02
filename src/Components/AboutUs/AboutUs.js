import React from "react";

//Styles
import styles from "./AboutUs.module.scss";

// images
import image3 from "../../Images/dentist-job3.png";

function AboutUs() {
  return (
    <>
      <div className="text-primary-1">
        <div className="grid grid--2 md:grid-cols-2 ">
          {/* Paragraph 3 */}
          <div className="flex flex-auto image justify-end">
            <img src={image3} alt="about us" className="ml-20" height="300" />
          </div>
          <div className="divide-dashed divide-primary-0 divide-y-2 flex flex-col items-start justify-center pl-3 space-y-5 text">
            <p className={`${styles.description} w-full md:w-1/3`}>
              Unsere spezialisierten Ärzte als auch kompetenten MitarbeiterInnen
              legen großen Wert auf die individuelle, vertrauensvolle und
              bestmögliche Behandlung der Patienten.
            </p>
            <p className={`${styles.description} w-full md:w-1/3`}>
              Seit 1992 bieten unsere Vefadent- Polikliniken umfassende und
              erstklassige Leistungen für Ihre Zahngesundheit nach europäischen
              Standarts an.
            </p>
            <p className={`${styles.description} w-full md:w-1/3`}>
              Durch einer innovativen Praxisausstattung und modernster Technik
              können wir unsere Patienten effizient betreuen und ermöglichen
              Ihnen eine Wohlfühlatmosphäre.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutUs;
