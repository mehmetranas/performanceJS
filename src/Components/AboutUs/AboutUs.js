import React from "react";

//Styles
import styles from "./AboutUs.module.scss";

// images
import image1 from "../../Images/dentist-job.png";
import image2 from "../../Images/dentist-job2.png";
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

      <div className="text-primary-1 hidden">
        <div className="grid grid-cols-2">
          {/* Paragraph 1 */}
          <div className="flex flex-auto image justify-end">
            <img
              src={image1}
              alt="about us"
              className="ml-20"
              height="350"
              width="350"
            />
          </div>
          <div className="flex items-center text">
            <p className={`${styles.description} w-1/3`}>
              Seit 1992 bieten unsere Vefadent- Polikliniken umfassende und
              erstklassige Leistungen für Ihre Zahngesundheit nach europäischen
              Standarts an.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2">
          {/* Paragraph 2 */}
          <div className="flex items-center text ml-auto justify-end">
            <p className={`${styles.description} w-1/3`}>
              Durch einer innovativen Praxisausstattung und modernster Technik
              können wir unsere Patienten effizient betreuen und ermöglichen
              Ihnen eine Wohlfühlatmosphäre.
            </p>
          </div>
          <div className="flex flex-auto image justify-start">
            <img src={image2} alt="about us" height="350" width="350" />
          </div>
        </div>
        <div className="grid grid-cols-2">
          {/* Paragraph 3 */}
          <div className="flex flex-auto image justify-end">
            <img
              src={image3}
              alt="about us"
              className="ml-20"
              height="350"
              width="350"
            />
          </div>
          <div className="flex items-center text pl-3">
            <p className={`${styles.description} w-1/3`}>
              Unsere spezialisierten Ärzte als auch kompetenten MitarbeiterInnen
              legen großen Wert auf die individuelle, vertrauensvolle und
              bestmögliche Behandlung der Patienten.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutUs;
